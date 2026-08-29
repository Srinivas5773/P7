/**
 * OmniHealth OS - Mock ICD-10 Diagnosis Codes & CPT Procedure Codes
 * Comprehensive medical coding dictionary with categories, standard RVUs,
 * descriptions, and billable base costs.
 */

const MOCK_ICD10_CODES = [
  // Cardiovascular
  { code: "I10", description: "Essential (primary) hypertension", category: "Circulatory System", chronic: true, riskScore: 0.18 },
  { code: "I25.10", description: "Atherosclerotic heart disease of native coronary artery without angina pectoris", category: "Circulatory System", chronic: true, riskScore: 0.42 },
  { code: "I20.9", description: "Angina pectoris, unspecified", category: "Circulatory System", chronic: false, riskScore: 0.35 },
  { code: "I21.09", description: "ST elevation (STEMI) myocardial infarction involving other anterior wall", category: "Circulatory System", chronic: false, riskScore: 1.25 },
  { code: "I21.4", description: "Non-ST elevation (NSTEMI) myocardial infarction", category: "Circulatory System", chronic: false, riskScore: 1.10 },
  { code: "I48.91", description: "Unspecified atrial fibrillation", category: "Circulatory System", chronic: true, riskScore: 0.38 },
  { code: "I50.9", description: "Heart failure, unspecified", category: "Circulatory System", chronic: true, riskScore: 0.85 },
  { code: "I73.9", description: "Peripheral vascular disease, unspecified", category: "Circulatory System", chronic: true, riskScore: 0.40 },

  // Respiratory & Infectious
  { code: "J18.9", description: "Pneumonia, unspecified organism", category: "Respiratory System", chronic: false, riskScore: 0.72 },
  { code: "J45.909", description: "Unspecified asthma, uncomplicated", category: "Respiratory System", chronic: true, riskScore: 0.25 },
  { code: "J44.1", description: "Chronic obstructive pulmonary disease with (acute) exacerbation", category: "Respiratory System", chronic: true, riskScore: 0.65 },
  { code: "J06.9", description: "Acute upper respiratory infection, unspecified", category: "Respiratory System", chronic: false, riskScore: 0.05 },
  { code: "A41.9", description: "Sepsis, unspecified organism", category: "Infectious & Parasitic", chronic: false, riskScore: 1.85 },
  { code: "N39.0", description: "Urinary tract infection, site not specified", category: "Genitourinary System", chronic: false, riskScore: 0.22 },

  // Endocrine & Metabolic
  { code: "E11.9", description: "Type 2 diabetes mellitus without complications", category: "Endocrine & Metabolic", chronic: true, riskScore: 0.30 },
  { code: "E11.65", description: "Type 2 diabetes mellitus with hyperglycemia", category: "Endocrine & Metabolic", chronic: true, riskScore: 0.45 },
  { code: "E11.22", description: "Type 2 diabetes mellitus with diabetic chronic kidney disease", category: "Endocrine & Metabolic", chronic: true, riskScore: 0.75 },
  { code: "E78.5", description: "Hyperlipidemia, unspecified", category: "Endocrine & Metabolic", chronic: true, riskScore: 0.12 },
  { code: "E03.9", description: "Hypothyroidism, unspecified", category: "Endocrine & Metabolic", chronic: true, riskScore: 0.15 },
  { code: "E66.01", description: "Morbid (severe) obesity due to excess calories", category: "Endocrine & Metabolic", chronic: true, riskScore: 0.28 },

  // Neurological & Musculoskeletal
  { code: "G43.909", description: "Migraine, unspecified, not intractable, without status migrainosus", category: "Nervous System", chronic: true, riskScore: 0.14 },
  { code: "G40.909", description: "Epilepsy, unspecified, not intractable, without status epilepticus", category: "Nervous System", chronic: true, riskScore: 0.50 },
  { code: "I63.9", description: "Cerebral infarction, unspecified (Ischemic Stroke)", category: "Nervous System", chronic: false, riskScore: 1.15 },
  { code: "M54.5", description: "Low back pain / Lumbar radiculopathy", category: "Musculoskeletal", chronic: true, riskScore: 0.10 },
  { code: "M17.11", description: "Primary osteoarthritis, right knee", category: "Musculoskeletal", chronic: true, riskScore: 0.20 },
  { code: "S83.511A", description: "Anterior cruciate ligament (ACL) rupture, right knee, initial encounter", category: "Injury & Trauma", chronic: false, riskScore: 0.35 },
  { code: "S83.241A", description: "Tear of medial meniscus of right knee, current injury", category: "Injury & Trauma", chronic: false, riskScore: 0.25 },

  // Oncology
  { code: "C18.7", description: "Malignant neoplasm of sigmoid colon", category: "Neoplasms", chronic: true, riskScore: 1.45 },
  { code: "C50.919", description: "Malignant neoplasm of unspecified site of unspecified female breast", category: "Neoplasms", chronic: true, riskScore: 1.30 },
  { code: "C34.90", description: "Malignant neoplasm of unspecified part of bronchus or lung", category: "Neoplasms", chronic: true, riskScore: 1.90 },
  { code: "D64.9", description: "Anemia, unspecified", category: "Hematology", chronic: true, riskScore: 0.20 }
];

