/**
 * OmniHealth OS - Laboratory Information System (LIS) Module
 * Features:
 * - Diagnostic Test Order Entry (CPOE) & Specimen Accessioning
 * - Reference Interval Normal / High / Low / Critical Panic Auto-Flagging
 * - Inpatient & STAT Lab Results Viewer
 * - Quality Control & Lab Release Sign-Off
 */

const LaboratoryModule = {
  activePanelId: "PANEL-CBC",

  init() {
    this.bindEvents();
    this.renderCatalog();
    this.renderActivePanelForm();
    this.renderPatientLabHistory();
  },

  bindEvents() {
    const catalogSelect = document.getElementById("lis-catalog-select");
    if (catalogSelect) {
      catalogSelect.addEventListener("change", (e) => {
        this.activePanelId = e.target.value;
        this.renderActivePanelForm();
      });
    }

    const patientSelect = document.getElementById("lis-patient-select");
    if (patientSelect && typeof Storage !== 'undefined') {
      const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);
      patientSelect.innerHTML = patients.map(p => `
        <option value="${p.id}">${p.firstName} ${p.lastName} (${p.mrn})</option>
      `).join('');

      patientSelect.addEventListener("change", () => this.renderPatientLabHistory());
    }

    const releaseBtn = document.getElementById("lis-release-results-btn");
    if (releaseBtn) {
      releaseBtn.addEventListener("click", () => this.releaseLabResults());
    }
  },

  renderCatalog() {
    const select = document.getElementById("lis-catalog-select");
    if (!select || typeof MOCK_LAB_CATALOG === 'undefined') return;

    select.innerHTML = MOCK_LAB_CATALOG.map(panel => `
      <option value="${panel.id}">
        ${panel.name} (${panel.department}) - ${panel.tubeType}
      </option>
    `).join('');
  },

  renderActivePanelForm() {
    const container = document.getElementById("lis-panel-input-container");
    if (!container || typeof MOCK_LAB_CATALOG === 'undefined') return;

    const panel = MOCK_LAB_CATALOG.find(p => p.id === this.activePanelId) || MOCK_LAB_CATALOG[0];

    container.innerHTML = `
      <div class="lis-panel-meta">
        <div><strong>Specimen:</strong> ${panel.tubeType}</div>
        <div><strong>Department:</strong> ${panel.department}</div>
        <div><strong>Turnaround Time:</strong> ${panel.turnaroundTime}</div>
      </div>
      <table class="clinical-mini-table mt-4">
        <thead>
          <tr>
            <th>Assay Name</th>
            <th>Value Entry</th>
            <th>Units</th>
            <th>Reference Range</th>
          </tr>
        </thead>
        <tbody>
          ${panel.tests.map(t => {
            const midVal = ((t.refMin + t.refMax) / 2).toFixed(t.refMax < 10 ? 2 : 1);
            return `
              <tr>
                <td><strong>${t.name}</strong> <span class="badge-code">${t.code}</span></td>
                <td>
                  <input type="number" step="0.01" class="form-input lis-val-input" data-code="${t.code}" data-name="${t.name}" data-unit="${t.unit}" data-min="${t.refMin}" data-max="${t.refMax}" data-panic-low="${t.panicLow || ''}" data-panic-high="${t.panicHigh || ''}" value="${midVal}">
                </td>
                <td class="text-xs text-muted">${t.unit}</td>
                <td class="text-xs">${t.refMin} - ${t.refMax}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  },

  releaseLabResults() {
    const patientSelect = document.getElementById("lis-patient-select");
    if (!patientSelect || typeof Storage === 'undefined') return;

    const patientId = patientSelect.value;
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientId);
    if (!patient) return;

    const panel = MOCK_LAB_CATALOG.find(p => p.id === this.activePanelId) || MOCK_LAB_CATALOG[0];
    const inputs = document.querySelectorAll(".lis-val-input");

    const items = [];
    let hasPanic = false;

    inputs.forEach(input => {
      const code = input.getAttribute("data-code");
      const name = input.getAttribute("data-name");
      const unit = input.getAttribute("data-unit");
      const min = parseFloat(input.getAttribute("data-min"));
      const max = parseFloat(input.getAttribute("data-max"));
      const panicLow = input.getAttribute("data-panic-low") ? parseFloat(input.getAttribute("data-panic-low")) : null;
      const panicHigh = input.getAttribute("data-panic-high") ? parseFloat(input.getAttribute("data-panic-high")) : null;
      const val = parseFloat(input.value);

      let flag = "NORMAL";
      if (panicHigh !== null && val >= panicHigh) { flag = "CRITICAL_HIGH"; hasPanic = true; }
      else if (panicLow !== null && val <= panicLow) { flag = "CRITICAL_LOW"; hasPanic = true; }
      else if (val > max) flag = "HIGH";
      else if (val < min) flag = "LOW";

      items.push({
        test: name,
        code,
        value: val,
        unit,
        refRange: `${min} - ${max}`,
        flag
      });
    });

    const newLabResult = {
      id: "LAB-" + Date.now().toString(36).toUpperCase(),
      date: new Date().toISOString(),
      panel: panel.name,
      status: "Completed",
      items: items
    };

    if (!patient.labResults) patient.labResults = [];
    patient.labResults.unshift(newLabResult);

    Storage.update(STORAGE_KEYS.PATIENTS, patient.id, { labResults: patient.labResults });
    Storage.logAuditEvent("Clinical Laboratory Scientist", "LAB_RESULTS_RELEASED", patient.id, `Released ${panel.name} with ${items.length} assays.`);

    Notify.showToast({
      title: "Lab Results Released",
      message: `${panel.name} released to chart for ${patient.firstName} ${patient.lastName}`,
      type: hasPanic ? "error" : "success"
    });

    if (hasPanic) {
      Notify.showCriticalAlert({
        title: "CRITICAL PANIC LAB VALUE ALERT",
        message: `Panic threshold breached in ${panel.name} for ${patient.firstName} ${patient.lastName}. Immediate physician callback protocol activated.`,
        onConfirm: () => {}
      });
    }

    this.renderPatientLabHistory();
  },

  renderPatientLabHistory() {
    const container = document.getElementById("lis-patient-history-container");
    const patientSelect = document.getElementById("lis-patient-select");
    if (!container || !patientSelect || typeof Storage === 'undefined') return;

    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientSelect.value);
    if (!patient || !patient.labResults || patient.labResults.length === 0) {
      container.innerHTML = `<div class="empty-state-text">No laboratory reports on file for selected patient.</div>`;
      return;
    }

    container.innerHTML = patient.labResults.map(lab => `
      <div class="lab-history-card">
        <div class="lab-history-header">
          <div>
            <strong>${lab.panel}</strong>
            <div class="text-xs text-muted">Acc: ${lab.id} • ${new Date(lab.date).toLocaleString()}</div>
          </div>
          <span class="badge badge-success">Released</span>
        </div>
        <table class="clinical-mini-table mt-2">
          <thead>
            <tr>
              <th>Test Assay</th>
              <th>Result</th>
              <th>Reference</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            ${lab.items.map(item => `
              <tr class="${item.flag === 'CRITICAL_HIGH' || item.flag === 'CRITICAL_LOW' ? 'row-critical' : item.flag === 'HIGH' || item.flag === 'LOW' ? 'row-abnormal' : ''}">
                <td>${item.test}</td>
                <td><strong>${item.value}</strong> <span class="text-muted text-xs">${item.unit}</span></td>
                <td>${item.refRange}</td>
                <td>
                  ${item.flag === 'NORMAL' ? '<span class="badge-tag-normal">NORMAL</span>' :
                    item.flag === 'HIGH' ? '<span class="badge-tag-high">HIGH</span>' :
                    item.flag === 'LOW' ? '<span class="badge-tag-low">LOW</span>' :
                    '<span class="badge-tag-critical">CRITICAL</span>'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `).join('');
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LaboratoryModule };
}
