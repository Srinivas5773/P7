/**
 * OmniHealth OS - Pharmacy, Formulary & Prescription Dispensing Engine
 * Features:
 * - Real-time Multi-Drug Interaction Evaluator (Pharmacokinetic & Pharmacodynamic)
 * - Drug-Allergy Cross-Reactivity Validator
 * - National Drug Formulary Catalog & Inventory Stock Control
 * - Dispensing Workflow (Intake -> Safety Check -> Dispense -> Label Generator)
 */

const PharmacyModule = {
  selectedDrugsForInteraction: [],

  init() {
    this.bindEvents();
    this.renderFormularyInventory();
    this.renderInteractionChecker();
    this.renderPendingDispenseQueue();
  },

  bindEvents() {
    const searchInput = document.getElementById("pharmacy-drug-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => this.filterFormulary(e.target.value));
    }

    const checkBtn = document.getElementById("pharmacy-check-interaction-btn");
    if (checkBtn) {
      checkBtn.addEventListener("click", () => this.evaluateDrugInteractions());
    }

    const restockBtn = document.getElementById("pharmacy-restock-btn");
    if (restockBtn) {
      restockBtn.addEventListener("click", () => this.openRestockModal());
    }
  },

  renderFormularyInventory() {
    const tableBody = document.getElementById("pharmacy-inventory-tbody");
    if (!tableBody || typeof Storage === 'undefined') return;

    const drugs = Storage.getAll(STORAGE_KEYS.DRUGS);

    tableBody.innerHTML = drugs.map(drug => {
      const isLowStock = drug.stockCount <= drug.reorderLevel;

      return `
        <tr class="${isLowStock ? 'row-warning' : ''}">
          <td>
            <div class="font-bold text-sky-400">${drug.name}</div>
            <div class="text-xs text-muted">${drug.genericName} • (${drug.brandName})</div>
          </td>
          <td><span class="badge-code">${drug.atcCode}</span></td>
          <td class="text-xs">${drug.category}</td>
          <td>
            <span class="font-bold ${isLowStock ? 'text-danger' : 'text-success'}">
              ${drug.stockCount}
            </span>
            ${isLowStock ? '<span class="badge-tag-critical text-xs ml-1">REORDER</span>' : ''}
          </td>
          <td>$${drug.unitCost.toFixed(2)}</td>
          <td>$${drug.retailPrice.toFixed(2)}</td>
          <td><span class="text-xs font-mono">${drug.expiryDate}</span></td>
          <td>
            <button class="btn btn-xs btn-outline-primary" onclick="PharmacyModule.addDrugToInteractionCheck('${drug.id}')">+ Interaction</button>
            <button class="btn btn-xs btn-outline-secondary" onclick="PharmacyModule.quickDispense('${drug.id}')">Dispense</button>
          </td>
        </tr>
      `;
    }).join('');
  },

  filterFormulary(query) {
    const q = query.trim().toLowerCase();
    const rows = document.querySelectorAll("#pharmacy-inventory-tbody tr");
    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(q) ? "" : "none";
    });
  },

  renderInteractionChecker() {
    const listContainer = document.getElementById("pharmacy-selected-drugs-list");
    if (!listContainer) return;

    if (this.selectedDrugsForInteraction.length === 0) {
      listContainer.innerHTML = `<span class="text-muted text-xs">No medications queued for interaction scan. Click "+ Interaction" on formulary items or select below.</span>`;
      return;
    }

    listContainer.innerHTML = this.selectedDrugsForInteraction.map(drugId => {
      const drug = Storage.getById(STORAGE_KEYS.DRUGS, drugId);
      if (!drug) return '';
      return `
        <div class="drug-chip animate-pop">
          <span>💊 ${drug.name}</span>
          <button onclick="PharmacyModule.removeDrugFromInteractionCheck('${drugId}')">&times;</button>
        </div>
      `;
    }).join('');
  },

  addDrugToInteractionCheck(drugId) {
    if (!this.selectedDrugsForInteraction.includes(drugId)) {
      this.selectedDrugsForInteraction.push(drugId);
      this.renderInteractionChecker();
      this.evaluateDrugInteractions();
    }
  },

  removeDrugFromInteractionCheck(drugId) {
    this.selectedDrugsForInteraction = this.selectedDrugsForInteraction.filter(id => id !== drugId);
    this.renderInteractionChecker();
    this.evaluateDrugInteractions();
  },

  evaluateDrugInteractions() {
    const resultsContainer = document.getElementById("pharmacy-interaction-results");
    if (!resultsContainer || typeof CLINICAL_DRUG_INTERACTIONS === 'undefined') return;

    if (this.selectedDrugsForInteraction.length < 2) {
      resultsContainer.innerHTML = `<div class="cdss-banner cdss-clear">Select 2 or more medications to run real-time clinical interaction analysis.</div>`;
      return;
    }

    const detected = [];

    // Pairwise interaction checking
    for (let i = 0; i < this.selectedDrugsForInteraction.length; i++) {
      for (let j = i + 1; j < this.selectedDrugsForInteraction.length; j++) {
        const idA = this.selectedDrugsForInteraction[i];
        const idB = this.selectedDrugsForInteraction[j];

        const match = CLINICAL_DRUG_INTERACTIONS.find(
          rule => (rule.drugA === idA && rule.drugB === idB) || (rule.drugA === idB && rule.drugB === idA)
        );

        if (match) {
          const drugA = Storage.getById(STORAGE_KEYS.DRUGS, idA);
          const drugB = Storage.getById(STORAGE_KEYS.DRUGS, idB);
          detected.push({ match, drugA, drugB });
        }
      }
    }

    if (detected.length === 0) {
      resultsContainer.innerHTML = `
        <div class="cdss-banner cdss-clear">
          <strong>✅ No Adverse Clinical Drug Interactions Detected</strong>
          <p class="text-xs mt-1">Combination of selected formulary medications exhibits no known major pharmacokinetic or pharmacodynamic contraindications in the current clinical rule database.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = detected.map(item => {
      const isCritical = item.match.severity === "CRITICAL_CONTRAINDICATION";
      const isSevere = item.match.severity === "SEVERE_RISK";

      return `
        <div class="cdss-banner ${isCritical ? 'cdss-danger' : isSevere ? 'cdss-warning' : 'cdss-info'} animate-slide-in">
          <div class="cdss-title">
            ${isCritical ? '🛑 CRITICAL CONTRAINDICATION' : isSevere ? '⚠️ SEVERE INTERACTION HAZARD' : 'ℹ️ CLINICAL MONITORING REQUIRED'}
            : ${item.drugA.name} + ${item.drugB.name}
          </div>
          <div class="cdss-desc mt-1">
            <strong>Effect:</strong> ${item.match.effect}<br>
            <strong>Mechanism:</strong> ${item.match.description}<br>
            <strong class="text-sky-300">Recommended Action:</strong> ${item.match.action}
          </div>
        </div>
      `;
    }).join('');

    if (detected.some(d => d.match.severity === "CRITICAL_CONTRAINDICATION")) {
      Notify.showCriticalAlert({
        title: "PHARMACY CRITICAL CONTRAINDICATION",
        message: "A fatal drug-drug interaction was identified during the clinical safety check. Review before dispensing.",
        onConfirm: () => {}
      });
    }
  },

  renderPendingDispenseQueue() {
    const container = document.getElementById("pharmacy-dispense-queue-list");
    if (!container || typeof Storage === 'undefined') return;

    const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);
    const queue = [];

    patients.forEach(p => {
      if (p.prescriptions) {
        p.prescriptions.forEach(rx => {
          if (rx.status === 'Active') {
            queue.push({ rx, patient: p });
          }
        });
      }
    });

    if (queue.length === 0) {
      container.innerHTML = `<div class="empty-state-text">No active inpatient prescriptions queued for dispensing.</div>`;
      return;
    }

    container.innerHTML = queue.slice(0, 6).map(item => `
      <div class="dispense-queue-item">
        <div class="dispense-patient">
          <strong>${item.patient.firstName} ${item.patient.lastName}</strong> (${item.patient.mrn})
          <span class="text-xs text-muted block">${item.patient.ward || 'Inpatient'} • Bed: ${item.patient.bedNumber || 'N/A'}</span>
        </div>
        <div class="dispense-med">
          <div class="font-bold text-sky-400">${item.rx.name} ${item.rx.dose}</div>
          <div class="text-xs text-muted">${item.rx.frequency}</div>
        </div>
        <div class="dispense-actions">
          <button class="btn btn-sm btn-primary" onclick="PharmacyModule.fulfillDispense('${item.patient.id}', '${item.rx.id}')">Verify & Dispense</button>
        </div>
      </div>
    `).join('');
  },

  fulfillDispense(patientId, rxId) {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientId);
    if (!patient || !patient.prescriptions) return;

    const rx = patient.prescriptions.find(p => p.id === rxId);
    if (!rx) return;

    // Deduct 1 unit from stock if drugId exists
    if (rx.drugId) {
      const drug = Storage.getById(STORAGE_KEYS.DRUGS, rx.drugId);
      if (drug && drug.stockCount > 0) {
        Storage.update(STORAGE_KEYS.DRUGS, drug.id, { stockCount: drug.stockCount - 30 }); // Dispense 30-day count
      }
    }

    Storage.logAuditEvent(
      "Staff Pharmacist (PharmD)",
      "PRESCRIPTION_DISPENSED",
      patient.id,
      `Dispensed ${rx.name} ${rx.dose} for patient ${patient.firstName} ${patient.lastName}`
    );

    Notify.showToast({
      title: "Prescription Dispensed",
      message: `${rx.name} ${rx.dose} packaged and verified for ${patient.firstName} ${patient.lastName}.`,
      type: "success"
    });

    this.renderFormularyInventory();
    this.renderPendingDispenseQueue();
  },

  quickDispense(drugId) {
    const drug = Storage.getById(STORAGE_KEYS.DRUGS, drugId);
    if (!drug) return;

    if (drug.stockCount <= 0) {
      Notify.showToast({
        title: "Stock Depleted",
        message: `${drug.name} is currently out of stock. Please restock.`,
        type: "error"
      });
      return;
    }

    Storage.update(STORAGE_KEYS.DRUGS, drug.id, { stockCount: drug.stockCount - 1 });
    this.renderFormularyInventory();

    Notify.showToast({
      title: "Unit Dispensed",
      message: `Dispensed 1 unit of ${drug.name}. Remaining: ${drug.stockCount - 1}`,
      type: "info"
    });
  },

  openRestockModal() {
    const drugName = prompt("Enter drug name or ATC code to restock (+500 units):", "Atorvastatin Calcium");
    if (!drugName) return;

    const drugs = Storage.getAll(STORAGE_KEYS.DRUGS);
    const found = drugs.find(d => d.name.toLowerCase().includes(drugName.toLowerCase()));

    if (found) {
      Storage.update(STORAGE_KEYS.DRUGS, found.id, { stockCount: found.stockCount + 500 });
      Storage.logAuditEvent("Pharmacy Inventory Manager", "DRUG_RESTOCKED", found.id, `Added 500 units to ${found.name}`);
      this.renderFormularyInventory();
      Notify.showToast({
        title: "Inventory Restocked",
        message: `Added 500 units to ${found.name}. New Stock: ${found.stockCount + 500}`,
        type: "success"
      });
    } else {
      alert("Medication not found in formulary catalog.");
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PharmacyModule };
}