const MOCK_CPT_CODES = [
  // Evaluation & Management (E/M)
  { code: "99203", description: "Office or outpatient visit for new patient (Level 3 - Low Complexity, 30-44 min)", category: "Evaluation and Management", baseFee: 145.00 },
  { code: "99204", description: "Office or outpatient visit for new patient (Level 4 - Moderate Complexity, 45-59 min)", category: "Evaluation and Management", baseFee: 220.00 },
  { code: "99205", description: "Office or outpatient visit for new patient (Level 5 - High Complexity, 60-74 min)", category: "Evaluation and Management", baseFee: 310.00 },
  { code: "99213", description: "Office or outpatient visit for established patient (Level 3 - Low Complexity, 20-29 min)", category: "Evaluation and Management", baseFee: 110.00 },
  { code: "99214", description: "Office or outpatient visit for established patient (Level 4 - Moderate Complexity, 30-39 min)", category: "Evaluation and Management", baseFee: 165.00 },
  { code: "99215", description: "Office or outpatient visit for established patient (Level 5 - High Complexity, 40-54 min)", category: "Evaluation and Management", baseFee: 240.00 },
  { code: "99283", description: "Emergency department visit (Level 3 - Moderate Severity)", category: "Emergency Medicine", baseFee: 280.00 },
  { code: "99284", description: "Emergency department visit (Level 4 - High Severity without immediate threat)", category: "Emergency Medicine", baseFee: 420.00 },
  { code: "99285", description: "Emergency department visit (Level 5 - High Severity with immediate life threat)", category: "Emergency Medicine", baseFee: 650.00 },
  { code: "99291", description: "Critical care evaluation and management, first 30-74 minutes", category: "Critical Care", baseFee: 580.00 },

  // Diagnostic Procedures & Imaging
  { code: "93000", description: "Electrocardiogram (ECG / EKG), routine 12-lead with interpretation and report", category: "Cardiology", baseFee: 75.00 },
  { code: "93306", description: "Echocardiography, transthoracic, real-time with image documentation, 2D with spectral/color Doppler", category: "Cardiology", baseFee: 450.00 },
  { code: "71045", description: "Radiologic examination, chest; single view (Chest X-Ray)", category: "Radiology", baseFee: 95.00 },
  { code: "71046", description: "Radiologic examination, chest; 2 views, frontal and lateral", category: "Radiology", baseFee: 130.00 },
  { code: "70450", description: "Computed tomography, head or brain (Head CT); without contrast material", category: "Radiology", baseFee: 480.00 },
  { code: "74176", description: "Computed tomography, abdomen and pelvis; without contrast material", category: "Radiology", baseFee: 620.00 },
  { code: "73721", description: "Magnetic resonance imaging, any joint of lower extremity (Knee MRI); without contrast material", category: "Radiology", baseFee: 850.00 },

  // Laboratory & Pathology
  { code: "80053", description: "Comprehensive metabolic panel (CMP - 14 tests)", category: "Laboratory", baseFee: 85.00 },
  { code: "85025", description: "Blood count; complete (CBC) automated with differential WBC count", category: "Laboratory", baseFee: 55.00 },
  { code: "80061", description: "Lipid panel (Total cholesterol, HDL, LDL, Triglycerides)", category: "Laboratory", baseFee: 65.00 },
  { code: "83036", description: "Hemoglobin; glycosylated (HbA1c)", category: "Laboratory", baseFee: 45.00 },
  { code: "84484", description: "Troponin, quantitative (Cardiac biomarker)", category: "Laboratory", baseFee: 95.00 },
  { code: "87040", description: "Culture, bacterial; blood, with isolation and presumptive identification", category: "Microbiology", baseFee: 110.00 },

  // Surgical & Orthopedics
  { code: "29888", description: "Arthroscopically aided anterior cruciate ligament (ACL) repair/reconstruction", category: "Surgery / Orthopedics", baseFee: 3400.00 },
  { code: "29881", description: "Arthroscopy, knee, surgical; with meniscectomy (medial or lateral)", category: "Surgery / Orthopedics", baseFee: 1850.00 },
  { code: "44140", description: "Colectomy, partial; with anastomosis (Sigmoid Colectomy)", category: "Surgery / General", baseFee: 4200.00 },
  { code: "96413", description: "Chemotherapy administration, intravenous infusion technique; up to 1 hour", category: "Oncology", baseFee: 260.00 }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_ICD10_CODES, MOCK_CPT_CODES };
}
