/**
 * OmniHealth OS - Electronic Health Records (EHR) & Clinical Dossier Module
 * Handles patient record navigation, vital trends graphing, allergy badges,
 * dynamic SOAP note documentation with ICD-10 & CPT coding autocomplete,
 * problem list management, and encounter timelines.
 */

const EHRModule = {
  activePatientId: "PAT-1001",

  init() {
    this.bindEvents();
    this.renderPatientSelector();
    this.loadPatient(this.activePatientId);
  },

  bindEvents() {
    const patientSelect = document.getElementById("ehr-patient-select");
    if (patientSelect) {
      patientSelect.addEventListener("change", (e) => {
        this.loadPatient(e.target.value);
      });
    }

    const saveSoapBtn = document.getElementById("ehr-save-soap-btn");
    if (saveSoapBtn) {
      saveSoapBtn.addEventListener("click", () => this.saveSoapNote());
    }

    const addVitalBtn = document.getElementById("ehr-add-vital-btn");
    if (addVitalBtn) {
      addVitalBtn.addEventListener("click", () => this.openAddVitalsModal());
    }

    const addAllergyBtn = document.getElementById("ehr-add-allergy-btn");
    if (addAllergyBtn) {
      addAllergyBtn.addEventListener("click", () => this.openAddAllergyModal());
    }

    const exportPdfBtn = document.getElementById("ehr-export-summary-btn");
    if (exportPdfBtn) {
      exportPdfBtn.addEventListener("click", () => this.exportPatientSummary());
    }

    const icdSearchInput = document.getElementById("ehr-icd-search");
    if (icdSearchInput) {
      icdSearchInput.addEventListener("input", (e) => this.searchICD10(e.target.value));
    }
  },

  renderPatientSelector() {
    const select = document.getElementById("ehr-patient-select");
    if (!select || typeof Storage === 'undefined') return;

    const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);
    select.innerHTML = patients.map(p => `
      <option value="${p.id}" ${p.id === this.activePatientId ? 'selected' : ''}>
        ${p.firstName} ${p.lastName} (${p.mrn}) - ${p.gender}, ${p.age}y - ${p.ward || p.department}
      </option>
    `).join('');
  },

  loadPatient(patientId) {
    this.activePatientId = patientId;
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientId);
    if (!patient) return;

    // Log HIPAA access
    Storage.logAuditEvent(
      "Clinical User (EHR Module)",
      "PATIENT_RECORD_VIEW",
      `${patient.id} (${patient.firstName} ${patient.lastName})`,
      `Viewed EHR patient dossier, vitals, and clinical encounter notes.`
    );

    // Header Dossier
    const nameEl = document.getElementById("ehr-patient-name");
    const mrnEl = document.getElementById("ehr-patient-mrn");
    const dobEl = document.getElementById("ehr-patient-dob");
    const wardEl = document.getElementById("ehr-patient-ward");
    const statusEl = document.getElementById("ehr-patient-status");
    const bloodEl = document.getElementById("ehr-patient-blood");

    if (nameEl) nameEl.textContent = `${patient.firstName} ${patient.lastName}`;
    if (mrnEl) mrnEl.textContent = patient.mrn || patient.id;
    if (dobEl) dobEl.textContent = `${patient.dob} (${patient.age} yrs, ${patient.gender})`;
    if (wardEl) wardEl.textContent = `${patient.department || 'Outpatient'} • ${patient.ward || 'General'} (${patient.bedNumber || 'No Bed Assigned'})`;
    if (statusEl) {
      statusEl.textContent = patient.status || 'Active';
      statusEl.className = `badge ${patient.status === 'Critical' ? 'badge-danger' : patient.status === 'Admitted' ? 'badge-primary' : 'badge-success'}`;
    }
    if (bloodEl) bloodEl.textContent = `Blood: ${patient.bloodGroup || 'Unknown'}`;

    // Render Allergies
    this.renderAllergies(patient.allergies || []);

    // Render Vitals & Vital History Chart
    this.renderVitals(patient.vitals || {});
    this.renderVitalChart(patient.vitalHistory || []);

    // Render Problem List / Diagnoses
    this.renderDiagnoses(patient.diagnoses || []);

    // Render Active Medications
    this.renderMedications(patient.prescriptions || []);

    // Render SOAP Notes
    this.renderSoapNotes(patient.soapNotes || []);

    // Render Lab Results preview
    this.renderLabResultsPreview(patient.labResults || []);

    // Render Clinical Decision Support Warnings
    this.checkClinicalDecisionSupport(patient);
  },

  renderAllergies(allergies) {
    const container = document.getElementById("ehr-allergies-list");
    if (!container) return;

    if (allergies.length === 0) {
      container.innerHTML = `<span class="badge badge-success">No Known Drug Allergies (NKDA)</span>`;
      return;
    }

    container.innerHTML = allergies.map(a => `
      <div class="allergy-tag ${a.severity === 'Critical' || a.severity === 'Severe' ? 'allergy-severe' : 'allergy-moderate'}">
        <span class="allergy-name">⚠️ ${a.allergen}</span>
        <span class="allergy-reaction">(${a.reaction} - ${a.severity})</span>
      </div>
    `).join('');
  },

  renderVitals(vitals) {
    const hrEl = document.getElementById("ehr-vital-hr");
    const bpEl = document.getElementById("ehr-vital-bp");
    const rrEl = document.getElementById("ehr-vital-rr");
    const spo2El = document.getElementById("ehr-vital-spo2");
    const tempEl = document.getElementById("ehr-vital-temp");
    const bmiEl = document.getElementById("ehr-vital-bmi");
    const painEl = document.getElementById("ehr-vital-pain");
    const gluEl = document.getElementById("ehr-vital-glu");

    if (hrEl) hrEl.textContent = vitals.heartRate ? `${vitals.heartRate} bpm` : '--';
    if (bpEl) bpEl.textContent = vitals.bloodPressureSys ? `${vitals.bloodPressureSys}/${vitals.bloodPressureDia} mmHg` : '--';
    if (rrEl) rrEl.textContent = vitals.respiratoryRate ? `${vitals.respiratoryRate} /min` : '--';
    if (spo2El) spo2El.textContent = vitals.oxygenSaturation ? `${vitals.oxygenSaturation}%` : '--';
    if (tempEl) tempEl.textContent = vitals.temperatureC ? `${vitals.temperatureC}°C (${vitals.temperatureF || (vitals.temperatureC * 9/5 + 32).toFixed(1)}°F)` : '--';
    if (bmiEl) bmiEl.textContent = vitals.bmi ? `${vitals.bmi} kg/m²` : '--';
    if (painEl) painEl.textContent = vitals.painScale !== undefined ? `${vitals.painScale} / 10` : '--';
    if (gluEl) gluEl.textContent = vitals.bloodGlucose ? `${vitals.bloodGlucose} mg/dL` : '--';
  },

  renderVitalChart(vitalHistory) {
    const canvas = document.getElementById("ehr-vital-chart-canvas");
    if (!canvas || typeof ChartEngine === 'undefined') return;

    if (!vitalHistory || vitalHistory.length === 0) return;

    const labels = vitalHistory.map(v => {
      const d = new Date(v.time);
      return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:00`;
    });

    const hrData = vitalHistory.map(v => v.hr || 0);
    const sysData = vitalHistory.map(v => v.sys || 0);
    const spo2Data = vitalHistory.map(v => v.spo2 || 0);

    ChartEngine.drawLineChart(canvas, {
      title: "Vital Signs Trend (Blood Pressure, Heart Rate & SpO2)",
      labels: labels,
      datasets: [
        { label: "Systolic BP", data: sysData, color: "#ef4444", fill: false, lineWidth: 2 },
        { label: "Heart Rate", data: hrData, color: "#38bdf8", fill: true, fillColor: "rgba(56, 189, 248, 0.15)", lineWidth: 2 },
        { label: "SpO2 %", data: spo2Data, color: "#10b981", fill: false, lineWidth: 1.5 }
      ],
      yAxisUnit: ""
    });
  },

  renderDiagnoses(diagnoses) {
    const container = document.getElementById("ehr-diagnoses-list");
    if (!container) return;

    if (diagnoses.length === 0) {
      container.innerHTML = `<div class="empty-state-text">No active clinical diagnoses recorded.</div>`;
      return;
    }

    container.innerHTML = diagnoses.map(d => `
      <div class="clinical-list-item">
        <div class="item-left">
          <span class="badge-code">${d.code}</span>
          <span class="item-title">${d.name}</span>
        </div>
        <div class="item-right">
          <span class="badge badge-outline-primary">${d.status}</span>
          <span class="item-meta">${d.date}</span>
        </div>
      </div>
    `).join('');
  },

  renderMedications(prescriptions) {
    const container = document.getElementById("ehr-medications-list");
    if (!container) return;

    if (prescriptions.length === 0) {
      container.innerHTML = `<div class="empty-state-text">No active medications on profile.</div>`;
      return;
    }

    container.innerHTML = prescriptions.map(rx => `
      <div class="clinical-list-item">
        <div class="item-left">
          <div class="item-title font-semibold text-sky-400">💊 ${rx.name} ${rx.dose}</div>
          <div class="item-meta">${rx.frequency} • Route: ${rx.route || 'Oral'}</div>
        </div>
        <div class="item-right">
          <button class="btn btn-sm btn-outline-secondary" onclick="EHRModule.printRx('${rx.id}')">Print Rx</button>
        </div>
      </div>
    `).join('');
  },

  renderSoapNotes(soapNotes) {
    const container = document.getElementById("ehr-soap-notes-container");
    if (!container) return;

    if (soapNotes.length === 0) {
      container.innerHTML = `<div class="empty-state-text">No clinical SOAP notes recorded yet.</div>`;
      return;
    }

    container.innerHTML = soapNotes.map(n => `
      <div class="soap-note-card">
        <div class="soap-header">
          <div>
            <strong>${n.author}</strong> <span class="soap-role">(${n.authorRole})</span>
          </div>
          <div class="soap-date">${new Date(n.date).toLocaleString()}</div>
        </div>
        <div class="soap-section">
          <div class="soap-label">S - Subjective:</div>
          <div class="soap-body">${n.subjective}</div>
        </div>
        <div class="soap-section">
          <div class="soap-label">O - Objective:</div>
          <div class="soap-body">${n.objective}</div>
        </div>
        <div class="soap-section">
          <div class="soap-label">A - Assessment:</div>
          <div class="soap-body">${n.assessment}</div>
        </div>
        <div class="soap-section">
          <div class="soap-label">P - Plan:</div>
          <div class="soap-body">${n.plan}</div>
        </div>
      </div>
    `).join('');
  },

  renderLabResultsPreview(labResults) {
    const container = document.getElementById("ehr-labs-preview-list");
    if (!container) return;

    if (labResults.length === 0) {
      container.innerHTML = `<div class="empty-state-text">No recent laboratory panels on file.</div>`;
      return;
    }

    container.innerHTML = labResults.map(lab => `
      <div class="lab-panel-card">
        <div class="lab-panel-header">
          <strong>${lab.panel}</strong>
          <span class="badge badge-outline-success">${lab.status}</span>
        </div>
        <table class="clinical-mini-table">
          <thead>
            <tr>
              <th>Test Assay</th>
              <th>Value</th>
              <th>Reference</th>
              <th>Flag</th>
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
  },

  checkClinicalDecisionSupport(patient) {
    const alertBox = document.getElementById("ehr-cdss-alerts");
    if (!alertBox) return;

    const warnings = [];

    // Check Penicillin / Beta-Lactam allergy cross-reaction
    const hasPenicillinAllergy = patient.allergies && patient.allergies.some(a => a.allergen.toLowerCase().includes("penicillin"));
    if (hasPenicillinAllergy && patient.prescriptions) {
      const hasBetaLactamRx = patient.prescriptions.some(rx => rx.name.toLowerCase().includes("amoxicillin") || rx.name.toLowerCase().includes("augmentin") || rx.name.toLowerCase().includes("ampicillin"));
      if (hasBetaLactamRx) {
        warnings.push({
          type: "danger",
          title: "CRITICAL CONTRAINDICATION: Beta-Lactam / Penicillin Anaphylaxis Hazard",
          message: "Patient has documented Penicillin hypersensitivity. Active prescription contains Amoxicillin/Clavulanate. High risk of severe anaphylaxis."
        });
      }
    }

    // Check Sepsis Early Warning Score (NEWS2)
    if (patient.vitals && typeof ClinicalCalculators !== 'undefined') {
      const news = ClinicalCalculators.calculateNEWS2({
        rr: patient.vitals.respiratoryRate || 18,
        spo2: patient.vitals.oxygenSaturation || 96,
        onOxygen: patient.vitals.oxygenSaturation < 94,
        sysBP: patient.vitals.bloodPressureSys || 120,
        hr: patient.vitals.heartRate || 80,
        avpu: patient.vitals.consciousness || 'Alert',
        temp: patient.vitals.temperatureC || 37.0
      });

      if (news.totalScore >= 7) {
        warnings.push({
          type: "danger",
          title: `NEWS2 SEPSIS ALERT (Score: ${news.totalScore} - High Risk)`,
          message: news.response
        });
      } else if (news.totalScore >= 5) {
        warnings.push({
          type: "warning",
          title: `NEWS2 Clinical Deterioration Alert (Score: ${news.totalScore})`,
          message: news.response
        });
      }
    }

    if (warnings.length === 0) {
      alertBox.innerHTML = `
        <div class="cdss-banner cdss-clear">
          <span>🛡️ Clinical Decision Support: No acute contraindications or severe drug-allergy interactions detected.</span>
        </div>
      `;
      return;
    }

    alertBox.innerHTML = warnings.map(w => `
      <div class="cdss-banner cdss-${w.type}">
        <div class="cdss-title">⚠️ ${w.title}</div>
        <div class="cdss-desc">${w.message}</div>
      </div>
    `).join('');
  },

  saveSoapNote() {
    const subjective = document.getElementById("ehr-soap-s").value.trim();
    const objective = document.getElementById("ehr-soap-o").value.trim();
    const assessment = document.getElementById("ehr-soap-a").value.trim();
    const plan = document.getElementById("ehr-soap-p").value.trim();

    if (!subjective || !assessment || !plan) {
      Notify.showToast({
        title: "Incomplete SOAP Note",
        message: "Please fill in Subjective, Assessment, and Plan fields.",
        type: "warning"
      });
      return;
    }

    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, this.activePatientId);
    if (!patient) return;

    if (!patient.soapNotes) patient.soapNotes = [];

    const newNote = {
      id: "SOAP-" + Date.now().toString(36).toUpperCase(),
      date: new Date().toISOString(),
      author: "Dr. Sarah Jenkins, MD",
      authorRole: "Senior Attending Physician",
      subjective,
      objective: objective || "Vitals reviewed. Physical exam stable.",
      assessment,
      plan
    };

    patient.soapNotes.unshift(newNote);
    Storage.update(STORAGE_KEYS.PATIENTS, patient.id, { soapNotes: patient.soapNotes });

    Storage.logAuditEvent(
      "Dr. Sarah Jenkins, MD",
      "SOAP_NOTE_CREATED",
      patient.id,
      `Saved SOAP note: ${assessment.slice(0, 60)}...`
    );

    Notify.showToast({
      title: "SOAP Note Saved",
      message: "Clinical encounter note recorded to patient chart.",
      type: "success"
    });

    // Clear form & re-render
    document.getElementById("ehr-soap-s").value = "";
    document.getElementById("ehr-soap-o").value = "";
    document.getElementById("ehr-soap-a").value = "";
    document.getElementById("ehr-soap-p").value = "";

    this.renderSoapNotes(patient.soapNotes);
  },

  openAddVitalsModal() {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, this.activePatientId);
    if (!patient) return;

    const modal = document.createElement("div");
    modal.className = "clinical-modal-backdrop";
    modal.innerHTML = `
      <div class="clinical-modal animate-pop">
        <div class="clinical-modal-header">
          <h3>Record New Vital Signs</h3>
          <button class="modal-close-btn">&times;</button>
        </div>
        <div class="clinical-modal-body">
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label class="form-label">Heart Rate (bpm)</label>
              <input type="number" id="vital-input-hr" class="form-input" value="${patient.vitals ? patient.vitals.heartRate : 75}" min="30" max="240">
            </div>
            <div class="form-group">
              <label class="form-label">Systolic BP (mmHg)</label>
              <input type="number" id="vital-input-sys" class="form-input" value="${patient.vitals ? patient.vitals.bloodPressureSys : 120}" min="60" max="260">
            </div>
            <div class="form-group">
              <label class="form-label">Diastolic BP (mmHg)</label>
              <input type="number" id="vital-input-dia" class="form-input" value="${patient.vitals ? patient.vitals.bloodPressureDia : 80}" min="40" max="160">
            </div>
            <div class="form-group">
              <label class="form-label">Respiratory Rate (/min)</label>
              <input type="number" id="vital-input-rr" class="form-input" value="${patient.vitals ? patient.vitals.respiratoryRate : 16}" min="6" max="60">
            </div>
            <div class="form-group">
              <label class="form-label">SpO2 Oxygen (%)</label>
              <input type="number" id="vital-input-spo2" class="form-input" value="${patient.vitals ? patient.vitals.oxygenSaturation : 98}" min="60" max="100">
            </div>
            <div class="form-group">
              <label class="form-label">Temperature (°C)</label>
              <input type="number" step="0.1" id="vital-input-temp" class="form-input" value="${patient.vitals ? patient.vitals.temperatureC : 37.0}" min="32" max="43">
            </div>
            <div class="form-group">
              <label class="form-label">Blood Glucose (mg/dL)</label>
              <input type="number" id="vital-input-glu" class="form-input" value="${patient.vitals ? patient.vitals.bloodGlucose : 100}" min="20" max="600">
            </div>
            <div class="form-group">
              <label class="form-label">Pain Scale (0-10)</label>
              <input type="number" id="vital-input-pain" class="form-input" value="${patient.vitals ? patient.vitals.painScale : 0}" min="0" max="10">
            </div>
          </div>
        </div>
        <div class="clinical-modal-footer">
          <button class="btn btn-secondary modal-cancel-btn">Cancel</button>
          <button class="btn btn-primary modal-save-btn">Save Vitals</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => document.body.removeChild(modal);
    modal.querySelector(".modal-close-btn").addEventListener("click", closeModal);
    modal.querySelector(".modal-cancel-btn").addEventListener("click", closeModal);

    modal.querySelector(".modal-save-btn").addEventListener("click", () => {
      const hr = parseInt(document.getElementById("vital-input-hr").value, 10);
      const sys = parseInt(document.getElementById("vital-input-sys").value, 10);
      const dia = parseInt(document.getElementById("vital-input-dia").value, 10);
      const rr = parseInt(document.getElementById("vital-input-rr").value, 10);
      const spo2 = parseInt(document.getElementById("vital-input-spo2").value, 10);
      const temp = parseFloat(document.getElementById("vital-input-temp").value);
      const glu = parseInt(document.getElementById("vital-input-glu").value, 10);
      const pain = parseInt(document.getElementById("vital-input-pain").value, 10);

      const updatedVitals = {
        ...patient.vitals,
        heartRate: hr,
        bloodPressureSys: sys,
        bloodPressureDia: dia,
        respiratoryRate: rr,
        oxygenSaturation: spo2,
        temperatureC: temp,
        temperatureF: parseFloat((temp * 9/5 + 32).toFixed(1)),
        bloodGlucose: glu,
        painScale: pain,
        recordedAt: new Date().toISOString()
      };

      const history = patient.vitalHistory || [];
      history.push({
        time: new Date().toISOString(),
        hr, sys, dia, rr, spo2, temp
      });
      if (history.length > 20) history.shift();

      Storage.update(STORAGE_KEYS.PATIENTS, patient.id, {
        vitals: updatedVitals,
        vitalHistory: history
      });

      closeModal();
      this.loadPatient(patient.id);

      Notify.showToast({
        title: "Vitals Recorded",
        message: `Updated vitals for ${patient.firstName} ${patient.lastName}`,
        type: "success"
      });
    });
  },

  openAddAllergyModal() {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, this.activePatientId);
    if (!patient) return;

    const modal = document.createElement("div");
    modal.className = "clinical-modal-backdrop";
    modal.innerHTML = `
      <div class="clinical-modal animate-pop">
        <div class="clinical-modal-header">
          <h3>Record Patient Allergy</h3>
          <button class="modal-close-btn">&times;</button>
        </div>
        <div class="clinical-modal-body">
          <div class="form-group">
            <label class="form-label">Allergen (Drug, Food, or Substance)</label>
            <input type="text" id="allergy-input-substance" class="form-input" placeholder="e.g., Penicillin, Cephalosporins, Peanuts" required>
          </div>
          <div class="form-group">
            <label class="form-label">Clinical Reaction</label>
            <input type="text" id="allergy-input-reaction" class="form-input" placeholder="e.g., Anaphylaxis, Urticaria, Bronchospasm">
          </div>
          <div class="form-group">
            <label class="form-label">Severity Level</label>
            <select id="allergy-input-severity" class="form-select">
              <option value="Mild">Mild (Localized rash/itching)</option>
              <option value="Moderate">Moderate (Widespread hives, GI distress)</option>
              <option value="Severe">Severe (Angioedema, airway involvement)</option>
              <option value="Critical">Critical (Life-threatening Anaphylactic Shock)</option>
            </select>
          </div>
        </div>
        <div class="clinical-modal-footer">
          <button class="btn btn-secondary modal-cancel-btn">Cancel</button>
          <button class="btn btn-danger modal-save-btn">Add Allergy Badge</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => document.body.removeChild(modal);
    modal.querySelector(".modal-close-btn").addEventListener("click", closeModal);
    modal.querySelector(".modal-cancel-btn").addEventListener("click", closeModal);

    modal.querySelector(".modal-save-btn").addEventListener("click", () => {
      const substance = document.getElementById("allergy-input-substance").value.trim();
      const reaction = document.getElementById("allergy-input-reaction").value.trim();
      const severity = document.getElementById("allergy-input-severity").value;

      if (!substance) {
        alert("Please enter the allergen name.");
        return;
      }

      const allergies = patient.allergies || [];
      allergies.push({ allergen: substance, reaction: reaction || "Hypersensitivity reaction", severity });

      Storage.update(STORAGE_KEYS.PATIENTS, patient.id, { allergies });
      Storage.logAuditEvent("Clinical User", "ALLERGY_ADDED", patient.id, `Added allergy: ${substance} (${severity})`);

      closeModal();
      this.loadPatient(patient.id);

      Notify.showToast({
        title: "Allergy Added",
        message: `Logged ${substance} allergy badge.`,
        type: "warning"
      });
    });
  },

  searchICD10(query) {
    const resultsContainer = document.getElementById("ehr-icd-results");
    if (!resultsContainer || typeof MOCK_ICD10_CODES === 'undefined') return;

    const trimmed = query.trim().toLowerCase();
    if (!trimmed || trimmed.length < 2) {
      resultsContainer.style.display = "none";
      return;
    }

    const matches = MOCK_ICD10_CODES.filter(item =>
      item.code.toLowerCase().includes(trimmed) || item.description.toLowerCase().includes(trimmed)
    ).slice(0, 6);

    if (matches.length === 0) {
      resultsContainer.style.display = "none";
      return;
    }

    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = matches.map(m => `
      <div class="icd-match-item" onclick="EHRModule.appendDiagnosis('${m.code}', '${m.description}')">
        <span class="badge-code">${m.code}</span>
        <span class="match-desc">${m.description}</span>
      </div>
    `).join('');
  },

  appendDiagnosis(code, description) {
    const assessmentEl = document.getElementById("ehr-soap-a");
    if (assessmentEl) {
      const current = assessmentEl.value;
      assessmentEl.value = current ? `${current}\n- ${code}: ${description}` : `- ${code}: ${description}`;
    }
    const resultsContainer = document.getElementById("ehr-icd-results");
    if (resultsContainer) resultsContainer.style.display = "none";
  },

  printRx(rxId) {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, this.activePatientId);
    if (!patient || !patient.prescriptions) return;

    const rx = patient.prescriptions.find(p => p.id === rxId);
    if (rx && typeof Export !== 'undefined') {
      const doctor = Storage.getById(STORAGE_KEYS.DOCTORS, patient.primaryPhysician);
      Export.printPrescription(patient, rx, doctor);
    }
  },

  exportPatientSummary() {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, this.activePatientId);
    if (!patient) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Clinical Summary - ${patient.firstName} ${patient.lastName}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 40px; color: #1e293b; line-height: 1.5; }
          .header { border-bottom: 2px solid #0369a1; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; }
          .title { font-size: 24px; font-weight: bold; color: #0369a1; }
          .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin-bottom: 16px; }
          h3 { color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px; font-size: 16px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }
          th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; }
          th { background: #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">OMNIHEALTH COMPREHENSIVE CLINICAL SUMMARY</div>
            <div style="font-size: 12px; color: #64748b;">Medical Record Extract • Confidential Health Document</div>
          </div>
          <div style="text-align: right; font-size: 12px;">
            <div><strong>Generated:</strong> ${new Date().toLocaleString()}</div>
            <div><strong>MRN:</strong> ${patient.mrn}</div>
          </div>
        </div>

        <div class="box">
          <strong>Patient:</strong> ${patient.firstName} ${patient.lastName} | <strong>DOB:</strong> ${patient.dob} (${patient.age}y ${patient.gender}) | <strong>Blood:</strong> ${patient.bloodGroup}<br>
          <strong>Allergies:</strong> ${patient.allergies ? patient.allergies.map(a => `${a.allergen} (${a.severity})`).join(', ') : 'NKDA'}<br>
          <strong>Department:</strong> ${patient.department || 'Outpatient'} • ${patient.ward || 'N/A'} (Bed: ${patient.bedNumber || 'N/A'})
        </div>

        <h3>Active Problem List / Diagnoses</h3>
        <ul>
          ${patient.diagnoses ? patient.diagnoses.map(d => `<li><strong>${d.code}</strong> - ${d.name} (${d.status})</li>`).join('') : 'None'}
        </ul>

        <h3>Active Medication Regimen</h3>
        <table>
          <thead>
            <tr><th>Medication</th><th>Dose</th><th>Route</th><th>Frequency</th></tr>
          </thead>
          <tbody>
            ${patient.prescriptions ? patient.prescriptions.map(p => `<tr><td>${p.name}</td><td>${p.dose}</td><td>${p.route || 'Oral'}</td><td>${p.frequency}</td></tr>`).join('') : ''}
          </tbody>
        </table>

        <h3>Latest Recorded Vital Signs</h3>
        <div class="box">
          HR: ${patient.vitals ? patient.vitals.heartRate : '--'} bpm |
          BP: ${patient.vitals ? `${patient.vitals.bloodPressureSys}/${patient.vitals.bloodPressureDia}` : '--'} mmHg |
          RR: ${patient.vitals ? patient.vitals.respiratoryRate : '--'}/min |
          SpO2: ${patient.vitals ? patient.vitals.oxygenSaturation : '--'}% |
          Temp: ${patient.vitals ? patient.vitals.temperatureC : '--'}°C
        </div>

        <script>window.onload = function() { window.print(); }</script>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EHRModule };
}
