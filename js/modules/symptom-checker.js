/**
 * OmniHealth OS - AI-Assisted Clinical Symptom Checker & Triage Engine
 * Multi-step diagnostic decision tree with red-flag detection, urgency grading,
 * differential diagnosis suggestions, and direct specialist booking referral.
 */

const SymptomCheckerModule = {
  currentStep: 1,
  answers: {
    chiefComplaint: "",
    duration: "",
    severity: 5,
    hasRedFlags: false,
    redFlagsList: [],
    associatedSymptoms: [],
    ageGroup: "adult"
  },

  init() {
    this.bindEvents();
    this.renderStep();
  },

  bindEvents() {
    const nextBtn = document.getElementById("sym-next-btn");
    const prevBtn = document.getElementById("sym-prev-btn");
    const resetBtn = document.getElementById("sym-reset-btn");

    if (nextBtn) nextBtn.addEventListener("click", () => this.nextStep());
    if (prevBtn) prevBtn.addEventListener("click", () => this.prevStep());
    if (resetBtn) resetBtn.addEventListener("click", () => this.resetWizard());
  },

  nextStep() {
    if (this.currentStep === 1) {
      const selected = document.querySelector('input[name="chiefComplaint"]:checked');
      if (!selected) {
        Notify.showToast({ title: "Selection Required", message: "Please choose your primary symptom.", type: "warning" });
        return;
      }
      this.answers.chiefComplaint = selected.value;
    } else if (this.currentStep === 2) {
      const durEl = document.getElementById("sym-duration-select");
      const sevEl = document.getElementById("sym-severity-slider");
      if (durEl) this.answers.duration = durEl.value;
      if (sevEl) this.answers.severity = parseInt(sevEl.value, 10);
    } else if (this.currentStep === 3) {
      const checkedFlags = Array.from(document.querySelectorAll('.redflag-checkbox:checked')).map(cb => cb.value);
      this.answers.hasRedFlags = checkedFlags.length > 0;
      this.answers.redFlagsList = checkedFlags;
    }

    if (this.currentStep < 4) {
      this.currentStep++;
      this.renderStep();
    }
  },

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.renderStep();
    }
  },

  resetWizard() {
    this.currentStep = 1;
    this.answers = {
      chiefComplaint: "",
      duration: "",
      severity: 5,
      hasRedFlags: false,
      redFlagsList: [],
      associatedSymptoms: [],
      ageGroup: "adult"
    };
    this.renderStep();
  },

  renderStep() {
    const step1 = document.getElementById("sym-step-1");
    const step2 = document.getElementById("sym-step-2");
    const step3 = document.getElementById("sym-step-3");
    const step4 = document.getElementById("sym-step-4");
    const prevBtn = document.getElementById("sym-prev-btn");
    const nextBtn = document.getElementById("sym-next-btn");
    const stepIndicator = document.getElementById("sym-step-indicator");

    [step1, step2, step3, step4].forEach((s, idx) => {
      if (s) s.style.display = (idx + 1 === this.currentStep) ? "block" : "none";
    });

    if (stepIndicator) stepIndicator.textContent = `Step ${this.currentStep} of 4`;
    if (prevBtn) prevBtn.style.display = this.currentStep === 1 ? "none" : "inline-flex";
    if (nextBtn) nextBtn.style.display = this.currentStep === 4 ? "none" : "inline-flex";

    if (this.currentStep === 4) {
      this.renderDiagnosticResults();
    }
  },

  renderDiagnosticResults() {
    const resultsContainer = document.getElementById("sym-results-container");
    if (!resultsContainer) return;

    let urgencyLevel = "Routine / Self-Care";
    let urgencyClass = "badge-success";
    let diffDiagnoses = [];
    let recommendedAction = "";
    let specialist = "Primary Care Physician";

    const complaint = this.answers.chiefComplaint;
    const isSevere = this.answers.severity >= 7;
    const hasFlags = this.answers.hasRedFlags;

    if (complaint === "chest_pain") {
      if (hasFlags || isSevere) {
        urgencyLevel = "EMERGENCY: CALL 911 / IMMEDIATE ED VISIT";
        urgencyClass = "badge-danger";
        diffDiagnoses = ["Acute Coronary Syndrome (Myocardial Infarction)", "Aortic Dissection", "Pulmonary Embolism", "Unstable Angina"];
        recommendedAction = "Present immediately to the nearest Emergency Department. Do not drive yourself.";
        specialist = "Emergency Medicine / Interventional Cardiology";
      } else {
        urgencyLevel = "Urgent Outpatient Evaluation";
        urgencyClass = "badge-warning";
        diffDiagnoses = ["Gastroesophageal Reflux (GERD)", "Costochondritis (Chest Wall Pain)", "Stable Angina", "Anxiety / Panic"];
        recommendedAction = "Schedule consultation within 24-48 hours. Seek ED if symptoms worsen or radiate to arm/jaw.";
        specialist = "Cardiology";
      }
    } else if (complaint === "headache") {
      if (hasFlags) {
        urgencyLevel = "EMERGENT: Immediate Neurological Evaluation";
        urgencyClass = "badge-danger";
        diffDiagnoses = ["Subarachnoid Hemorrhage ('Thunderclap')", "Meningitis / Encephalitis", "Intracranial Mass / Elevated ICP", "Temporal Arteritis"];
        recommendedAction = "Immediate ED evaluation for non-contrast Head CT and lumbar puncture consideration.";
        specialist = "Neurology / Emergency Medicine";
      } else {
        urgencyLevel = "Moderate / Outpatient Follow-up";
        urgencyClass = "badge-info";
        diffDiagnoses = ["Migraine with / without Aura", "Tension-Type Headache", "Cervicogenic Headache", "Sinusitis"];
        recommendedAction = "Rest in a quiet, dark room, ensure hydration. Review medication with neurologist.";
        specialist = "Neurology";
      }
    } else if (complaint === "shortness_of_breath") {
      if (hasFlags || isSevere) {
        urgencyLevel = "EMERGENCY: Immediate Medical Attention";
        urgencyClass = "badge-danger";
        diffDiagnoses = ["Acute Asthma / COPD Exacerbation", "Pneumonia", "Acute Pulmonary Edema / CHF", "Pneumothorax"];
        recommendedAction = "Administer rescue inhaler if prescribed; seek immediate emergency care.";
        specialist = "Pulmonology / Critical Care";
      } else {
        urgencyLevel = "Urgent Care / Next Day Evaluation";
        urgencyClass = "badge-warning";
        diffDiagnoses = ["Bronchitis", "Mild Asthma Exacerbation", "Allergic Rhinitis / Post-Nasal Drip", "Deconditioning"];
        recommendedAction = "Schedule appointment with pulmonologist or primary care physician.";
        specialist = "Pulmonology";
      }
    } else {
      urgencyLevel = "Routine Outpatient Evaluation";
      urgencyClass = "badge-success";
      diffDiagnoses = ["Musculoskeletal Strain", "Viral Syndrome", "Localized Inflammation"];
      recommendedAction = "Monitor symptoms, maintain oral hydration, and follow up if no improvement in 3 days.";
      specialist = "Family Medicine";
    }

    resultsContainer.innerHTML = `
      <div class="sym-result-card animate-slide-in">
        <div class="sym-triage-header">
          <span class="badge ${urgencyClass} text-sm font-bold">${urgencyLevel}</span>
        </div>
        
        <h4 class="mt-4 text-base font-bold text-sky-300">Differential Diagnoses Considered:</h4>
        <ul class="sym-diff-list">
          ${diffDiagnoses.map(d => `<li>• <strong>${d}</strong></li>`).join('')}
        </ul>

        <div class="sym-action-box mt-4">
          <strong>Recommended Clinical Action:</strong>
          <p class="text-sm mt-1">${recommendedAction}</p>
        </div>

        <div class="sym-specialist-box mt-4">
          <span>Referred Specialty: <strong>${specialist}</strong></span>
          <button class="btn btn-sm btn-primary ml-auto" onclick="SymptomCheckerModule.bookSpecialist('${specialist}')">
            Book Appointment
          </button>
        </div>
      </div>
    `;

    Storage.logAuditEvent("Patient Portal User", "SYMPTOM_CHECKER_COMPLETED", complaint, `Triage Level: ${urgencyLevel}`);
  },

  bookSpecialist(specialist) {
    if (typeof App !== 'undefined') {
      App.switchModule('appointments');
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SymptomCheckerModule };
}
