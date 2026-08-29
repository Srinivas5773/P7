/**
 * OmniHealth OS - Mock Laboratory & Pathology Catalog (LIS)
 * Test panels, individual assays, reference ranges by age/gender,
 * critical panic alert thresholds, and sample tube specifications.
 */

const MOCK_LAB_CATALOG = [
  {
    id: "PANEL-CBC",
    name: "Complete Blood Count (CBC) with Differential",
    tubeType: "Lavender Top (EDTA Tube)",
    department: "Hematology",
    turnaroundTime: "30 - 45 min (STAT 15 min)",
    cptCode: "85025",
    cost: 55.00,
    tests: [
      { code: "WBC", name: "White Blood Cell Count", unit: "10^3/uL", refMin: 4.5, refMax: 11.0, panicLow: 1.5, panicHigh: 30.0 },
      { code: "RBC", name: "Red Blood Cell Count", unit: "10^6/uL", refMin: 4.2, refMax: 5.9, panicLow: 2.0, panicHigh: 7.0 },
      { code: "HGB", name: "Hemoglobin", unit: "g/dL", refMin: 12.0, refMax: 17.5, panicLow: 7.0, panicHigh: 20.0 },
      { code: "HCT", name: "Hematocrit", unit: "%", refMin: 37.0, refMax: 50.0, panicLow: 21.0, panicHigh: 60.0 },
      { code: "MCV", name: "Mean Corpuscular Volume", unit: "fL", refMin: 80.0, refMax: 100.0, panicLow: null, panicHigh: null },
      { code: "PLT", name: "Platelet Count", unit: "10^3/uL", refMin: 150, refMax: 450, panicLow: 30, panicHigh: 1000 },
      { code: "NEUT_PCT", name: "Neutrophils %", unit: "%", refMin: 45.0, refMax: 70.0, panicLow: null, panicHigh: null },
      { code: "LYMPH_PCT", name: "Lymphocytes %", unit: "%", refMin: 20.0, refMax: 45.0, panicLow: null, panicHigh: null }
    ]
  },
  {
    id: "PANEL-CMP",
    name: "Comprehensive Metabolic Panel (CMP)",
    tubeType: "Gold Top (SST Serum Separator Tube)",
    department: "Clinical Chemistry",
    turnaroundTime: "45 - 60 min (STAT 20 min)",
    cptCode: "80053",
    cost: 85.00,
    tests: [
      { code: "NA", name: "Sodium", unit: "mmol/L", refMin: 135, refMax: 145, panicLow: 120, panicHigh: 160 },
      { code: "K", name: "Potassium", unit: "mmol/L", refMin: 3.5, refMax: 5.0, panicLow: 2.8, panicHigh: 6.2 },
      { code: "CL", name: "Chloride", unit: "mmol/L", refMin: 96, refMax: 106, panicLow: 80, panicHigh: 125 },
      { code: "CO2", name: "Carbon Dioxide (Bicarbonate)", unit: "mmol/L", refMin: 22, refMax: 29, panicLow: 10, panicHigh: 40 },
      { code: "BUN", name: "Blood Urea Nitrogen", unit: "mg/dL", refMin: 7, refMax: 20, panicLow: null, panicHigh: 100 },
      { code: "CREAT", name: "Creatinine", unit: "mg/dL", refMin: 0.60, refMax: 1.20, panicLow: null, panicHigh: 4.0 },
      { code: "GLU", name: "Fasting Glucose", unit: "mg/dL", refMin: 70, refMax: 99, panicLow: 50, panicHigh: 400 },
      { code: "CA", name: "Calcium", unit: "mg/dL", refMin: 8.5, refMax: 10.5, panicLow: 6.5, panicHigh: 13.0 },
      { code: "TBIL", name: "Total Bilirubin", unit: "mg/dL", refMin: 0.2, refMax: 1.2, panicLow: null, panicHigh: 15.0 },
      { code: "AST", name: "Aspartate Aminotransferase (AST)", unit: "U/L", refMin: 10, refMax: 40, panicLow: null, panicHigh: 1000 },
      { code: "ALT", name: "Alanine Aminotransferase (ALT)", unit: "U/L", refMin: 7, refMax: 56, panicLow: null, panicHigh: 1000 },
      { code: "ALP", name: "Alkaline Phosphatase", unit: "U/L", refMin: 44, refMax: 147, panicLow: null, panicHigh: null },
      { code: "TP", name: "Total Protein", unit: "g/dL", refMin: 6.0, refMax: 8.3, panicLow: null, panicHigh: null },
      { code: "ALB", name: "Albumin", unit: "g/dL", refMin: 3.5, refMax: 5.0, panicLow: 1.5, panicHigh: null }
    ]
  },
  {
    id: "PANEL-CARDIAC",
    name: "Acute Cardiac Injury Biomarkers",
    tubeType: "Light Green Top (Lithium Heparin Plasma Tube)",
    department: "Clinical Chemistry / STAT",
    turnaroundTime: "20 min (STAT Emergency Priority)",
    cptCode: "84484",
    cost: 110.00,
    tests: [
      { code: "TROP_I", name: "High-Sensitivity Troponin I (hs-cTnI)", unit: "ng/L", refMin: 0, refMax: 14, panicLow: null, panicHigh: 50 },
      { code: "CK_MB", name: "Creatine Kinase-MB", unit: "ng/mL", refMin: 0.0, refMax: 5.0, panicLow: null, panicHigh: 25.0 },
      { code: "BNP", name: "B-Type Natriuretic Peptide", unit: "pg/mL", refMin: 0, refMax: 100, panicLow: null, panicHigh: 900 }
    ]
  },
  {
    id: "PANEL-LIPID",
    name: "Comprehensive Lipid Profile",
    tubeType: "Gold Top (SST Serum Separator Tube)",
    department: "Clinical Chemistry",
    turnaroundTime: "60 min",
    cptCode: "80061",
    cost: 65.00,
    tests: [
      { code: "CHOL", name: "Total Cholesterol", unit: "mg/dL", refMin: 120, refMax: 199, panicLow: null, panicHigh: null },
      { code: "TRIG", name: "Triglycerides", unit: "mg/dL", refMin: 40, refMax: 149, panicLow: null, panicHigh: 500 },
      { code: "HDL", name: "HDL Cholesterol", unit: "mg/dL", refMin: 50, refMax: 90, panicLow: null, panicHigh: null },
      { code: "LDL", name: "Calculated LDL Cholesterol", unit: "mg/dL", refMin: 50, refMax: 99, panicLow: null, panicHigh: 190 }
    ]
  },
  {
    id: "PANEL-ABG",
    name: "Arterial Blood Gas (ABG) & Lactate",
    tubeType: "Heparinized Arterial Blood Syringe on Ice",
    department: "Critical Care Lab / Blood Gas",
    turnaroundTime: "10 min STAT",
    cptCode: "82803",
    cost: 95.00,
    tests: [
      { code: "PH", name: "Arterial pH", unit: "", refMin: 7.35, refMax: 7.45, panicLow: 7.20, panicHigh: 7.60 },
      { code: "PCO2", name: "pCO2", unit: "mmHg", refMin: 35, refMax: 45, panicLow: 20, panicHigh: 70 },
      { code: "PO2", name: "pO2", unit: "mmHg", refMin: 80, refMax: 100, panicLow: 55, panicHigh: null },
      { code: "HCO3", name: "Bicarbonate (HCO3-)", unit: "mmol/L", refMin: 22, refMax: 26, panicLow: 12, panicHigh: 35 },
      { code: "BE", name: "Base Excess", unit: "mmol/L", refMin: -2.0, refMax: 2.0, panicLow: -10.0, panicHigh: 10.0 },
      { code: "LACTATE", name: "Whole Blood Lactate", unit: "mmol/L", refMin: 0.5, refMax: 2.0, panicLow: null, panicHigh: 4.0 }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_LAB_CATALOG };
}
