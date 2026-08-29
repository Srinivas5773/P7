/**
 * OmniHealth OS - Emergency Department & Triage Board Module
 * Implements the Emergency Severity Index (ESI Levels 1-5) color-coded board,
 * rapid trauma intake registration, ambulance tracker, bed assignment,
 * and Code Blue emergency dispatch alarms.
 */

const EmergencyModule = {
  isCodeBlueActive: false,

  init() {
    this.bindEvents();
    this.renderTriageBoard();
    this.renderAmbulanceTracker();
  },

  bindEvents() {
    const intakeBtn = document.getElementById("ed-rapid-intake-btn");
    if (intakeBtn) {
      intakeBtn.addEventListener("click", () => this.openRapidIntakeModal());
    }

    const codeBlueBtn = document.getElementById("ed-code-blue-btn");
    if (codeBlueBtn) {
      codeBlueBtn.addEventListener("click", () => this.toggleCodeBlue());
    }

    const filterSelect = document.getElementById("ed-triage-filter");
    if (filterSelect) {
      filterSelect.addEventListener("change", () => this.renderTriageBoard());
    }
  },

  renderTriageBoard() {
    const container = document.getElementById("ed-triage-board-list");
    if (!container || typeof Storage === 'undefined') return;

    const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);
    const filterVal = document.getElementById("ed-triage-filter") ? document.getElementById("ed-triage-filter").value : "all";

    let filtered = patients;
    if (filterVal !== "all") {
      filtered = patients.filter(p => (p.triageLevel || 3).toString() === filterVal);
    }

    // Sort by Triage Level (ESI 1 first, then 2, 3...)
    filtered.sort((a, b) => (a.triageLevel || 5) - (b.triageLevel || 5));

    const esiDescriptions = {
      1: { name: "ESI 1: Resuscitation", color: "esi-1", desc: "Immediate life-saving intervention required" },
      2: { name: "ESI 2: Emergent", color: "esi-2", desc: "High risk, confused/lethargic, severe pain/distress" },
      3: { name: "ESI 3: Urgent", color: "esi-3", desc: "Stable vitals, multiple resources needed" },
      4: { name: "ESI 4: Less Urgent", color: "esi-4", desc: "One resource needed (e.g. X-Ray or sutures)" },
      5: { name: "ESI 5: Non-Urgent", color: "esi-5", desc: "No resources needed (e.g. prescription refill)" }
    };

    container.innerHTML = filtered.map(p => {
      const esi = esiDescriptions[p.triageLevel || 3];
      const waitTimeMins = Math.floor(Math.random() * 45) + 5;

      return `
        <div class="ed-patient-card ${esi.color}-border">
          <div class="ed-card-header">
            <div class="ed-esi-pill ${esi.color}">
              ${esi.name}
            </div>
            <div class="ed-wait-time">⏱️ Wait: ${waitTimeMins} mins</div>
          </div>
          <div class="ed-card-body">
            <div class="ed-patient-name">${p.firstName} ${p.lastName} <span class="ed-mrn">(${p.mrn})</span></div>
            <div class="ed-demographics">${p.age} y/o ${p.gender} • Blood: ${p.bloodGroup} • Bed: <strong>${p.bedNumber || 'ED Waiting Area'}</strong></div>
            <div class="ed-chief-complaint">
              <strong>Chief Complaint:</strong> ${p.diagnoses && p.diagnoses[0] ? p.diagnoses[0].name : 'Acute chest discomfort / evaluation'}
            </div>
            <div class="ed-vitals-row">
              <span>HR: <strong>${p.vitals ? p.vitals.heartRate : '--'}</strong></span>
              <span>BP: <strong>${p.vitals ? `${p.vitals.bloodPressureSys}/${p.vitals.bloodPressureDia}` : '--'}</strong></span>
              <span>SpO2: <strong>${p.vitals ? p.vitals.oxygenSaturation : '--'}%</strong></span>
              <span>RR: <strong>${p.vitals ? p.vitals.respiratoryRate : '--'}</strong></span>
            </div>
          </div>
          <div class="ed-card-footer">
            <button class="btn btn-sm btn-outline-primary" onclick="EmergencyModule.viewPatientEHR('${p.id}')">View EHR</button>
            <button class="btn btn-sm btn-outline-warning" onclick="EmergencyModule.openBedAssignModal('${p.id}')">Reassign Bed</button>
            <button class="btn btn-sm btn-danger" onclick="EmergencyModule.triggerPatientTraumaAlert('${p.id}')">Trauma Alert</button>
          </div>
        </div>
      `;
    }).join('');
  },

  renderAmbulanceTracker() {
    const container = document.getElementById("ed-ambulance-list");
    if (!container) return;

    const mockAmbulances = [
      { unit: "Medic 12 (Boston EMS)", etaMins: 4, type: "ALS (Advanced Life Support)", patient: "68 y/o Male, Acute STEMI in transit, CPR ongoing", status: "Inbound" },
      { unit: "Rescue 4 (Cambridge EMS)", etaMins: 11, type: "BLS (Basic Life Support)", patient: "24 y/o Female, Motor vehicle collision, fractured tibia", status: "Inbound" },
      { unit: "MedFlight 1 (Helicopter)", etaMins: 18, type: "Critical Care Transport", patient: "45 y/o Male, Traumatic brain injury, intubated", status: "Inbound" }
    ];

    container.innerHTML = mockAmbulances.map(amb => `
      <div class="ambulance-item animate-pulse-border">
        <div class="amb-header">
          <div class="amb-unit">🚑 ${amb.unit}</div>
          <div class="amb-eta badge badge-danger">ETA: ${amb.etaMins} MINS</div>
        </div>
        <div class="amb-type">${amb.type}</div>
        <div class="amb-patient-desc">${amb.patient}</div>
      </div>
    `).join('');
  },

  openRapidIntakeModal() {
    const modal = document.createElement("div");
    modal.className = "clinical-modal-backdrop";
    modal.innerHTML = `
      <div class="clinical-modal animate-pop" style="max-width: 600px;">
        <div class="clinical-modal-header ed-header">
          <h3>Emergency ED Rapid Triage Intake</h3>
          <button class="modal-close-btn">&times;</button>
        </div>
        <div class="clinical-modal-body">
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label class="form-label">First Name *</label>
              <input type="text" id="ed-in-fname" class="form-input" placeholder="e.g. John" required>
            </div>
            <div class="form-group">
              <label class="form-label">Last Name *</label>
              <input type="text" id="ed-in-lname" class="form-input" placeholder="e.g. Doe" required>
            </div>
            <div class="form-group">
              <label class="form-label">Age *</label>
              <input type="number" id="ed-in-age" class="form-input" value="45" min="0" max="120">
            </div>
            <div class="form-group">
              <label class="form-label">Gender</label>
              <select id="ed-in-gender" class="form-select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">ESI Triage Category Level *</label>
            <select id="ed-in-esi" class="form-select font-bold">
              <option value="1">ESI 1 - Resuscitation (Immediate Life Threat)</option>
              <option value="2" selected>ESI 2 - Emergent (High Risk / Severe Pain / Altered Mental)</option>
              <option value="3">ESI 3 - Urgent (Stable Vitals, Multiple Resources)</option>
              <option value="4">ESI 4 - Less Urgent (Single Resource)</option>
              <option value="5">ESI 5 - Non-Urgent (No Resources)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Chief Complaint / Initial Symptoms *</label>
            <textarea id="ed-in-complaint" class="form-textarea" rows="2" placeholder="e.g., Sudden onset crushing retrosternal chest pain radiating to left arm with diaphoresis." required></textarea>
          </div>
          <div class="grid grid-cols-4 gap-2">
            <div class="form-group">
              <label class="form-label text-xs">Heart Rate</label>
              <input type="number" id="ed-in-hr" class="form-input" value="98">
            </div>
            <div class="form-group">
              <label class="form-label text-xs">BP (Sys/Dia)</label>
              <input type="text" id="ed-in-bp" class="form-input" value="138/86">
            </div>
            <div class="form-group">
              <label class="form-label text-xs">SpO2 %</label>
              <input type="number" id="ed-in-spo2" class="form-input" value="95">
            </div>
            <div class="form-group">
              <label class="form-label text-xs">Temp °C</label>
              <input type="number" step="0.1" id="ed-in-temp" class="form-input" value="37.2">
            </div>
          </div>
        </div>
        <div class="clinical-modal-footer">
          <button class="btn btn-secondary modal-cancel-btn">Cancel</button>
          <button class="btn btn-danger modal-admit-btn">Admit & Assign ED Bed</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => document.body.removeChild(modal);
    modal.querySelector(".modal-close-btn").addEventListener("click", closeModal);
    modal.querySelector(".modal-cancel-btn").addEventListener("click", closeModal);

    modal.querySelector(".modal-admit-btn").addEventListener("click", () => {
      const fname = document.getElementById("ed-in-fname").value.trim() || "John";
      const lname = document.getElementById("ed-in-lname").value.trim() || "Doe";
      const age = parseInt(document.getElementById("ed-in-age").value, 10) || 45;
      const gender = document.getElementById("ed-in-gender").value;
      const esi = parseInt(document.getElementById("ed-in-esi").value, 10);
      const complaint = document.getElementById("ed-in-complaint").value.trim() || "Acute medical evaluation";
      const hr = parseInt(document.getElementById("ed-in-hr").value, 10) || 85;
      const bpStr = document.getElementById("ed-in-bp").value || "120/80";
      const [sys, dia] = bpStr.split('/').map(v => parseInt(v.trim(), 10) || 80);
      const spo2 = parseInt(document.getElementById("ed-in-spo2").value, 10) || 98;
      const temp = parseFloat(document.getElementById("ed-in-temp").value) || 37.0;

      const newId = "PAT-" + Math.floor(1000 + Math.random() * 9000);
      const newPatient = {
        id: newId,
        mrn: "MRN-" + Math.floor(100000 + Math.random() * 900000),
        firstName: fname,
        lastName: lname,
        dob: "1980-01-01",
        age: age,
        gender: gender,
        bloodGroup: "O+",
        phone: "+1 (555) 000-0000",
        email: `${fname.toLowerCase()}.${lname.toLowerCase()}@example.com`,
        department: "Emergency",
        ward: "Emergency Wing",
        bedNumber: `Trauma Bay ${esi === 1 ? '1' : '3'}`,
        status: esi === 1 ? "Critical" : "Admitted",
        triageLevel: esi,
        admissionDate: new Date().toISOString(),
        allergies: [],
        vitals: {
          heartRate: hr,
          bloodPressureSys: sys || 120,
          bloodPressureDia: dia || 80,
          respiratoryRate: 18,
          oxygenSaturation: spo2,
          temperatureC: temp,
          painScale: 7,
          recordedAt: new Date().toISOString()
        },
        diagnoses: [{ code: "R07.9", name: complaint, status: "Active", date: new Date().toISOString().slice(0, 10) }],
        prescriptions: [],
        soapNotes: []
      };

      Storage.insert(STORAGE_KEYS.PATIENTS, newPatient);
      Storage.logAuditEvent("Triage Nurse (ED)", "RAPID_INTAKE_ADMISSION", newPatient.id, `Admitted ${fname} ${lname} via ESI Level ${esi} Triage.`);

      closeModal();
      this.renderTriageBoard();

      Notify.showToast({
        title: `ESI ${esi} Patient Admitted`,
        message: `${fname} ${lname} admitted to ED Trauma Bay.`,
        type: esi <= 2 ? "error" : "success"
      });
    });
  },

  toggleCodeBlue() {
    this.isCodeBlueActive = !this.isCodeBlueActive;
    const banner = document.getElementById("ed-code-blue-banner");

    if (this.isCodeBlueActive) {
      if (banner) banner.style.display = "flex";
      if (typeof AudioService !== 'undefined') AudioService.startCodeBlueSiren();
      Storage.logAuditEvent("ED Attending Physician", "CODE_BLUE_TRIGGERED", "ED Trauma Bay 1", "Code Blue medical emergency alert activated across facility.");
      Notify.showCriticalAlert({
        title: "CODE BLUE ACTIVATED",
        message: "Medical Emergency Team & Code Blue Resuscitation Team dispatched to ED Trauma Bay 1. Crash cart and airway team en route.",
        onConfirm: () => this.toggleCodeBlue()
      });
    } else {
      if (banner) banner.style.display = "none";
      if (typeof AudioService !== 'undefined') AudioService.stopAlarm();
      Notify.showToast({
        title: "Code Blue Stand-Down",
        message: "Code Blue emergency alert terminated.",
        type: "info"
      });
    }
  },

  viewPatientEHR(patientId) {
    if (typeof EHRModule !== 'undefined') {
      EHRModule.loadPatient(patientId);
      // Switch view tab to EHR
      if (typeof App !== 'undefined') App.switchModule('ehr');
    }
  },

  triggerPatientTraumaAlert(patientId) {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientId);
    if (!patient) return;

    Notify.showCriticalAlert({
      title: `TRAUMA RESUSCITATION ALERT: ${patient.firstName} ${patient.lastName}`,
      message: `Level 1 Trauma Activation for ${patient.firstName} ${patient.lastName} (ESI ${patient.triageLevel}). General Surgery, Anesthesia, and Blood Bank notified.`,
      onConfirm: () => {}
    });
  },

  openBedAssignModal(patientId) {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientId);
    if (!patient) return;

    const newBed = prompt(`Reassign bed for ${patient.firstName} ${patient.lastName}:`, patient.bedNumber || "Bed-ED-01");
    if (newBed) {
      Storage.update(STORAGE_KEYS.PATIENTS, patient.id, { bedNumber: newBed });
      this.renderTriageBoard();
      Notify.showToast({
        title: "Bed Reassigned",
        message: `${patient.firstName} reassigned to ${newBed}`,
        type: "success"
      });
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EmergencyModule };
}
