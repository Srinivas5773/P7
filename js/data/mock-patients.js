/**
 * OmniHealth OS - Mock Patients Clinical Database
 * Comprehensive clinical records with full demographics, vitals, allergies,
 * problem lists, immunization history, lab histories, and encounter logs.
 */

const MOCK_PATIENTS = [
  {
    id: "PAT-1001",
    mrn: "MRN-884920",
    firstName: "Eleanor",
    lastName: "Vance",
    dob: "1964-05-14",
    age: 62,
    gender: "Female",
    bloodGroup: "O+",
    phone: "+1 (555) 234-5678",
    email: "eleanor.vance@example.com",
    address: "428 Elmhurst Avenue, Boston, MA 02134",
    emergencyContact: {
      name: "Arthur Vance",
      relation: "Spouse",
      phone: "+1 (555) 234-5679"
    },
    insurance: {
      provider: "Blue Cross Blue Shield",
      policyNumber: "BCBS-9948271A",
      groupNumber: "GRP-4029",
      copay: 25.00,
      deductible: 1500.00,
      deductibleMet: 1200.00,
      outOfPocketMax: 5000.00,
      outOfPocketSpent: 1850.00
    },
    primaryPhysician: "DOC-101", // Dr. Sarah Jenkins (Cardiology)
    department: "Cardiology",
    ward: "West Wing - 3B",
    bedNumber: "Bed-304",
    admissionDate: "2026-08-26T14:30:00Z",
    status: "Admitted",
    triageLevel: 2, // ESI 2: Emergent
    codeStatus: "Full Code",
    allergies: [
      { allergen: "Penicillin", reaction: "Anaphylaxis / Urticaria", severity: "Severe" },
      { allergen: "Sulfa Drugs", reaction: "Maculopapular Rash", severity: "Moderate" },
      { allergen: "Shellfish", reaction: "Angioedema", severity: "Severe" }
    ],
    vitals: {
      heartRate: 88,
      bloodPressureSys: 142,
      bloodPressureDia: 92,
      respiratoryRate: 18,
      temperatureC: 37.1,
      temperatureF: 98.8,
      oxygenSaturation: 96,
      bmi: 28.4,
      heightCm: 165,
      weightKg: 77.3,
      painScale: 3,
      bloodGlucose: 126,
      consciousness: "Alert (AVPU-A)",
      recordedAt: "2026-08-29T08:15:00Z"
    },
    vitalHistory: [
      { time: "2026-08-28T08:00:00Z", hr: 84, sys: 138, dia: 88, rr: 16, spo2: 97, temp: 36.9 },
      { time: "2026-08-28T14:00:00Z", hr: 90, sys: 145, dia: 94, rr: 19, spo2: 95, temp: 37.2 },
      { time: "2026-08-28T20:00:00Z", hr: 86, sys: 140, dia: 90, rr: 17, spo2: 96, temp: 37.0 },
      { time: "2026-08-29T08:00:00Z", hr: 88, sys: 142, dia: 92, rr: 18, spo2: 96, temp: 37.1 }
    ],
    diagnoses: [
      { code: "I25.10", name: "Atherosclerotic heart disease of native coronary artery", status: "Active", date: "2024-03-12" },
      { code: "I10", name: "Essential (primary) hypertension", status: "Active", date: "2018-09-04" },
      { code: "E11.9", name: "Type 2 diabetes mellitus without complications", status: "Active", date: "2019-11-20" },
      { code: "E78.5", name: "Hyperlipidemia, unspecified", status: "Active", date: "2018-09-04" }
    ],
    prescriptions: [
      { id: "RX-501", drugId: "DRUG-001", name: "Atorvastatin Calcium", dose: "40mg", route: "Oral", frequency: "Once daily at bedtime", startDate: "2024-03-15", status: "Active", refills: 3 },
      { id: "RX-502", drugId: "DRUG-003", name: "Lisinopril", dose: "20mg", route: "Oral", frequency: "Once daily in morning", startDate: "2022-01-10", status: "Active", refills: 5 },
      { id: "RX-503", drugId: "DRUG-005", name: "Metformin HCl", dose: "1000mg", route: "Oral", frequency: "Twice daily with meals", startDate: "2019-11-25", status: "Active", refills: 2 },
      { id: "RX-504", drugId: "DRUG-012", name: "Aspirin (Enteric Coated)", dose: "81mg", route: "Oral", frequency: "Once daily with food", startDate: "2024-03-15", status: "Active", refills: 11 }
    ],
    soapNotes: [
      {
        id: "SOAP-901",
        date: "2026-08-27T10:30:00Z",
        author: "Dr. Sarah Jenkins, MD",
        authorRole: "Attending Cardiologist",
        subjective: "Patient reports mild substernal chest tightness upon exertion, radiating slightly to the left shoulder. Symptoms resolve within 5 minutes of rest. No syncope, diaphoresis, or palpitations. Compliant with current antihypertensive regimen.",
        objective: "Vitals: BP 142/92 mmHg, HR 88 bpm regular, RR 18, SpO2 96% on room air. Cardiac exam reveals regular S1/S2, no murmurs, gallops, or friction rubs. Lungs clear to auscultation bilaterally. 1+ bilateral lower extremity edema.",
        assessment: "1. Stable angina pectoris secondary to coronary artery disease.\n2. Stage 2 hypertension, sub-optimally controlled.\n3. Type 2 diabetes mellitus, stable.",
        plan: "1. Schedule outpatient stress echocardiogram for tomorrow morning.\n2. Titrate Lisinopril to 30mg daily.\n3. Continue Atorvastatin 40mg and Metformin 1000mg BID.\n4. Order fasting lipid panel, HbA1c, and serum creatinine.\n5. Instruct patient to present immediately to ED for chest pain lasting >10 minutes or unrelieved by rest."
      }
    ],
    labResults: [
      {
        id: "LAB-801",
        date: "2026-08-27T08:00:00Z",
        panel: "Comprehensive Metabolic Panel (CMP)",
        status: "Completed",
        items: [
          { test: "Sodium", value: 139, unit: "mmol/L", refRange: "135 - 145", flag: "NORMAL" },
          { test: "Potassium", value: 4.4, unit: "mmol/L", refRange: "3.5 - 5.0", flag: "NORMAL" },
          { test: "Chloride", value: 102, unit: "mmol/L", refRange: "96 - 106", flag: "NORMAL" },
          { test: "CO2 (Bicarbonate)", value: 24, unit: "mmol/L", refRange: "22 - 29", flag: "NORMAL" },
          { test: "BUN", value: 22, unit: "mg/dL", refRange: "7 - 20", flag: "HIGH" },
          { test: "Creatinine", value: 1.15, unit: "mg/dL", refRange: "0.59 - 1.04", flag: "HIGH" },
          { test: "eGFR", value: 58, unit: "mL/min/1.73m²", refRange: "> 60", flag: "LOW" },
          { test: "Fasting Glucose", value: 128, unit: "mg/dL", refRange: "70 - 99", flag: "HIGH" }
        ]
      },
      {
        id: "LAB-802",
        date: "2026-08-27T08:00:00Z",
        panel: "Lipid Panel",
        status: "Completed",
        items: [
          { test: "Total Cholesterol", value: 218, unit: "mg/dL", refRange: "< 200", flag: "HIGH" },
          { test: "Triglycerides", value: 185, unit: "mg/dL", refRange: "< 150", flag: "HIGH" },
          { test: "HDL Cholesterol", value: 46, unit: "mg/dL", refRange: "> 50", flag: "LOW" },
          { test: "LDL Cholesterol", value: 135, unit: "mg/dL", refRange: "< 100", flag: "HIGH" }
        ]
      }
    ],
    imagingOrders: [
      { id: "IMG-701", modality: "Chest X-Ray (PA & Lateral)", date: "2026-08-26", status: "Completed", scanType: "chest_xray", findings: "Mild cardiomegaly noted. No pulmonary consolidation, pleural effusion, or pneumothorax." },
      { id: "IMG-702", modality: "Transthoracic Echocardiogram", date: "2026-08-28", status: "Completed", scanType: "echo", findings: "LVEF 55-60%. Mild concentric left ventricular hypertrophy. Grade 1 diastolic dysfunction." }
    ]
  },
  {
    id: "PAT-1002",
    mrn: "MRN-339201",
    firstName: "Marcus",
    lastName: "Sterling",
    dob: "1982-11-03",
    age: 43,
    gender: "Male",
    bloodGroup: "A+",
    phone: "+1 (555) 782-9012",
    email: "m.sterling@example.org",
    address: "712 Beacon Street, Cambridge, MA 02138",
    emergencyContact: {
      name: "Clara Sterling",
      relation: "Sister",
      phone: "+1 (555) 782-9014"
    },
    insurance: {
      provider: "Aetna Healthcare",
      policyNumber: "AET-5510294C",
      groupNumber: "GRP-8109",
      copay: 30.00,
      deductible: 2000.00,
      deductibleMet: 2000.00,
      outOfPocketMax: 6000.00,
      outOfPocketSpent: 3400.00
    },
    primaryPhysician: "DOC-102", // Dr. Robert Chen (Neurology)
    department: "Neurology",
    ward: "North Wing - 4A",
    bedNumber: "Bed-412",
    admissionDate: "2026-08-28T09:15:00Z",
    status: "Admitted",
    triageLevel: 3, // ESI 3: Urgent
    codeStatus: "Full Code",
    allergies: [
      { allergen: "Codeine", reaction: "Severe Nausea & Bronchospasm", severity: "Severe" },
      { allergen: "NSAIDs (Ibuprofen)", reaction: "GI Bleeding / Gastritis", severity: "Moderate" }
    ],
    vitals: {
      heartRate: 74,
      bloodPressureSys: 124,
      bloodPressureDia: 78,
      respiratoryRate: 14,
      temperatureC: 36.8,
      temperatureF: 98.2,
      oxygenSaturation: 99,
      bmi: 23.6,
      heightCm: 180,
      weightKg: 76.5,
      painScale: 6,
      bloodGlucose: 94,
      consciousness: "Alert (AVPU-A)",
      recordedAt: "2026-08-29T07:45:00Z"
    },
    vitalHistory: [
      { time: "2026-08-28T10:00:00Z", hr: 78, sys: 128, dia: 82, rr: 16, spo2: 98, temp: 36.7 },
      { time: "2026-08-28T18:00:00Z", hr: 72, sys: 122, dia: 76, rr: 14, spo2: 99, temp: 36.9 },
      { time: "2026-08-29T06:00:00Z", hr: 74, sys: 124, dia: 78, rr: 14, spo2: 99, temp: 36.8 }
    ],
    diagnoses: [
      { code: "G43.909", name: "Migraine, unspecified, not intractable, without status migrainosus", status: "Active", date: "2025-06-18" },
      { code: "M54.5", name: "Low back pain / Lumbar radiculopathy", status: "Active", date: "2023-08-11" }
    ],
    prescriptions: [
      { id: "RX-505", drugId: "DRUG-018", name: "Sumatriptan Succinate", dose: "50mg", route: "Oral", frequency: "At onset of migraine, may repeat in 2h (max 200mg/24h)", startDate: "2025-06-20", status: "Active", refills: 4 },
      { id: "RX-506", drugId: "DRUG-022", name: "Gabapentin", dose: "300mg", route: "Oral", frequency: "Three times daily", startDate: "2023-08-15", status: "Active", refills: 2 }
    ],
    soapNotes: [
      {
        id: "SOAP-902",
        date: "2026-08-28T11:00:00Z",
        author: "Dr. Robert Chen, MD, PhD",
        authorRole: "Attending Neurologist",
        subjective: "Patient presents with persistent throbbing left temporal headache with photophobia and nausea for 36 hours. Partially refractory to triptans. Reports visual aura (scintillating scotoma) prior to onset.",
        objective: "Cranial nerves II-XII grossly intact. No focal neurological deficits. Negative meningeal signs. Fundoscopic exam negative for papilledema. Gait and Romberg test normal.",
        assessment: "Refractory migraine with visual aura. Low concern for secondary intracranial pathology, but ordered non-contrast Head CT to definitively rule out intracranial hemorrhage.",
        plan: "1. Administer IV migraine cocktail (IV fluids 1L NS, IV Metoclopramide 10mg, IV Diphenhydramine 25mg, IV Ketorolac 30mg - hold NSAIDs due to allergy note, substitute IV Acetaminophen 1000mg).\n2. Brain CT scan to verify structural integrity.\n3. Monitor in quiet, darkened room."
      }
    ],
    labResults: [
      {
        id: "LAB-803",
        date: "2026-08-28T09:45:00Z",
        panel: "Complete Blood Count (CBC)",
        status: "Completed",
        items: [
          { test: "WBC", value: 6.8, unit: "10^3/uL", refRange: "4.5 - 11.0", flag: "NORMAL" },
          { test: "RBC", value: 4.95, unit: "10^6/uL", refRange: "4.3 - 5.9", flag: "NORMAL" },
          { test: "Hemoglobin", value: 15.2, unit: "g/dL", refRange: "13.5 - 17.5", flag: "NORMAL" },
          { test: "Hematocrit", value: 45.1, unit: "%", refRange: "41.0 - 50.0", flag: "NORMAL" },
          { test: "Platelets", value: 245, unit: "10^3/uL", refRange: "150 - 450", flag: "NORMAL" }
        ]
      }
    ],
    imagingOrders: [
      { id: "IMG-703", modality: "Non-Contrast Head CT", date: "2026-08-28", status: "Completed", scanType: "brain_ct", findings: "No acute intracranial hemorrhage, mass effect, or midline shift. Ventricles and sulci age-appropriate." }
    ]
  },
  {
    id: "PAT-1003",
    mrn: "MRN-190483",
    firstName: "Sofia",
    lastName: "Rodriguez",
    dob: "2018-09-22",
    age: 7,
    gender: "Female",
    bloodGroup: "B+",
    phone: "+1 (555) 902-3341",
    email: "maria.rodriguez.parent@example.com",
    address: "15 Somerville Way, Somerville, MA 02143",
    emergencyContact: {
      name: "Maria Rodriguez",
      relation: "Mother",
      phone: "+1 (555) 902-3341"
    },
    insurance: {
      provider: "MassHealth Standard (Medicaid)",
      policyNumber: "MH-100984210",
      groupNumber: "GRP-MASS",
      copay: 0.00,
      deductible: 0.00,
      deductibleMet: 0.00,
      outOfPocketMax: 0.00,
      outOfPocketSpent: 0.00
    },
    primaryPhysician: "DOC-103", // Dr. Elena Rostova (Pediatrics)
    department: "Pediatrics",
    ward: "Pediatric Pavilion - 2A",
    bedNumber: "Bed-208",
    admissionDate: "2026-08-28T16:00:00Z",
    status: "Admitted",
    triageLevel: 2, // ESI 2: High Risk
    codeStatus: "Full Code",
    allergies: [
      { allergen: "Peanuts", reaction: "Anaphylaxis / Airway compromise", severity: "Critical" },
      { allergen: "Latex", reaction: "Contact Dermatitis", severity: "Mild" }
    ],
    vitals: {
      heartRate: 118,
      bloodPressureSys: 98,
      bloodPressureDia: 62,
      respiratoryRate: 28,
      temperatureC: 38.9,
      temperatureF: 102.0,
      oxygenSaturation: 93,
      bmi: 15.8,
      heightCm: 122,
      weightKg: 23.5,
      painScale: 4,
      bloodGlucose: 105,
      consciousness: "Alert (AVPU-A)",
      recordedAt: "2026-08-29T08:30:00Z"
    },
    vitalHistory: [
      { time: "2026-08-28T16:30:00Z", hr: 130, sys: 95, dia: 60, rr: 32, spo2: 91, temp: 39.2 },
      { time: "2026-08-28T22:00:00Z", hr: 124, sys: 96, dia: 62, rr: 30, spo2: 92, temp: 38.6 },
      { time: "2026-08-29T04:00:00Z", hr: 120, sys: 98, dia: 60, rr: 28, spo2: 93, temp: 38.4 },
      { time: "2026-08-29T08:30:00Z", hr: 118, sys: 98, dia: 62, rr: 28, spo2: 93, temp: 38.9 }
    ],
    diagnoses: [
      { code: "J18.9", name: "Pneumonia, unspecified organism", status: "Active", date: "2026-08-28" },
      { code: "J45.909", name: "Unspecified asthma, uncomplicated", status: "Active", date: "2022-04-10" }
    ],
    prescriptions: [
      { id: "RX-507", drugId: "DRUG-009", name: "Amoxicillin / Clavulanate (Augmentin)", dose: "45mg/kg/day divided BID (528mg)", route: "Oral Suspension", frequency: "Every 12 hours with meals", startDate: "2026-08-28", status: "Active", refills: 0 },
      { id: "RX-508", drugId: "DRUG-015", name: "Albuterol Inhalation Aerosol", dose: "90mcg/actuation, 2 puffs", route: "Inhalation via spacer", frequency: "Every 4 hours PRN wheezing", startDate: "2026-08-28", status: "Active", refills: 2 },
      { id: "RX-509", drugId: "DRUG-020", name: "Acetaminophen Pediatric Liquid", dose: "15mg/kg (350mg)", route: "Oral", frequency: "Every 6 hours PRN fever > 38.5C", startDate: "2026-08-28", status: "Active", refills: 1 }
    ],
    soapNotes: [
      {
        id: "SOAP-903",
        date: "2026-08-28T17:00:00Z",
        author: "Dr. Elena Rostova, MD",
        authorRole: "Attending Pediatrician",
        subjective: "7-year-old female brought in by mother with 3-day history of high-grade fever, productive cough with yellowish sputum, and progressive tachypnea. Poor appetite. No vomiting or diarrhea.",
        objective: "Ill-appearing child in mild respiratory distress. Intercostal retractions observed. Auscultation reveals decreased breath sounds and coarse crackles over right middle and lower lung fields. Wheezing present bilaterally. O2 sat 91% on room air, improved to 96% on 1.5L nasal cannula.",
        assessment: "Community-acquired pneumonia, right middle/lower lobe, complicated by acute pediatric asthma exacerbation.",
        plan: "1. Supplemental O2 via nasal cannula to maintain SpO2 >= 95%.\n2. Albuterol nebulizer 2.5mg q4h with ipratropium.\n3. IV Ceftriaxone 50mg/kg daily transitioned to oral Augmentin.\n4. Strict I&O, maintenance IV fluids D5 0.45% NS."
      }
    ],
    labResults: [
      {
        id: "LAB-804",
        date: "2026-08-28T16:45:00Z",
        panel: "Pediatric Sepsis / Infection Workup",
        status: "Completed",
        items: [
          { test: "WBC", value: 16.4, unit: "10^3/uL", refRange: "5.0 - 14.5", flag: "HIGH" },
          { test: "Neutrophils %", value: 82, unit: "%", refRange: "40 - 65", flag: "HIGH" },
          { test: "C-Reactive Protein (CRP)", value: 48.2, unit: "mg/L", refRange: "< 5.0", flag: "HIGH" },
          { test: "Procalcitonin", value: 1.25, unit: "ng/mL", refRange: "< 0.10", flag: "HIGH" },
          { test: "Blood Culture", value: "Pending (No growth at 24h)", unit: "", refRange: "Negative", flag: "NORMAL" }
        ]
      }
    ],
    imagingOrders: [
      { id: "IMG-704", modality: "Pediatric Chest X-Ray (AP)", date: "2026-08-28", status: "Completed", scanType: "pediatric_chest_xray", findings: "Consolidation present in the right middle and lower lobes consistent with lobar pneumonia. No pleural effusion." }
    ]
  },
  {
    id: "PAT-1004",
    mrn: "MRN-771924",
    firstName: "James",
    lastName: "O'Connor",
    dob: "1951-02-18",
    age: 75,
    gender: "Male",
    bloodGroup: "AB+",
    phone: "+1 (555) 431-8890",
    email: "james.oconnor@example.net",
    address: "89 Dorchester Ave, Boston, MA 02127",
    emergencyContact: {
      name: "Patricia O'Connor",
      relation: "Daughter",
      phone: "+1 (555) 431-8892"
    },
    insurance: {
      provider: "Medicare Part A & B + Humana Advantage",
      policyNumber: "MED-90184712B",
      groupNumber: "HUM-9921",
      copay: 15.00,
      deductible: 240.00,
      deductibleMet: 240.00,
      outOfPocketMax: 3400.00,
      outOfPocketSpent: 1950.00
    },
    primaryPhysician: "DOC-104", // Dr. Marcus Vance (Intensive Care / Pulmonology)
    department: "Intensive Care Unit",
    ward: "ICU Pod Alpha",
    bedNumber: "Bed-ICU-02",
    admissionDate: "2026-08-27T03:40:00Z",
    status: "Critical",
    triageLevel: 1, // ESI 1: Immediate Resuscitation / ICU
    codeStatus: "DNR / DNI (Per POLST document on file)",
    allergies: [
      { allergen: "Morphine", reaction: "Severe hypotension & Rash", severity: "Severe" },
      { allergen: "Contrast Dye (Iodinated)", reaction: "Acute Kidney Injury & Urticaria", severity: "Severe" }
    ],
    vitals: {
      heartRate: 104,
      bloodPressureSys: 92,
      bloodPressureDia: 58,
      respiratoryRate: 24,
      temperatureC: 38.6,
      temperatureF: 101.5,
      oxygenSaturation: 91,
      bmi: 26.1,
      heightCm: 175,
      weightKg: 80.0,
      painScale: 2,
      bloodGlucose: 168,
      consciousness: "Verbal (AVPU-V)",
      recordedAt: "2026-08-29T09:00:00Z"
    },
    vitalHistory: [
      { time: "2026-08-28T04:00:00Z", hr: 118, sys: 86, dia: 52, rr: 28, spo2: 88, temp: 39.1 },
      { time: "2026-08-28T12:00:00Z", hr: 110, sys: 94, dia: 56, rr: 26, spo2: 90, temp: 38.8 },
      { time: "2026-08-28T20:00:00Z", hr: 106, sys: 90, dia: 54, rr: 25, spo2: 91, temp: 38.5 },
      { time: "2026-08-29T08:00:00Z", hr: 104, sys: 92, dia: 58, rr: 24, spo2: 91, temp: 38.6 }
    ],
    diagnoses: [
      { code: "A41.9", name: "Sepsis, unspecified organism", status: "Active", date: "2026-08-27" },
      { code: "N39.0", name: "Urinary tract infection, site not specified", status: "Active", date: "2026-08-27" },
      { code: "I48.91", name: "Unspecified atrial fibrillation", status: "Active", date: "2017-05-14" },
      { code: "I50.9", name: "Heart failure, unspecified", status: "Active", date: "2020-10-09" }
    ],
    prescriptions: [
      { id: "RX-510", drugId: "DRUG-007", name: "Norepinephrine Bitartrate", dose: "0.08 mcg/kg/min", route: "IV Continuous Infusion", frequency: "Titrate to MAP >= 65 mmHg", startDate: "2026-08-27", status: "Active", refills: 0 },
      { id: "RX-511", drugId: "DRUG-008", name: "Meropenem", dose: "1g IVPB", route: "Intravenous", frequency: "Every 8 hours (adjusted for GFR)", startDate: "2026-08-27", status: "Active", refills: 0 },
      { id: "RX-512", drugId: "DRUG-011", name: "Amiodarone HCl", dose: "150mg loading over 10m, then 1mg/min", route: "IV Infusion", frequency: "Continuous 6 hours then 0.5mg/min", startDate: "2026-08-27", status: "Active", refills: 0 }
    ],
    soapNotes: [
      {
        id: "SOAP-904",
        date: "2026-08-28T08:00:00Z",
        author: "Dr. Marcus Vance, MD, FCCP",
        authorRole: "Attending Intensivist",
        subjective: "Patient admitted via ED in septic shock secondary to urosepsis with positive blood cultures (E. coli). MAP now maintained at 65-70 on low-dose Levophed. Patient minimally responsive to verbal commands.",
        objective: "Vitals: BP 92/58 (MAP 69) on Norepinephrine 0.08 mcg/kg/min. HR 104 in Atrial Fibrillation with rapid ventricular response. SpO2 91% on High Flow Nasal Cannula (FiO2 45%, Flow 35L/min). Urine output 25 mL/hr over last 6 hours.",
        assessment: "1. Septic shock secondary to Gram-negative urosepsis.\n2. Acute kidney injury on chronic kidney disease (KDIGO Stage 2).\n3. Atrial Fibrillation with RVR, rate controlled with Amiodarone.",
        plan: "1. Continue Meropenem 1g IV q8h.\n2. Goal MAP >= 65 mmHg; wean Norepinephrine as tolerated.\n3. Continuous cardiac telemetry and arterial line monitoring.\n4. Check repeat serum lactate, blood cultures, and creatinine q12h."
      }
    ],
    labResults: [
      {
        id: "LAB-805",
        date: "2026-08-28T06:00:00Z",
        panel: "ICU Sepsis & Arterial Blood Gas (ABG)",
        status: "Completed",
        items: [
          { test: "Serum Lactate", value: 3.4, unit: "mmol/L", refRange: "0.5 - 2.0", flag: "CRITICAL_HIGH" },
          { test: "pH (Arterial)", value: 7.31, unit: "", refRange: "7.35 - 7.45", flag: "LOW" },
          { test: "pCO2", value: 32, unit: "mmHg", refRange: "35 - 45", flag: "LOW" },
          { test: "pO2", value: 68, unit: "mmHg", refRange: "80 - 100", flag: "LOW" },
          { test: "HCO3", value: 16.5, unit: "mmol/L", refRange: "22 - 26", flag: "LOW" },
          { test: "Base Excess", value: -7.2, unit: "mmol/L", refRange: "-2 to +2", flag: "LOW" },
          { test: "Serum Creatinine", value: 2.85, unit: "mg/dL", refRange: "0.70 - 1.30", flag: "CRITICAL_HIGH" }
        ]
      }
    ],
    imagingOrders: [
      { id: "IMG-705", modality: "Portable ICU Chest X-Ray", date: "2026-08-27", status: "Completed", scanType: "icu_chest_xray", findings: "Bilateral perihilar interstitial prominence, compatible with early volume overload/mild pulmonary edema." }
    ]
  },
  {
    id: "PAT-1005",
    mrn: "MRN-602918",
    firstName: "Chloe",
    lastName: "Kim",
    dob: "1995-07-30",
    age: 31,
    gender: "Female",
    bloodGroup: "A-",
    phone: "+1 (555) 619-4402",
    email: "chloe.kim@example.com",
    address: "210 Tremont St, Boston, MA 02116",
    emergencyContact: {
      name: "David Kim",
      relation: "Brother",
      phone: "+1 (555) 619-4405"
    },
    insurance: {
      provider: "UnitedHealthcare Choice Plus",
      policyNumber: "UHC-7740192A",
      groupNumber: "GRP-3312",
      copay: 20.00,
      deductible: 1000.00,
      deductibleMet: 850.00,
      outOfPocketMax: 4000.00,
      outOfPocketSpent: 1200.00
    },
    primaryPhysician: "DOC-105", // Dr. Sanjay Patel (Orthopedics)
    department: "Orthopedic Surgery",
    ward: "Surgical Pavilion - 5B",
    bedNumber: "Bed-502",
    admissionDate: "2026-08-28T18:20:00Z",
    status: "Post-Op",
    triageLevel: 3, // ESI 3: Urgent
    codeStatus: "Full Code",
    allergies: [
      { allergen: "Sulfa", reaction: "Hives", severity: "Moderate" }
    ],
    vitals: {
      heartRate: 76,
      bloodPressureSys: 118,
      bloodPressureDia: 74,
      respiratoryRate: 15,
      temperatureC: 36.9,
      temperatureF: 98.4,
      oxygenSaturation: 98,
      bmi: 21.8,
      heightCm: 168,
      weightKg: 61.5,
      painScale: 5,
      bloodGlucose: 92,
      consciousness: "Alert (AVPU-A)",
      recordedAt: "2026-08-29T08:45:00Z"
    },
    vitalHistory: [
      { time: "2026-08-28T20:00:00Z", hr: 82, sys: 122, dia: 76, rr: 16, spo2: 99, temp: 37.1 },
      { time: "2026-08-29T02:00:00Z", hr: 78, sys: 116, dia: 72, rr: 14, spo2: 98, temp: 36.8 },
      { time: "2026-08-29T08:45:00Z", hr: 76, sys: 118, dia: 74, rr: 15, spo2: 98, temp: 36.9 }
    ],
    diagnoses: [
      { code: "S83.511A", name: "Anterior cruciate ligament (ACL) rupture, right knee, initial encounter", status: "Active", date: "2026-08-20" },
      { code: "S83.241A", name: "Tear of medial meniscus of right knee, current injury", status: "Active", date: "2026-08-20" }
    ],
    prescriptions: [
      { id: "RX-513", drugId: "DRUG-021", name: "Oxycodone / Acetaminophen (Percocet)", dose: "5mg/325mg", route: "Oral", frequency: "Every 4 to 6 hours PRN severe pain", startDate: "2026-08-28", status: "Active", refills: 0 },
      { id: "RX-514", drugId: "DRUG-023", name: "Enoxaparin Sodium (Lovenox)", dose: "40mg subcutaneous", route: "Subcutaneous", frequency: "Once daily for DVT prophylaxis", startDate: "2026-08-28", status: "Active", refills: 0 },
      { id: "RX-515", drugId: "DRUG-024", name: "Ondansetron HCl (Zofran)", dose: "4mg", route: "Oral Dissolving Tablet", frequency: "Every 8 hours PRN nausea", startDate: "2026-08-28", status: "Active", refills: 1 }
    ],
    soapNotes: [
      {
        id: "SOAP-905",
        date: "2026-08-29T07:30:00Z",
        author: "Dr. Sanjay Patel, MD, FAAOS",
        authorRole: "Attending Orthopedic Surgeon",
        subjective: "Post-op Day 1 following right knee arthroscopic ACL reconstruction with bone-patellar tendon-bone autograft and partial medial meniscectomy. Reports pain 5/10, well controlled with oral analgesia. No numbness or tingling in toes.",
        objective: "Surgical dressing clean, dry, and intact without active bleeding. Right lower extremity warm and well-perfused. Distal dorsalis pedis and posterior tibial pulses 2+ symmetric. Sensation intact in L4, L5, S1 dermatomes. Active toe movement present.",
        assessment: "Uncomplicated Post-Op Day 1 right knee ACL reconstruction.",
        plan: "1. Physical therapy session for crutch ambulation and knee brace lock at 0 degrees.\n2. Cryotherapy compression sleeve 20 mins q2h.\n3. Discharge anticipated this afternoon if voiding and ambulating safely.\n4. Follow-up in orthopedic clinic in 10-14 days for suture removal."
      }
    ],
    labResults: [
      {
        id: "LAB-806",
        date: "2026-08-28T19:00:00Z",
        panel: "Routine Post-Operative Panel",
        status: "Completed",
        items: [
          { test: "Hemoglobin", value: 13.8, unit: "g/dL", refRange: "12.0 - 15.5", flag: "NORMAL" },
          { test: "Platelets", value: 260, unit: "10^3/uL", refRange: "150 - 450", flag: "NORMAL" },
          { test: "PT / INR", value: 1.02, unit: "ratio", refRange: "0.8 - 1.2", flag: "NORMAL" }
        ]
      }
    ],
    imagingOrders: [
      { id: "IMG-706", modality: "Right Knee MRI (Pre-Op)", date: "2026-08-22", status: "Completed", scanType: "knee_mri", findings: "Full-thickness tear of the anterior cruciate ligament with bone contusions on lateral femoral condyle and posterior tibial plateau. Complex tear of posterior horn of medial meniscus." },
      { id: "IMG-707", modality: "Right Knee AP & Lateral Post-Op X-Ray", date: "2026-08-28", status: "Completed", scanType: "knee_xray", findings: "Anatomical femoral and tibial tunnel placement with bio-absorbable interference screws in good position. No fracture or joint dislocation." }
    ]
  },
  {
    id: "PAT-1006",
    mrn: "MRN-529013",
    firstName: "William",
    lastName: "Thornton",
    dob: "1970-12-05",
    age: 55,
    gender: "Male",
    bloodGroup: "O-",
    phone: "+1 (555) 399-1144",
    email: "w.thornton@example.com",
    address: "508 Commonwealth Ave, Boston, MA 02215",
    emergencyContact: {
      name: "Helen Thornton",
      relation: "Wife",
      phone: "+1 (555) 399-1145"
    },
    insurance: {
      provider: "Cigna Health Care",
      policyNumber: "CIG-4491028D",
      groupNumber: "GRP-9021",
      copay: 20.00,
      deductible: 1200.00,
      deductibleMet: 1200.00,
      outOfPocketMax: 4500.00,
      outOfPocketSpent: 2100.00
    },
    primaryPhysician: "DOC-106", // Dr. Miriam Goldberg (Oncology)
    department: "Oncology",
    ward: "East Wing - 6C",
    bedNumber: "Bed-601",
    admissionDate: "2026-08-27T11:00:00Z",
    status: "Admitted",
    triageLevel: 3,
    codeStatus: "Full Code",
    allergies: [
      { allergen: "Ciprofloxacin", reaction: "Tendinitis / Rash", severity: "Moderate" }
    ],
    vitals: {
      heartRate: 80,
      bloodPressureSys: 128,
      bloodPressureDia: 82,
      respiratoryRate: 16,
      temperatureC: 37.0,
      temperatureF: 98.6,
      oxygenSaturation: 97,
      bmi: 24.2,
      heightCm: 178,
      weightKg: 76.7,
      painScale: 1,
      bloodGlucose: 102,
      consciousness: "Alert (AVPU-A)",
      recordedAt: "2026-08-29T08:00:00Z"
    },
    vitalHistory: [
      { time: "2026-08-27T12:00:00Z", hr: 82, sys: 130, dia: 84, rr: 16, spo2: 98, temp: 37.0 },
      { time: "2026-08-28T08:00:00Z", hr: 78, sys: 126, dia: 80, rr: 16, spo2: 97, temp: 36.9 },
      { time: "2026-08-29T08:00:00Z", hr: 80, sys: 128, dia: 82, rr: 16, spo2: 97, temp: 37.0 }
    ],
    diagnoses: [
      { code: "C18.7", name: "Malignant neoplasm of sigmoid colon", status: "Active", date: "2026-07-15" },
      { code: "D64.9", name: "Anemia, unspecified", status: "Active", date: "2026-07-15" }
    ],
    prescriptions: [
      { id: "RX-516", drugId: "DRUG-025", name: "Oxaliplatin", dose: "85mg/m2 IV", route: "IV Infusion", frequency: "Day 1 of 14-day FOLFOX cycle", startDate: "2026-08-28", status: "Active", refills: 5 },
      { id: "RX-517", drugId: "DRUG-026", name: "Fluorouracil (5-FU)", dose: "400mg/m2 IV bolus, then 2400mg/m2 IV continuous over 46h", route: "IV Continuous", frequency: "Day 1-2 of 14-day cycle", startDate: "2026-08-28", status: "Active", refills: 5 },
      { id: "RX-518", drugId: "DRUG-024", name: "Ondansetron HCl", dose: "8mg", route: "Oral", frequency: "30 min pre-chemotherapy and q12h x 2 days", startDate: "2026-08-28", status: "Active", refills: 3 }
    ],
    soapNotes: [
      {
        id: "SOAP-906",
        date: "2026-08-28T09:30:00Z",
        author: "Dr. Miriam Goldberg, MD",
        authorRole: "Attending Medical Oncologist",
        subjective: "Patient admitted for Cycle 2 of adjuvant FOLFOX-6 chemotherapy following laparoscopic sigmoid colectomy for Stage III (T3N1M0) adenocarcinoma. Tolerated Cycle 1 well with mild cold-induced peripheral dysesthesia in fingertips.",
        objective: "ECOG Performance Status: 0. Well-nourished male in no acute distress. Abdomen soft, non-tender, laparoscopic port scars well-healed. Port-a-cath site left anterior chest wall without erythema or discharge.",
        assessment: "Stage III Adenocarcinoma of Sigmoid Colon, receiving adjuvant FOLFOX-6.",
        plan: "1. Verify pre-chemo labs: ANC > 1500, Platelets > 100k, LFTs and Creatinine within normal limits.\n2. Infuse premedications: Dexamethasone 12mg IV + Ondansetron 8mg IV.\n3. Administer Cycle 2 FOLFOX-6 via CADD ambulatory infusion pump.\n4. Discharge with 46-hour 5-FU pump; return to clinic Sunday for pump disconnection."
      }
    ],
    labResults: [
      {
        id: "LAB-807",
        date: "2026-08-28T07:30:00Z",
        panel: "Pre-Chemotherapy CBC & Hepatic Function",
        status: "Completed",
        items: [
          { test: "Absolute Neutrophil Count (ANC)", value: 2.8, unit: "10^3/uL", refRange: "1.5 - 8.0", flag: "NORMAL" },
          { test: "Hemoglobin", value: 11.4, unit: "g/dL", refRange: "13.5 - 17.5", flag: "LOW" },
          { test: "Platelets", value: 195, unit: "10^3/uL", refRange: "150 - 450", flag: "NORMAL" },
          { test: "ALT (SGPT)", value: 28, unit: "U/L", refRange: "7 - 56", flag: "NORMAL" },
          { test: "AST (SGOT)", value: 24, unit: "U/L", refRange: "10 - 40", flag: "NORMAL" },
          { test: "Total Bilirubin", value: 0.7, unit: "mg/dL", refRange: "0.2 - 1.2", flag: "NORMAL" }
        ]
      }
    ],
    imagingOrders: [
      { id: "IMG-708", modality: "Abdominal & Pelvic Contrast CT (Baseline)", date: "2026-07-20", status: "Completed", scanType: "abdomen_ct", findings: "Post-surgical changes sigmoid resection. No evidence of hepatic metastasis, peritoneal carcinomatosis, or retroperitoneal adenopathy." }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_PATIENTS };
}
