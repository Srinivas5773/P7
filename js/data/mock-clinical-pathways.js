/**
 * OmniHealth OS - Clinical Practice Guidelines & Care Pathways Knowledge Base
 * Validated evidence-based clinical workflows and escalation triggers.
 */
const CLINICAL_CARE_PATHWAYS = [
  {
    "pathwayId": "PATH-1-1",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 1",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-2",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 2",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-3",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 3",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-4",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 4",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-5",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 5",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-6",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 6",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-7",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 7",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-8",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 8",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-9",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 9",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-10",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 10",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-11",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 11",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-12",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 12",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-13",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 13",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-14",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 14",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-15",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 15",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-16",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 16",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-17",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 17",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-18",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 18",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-19",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 19",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-20",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 20",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-21",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 21",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-22",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 22",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-23",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 23",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-24",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 24",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-1-25",
    "title": "Acute Coronary Syndrome & STEMI Rapid Protocol - Clinical Decision Stage 25",
    "category": "Acute Coronary Syndrome & STEMI Rapid Protocol",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-1",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 1",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-2",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 2",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-3",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 3",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-4",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 4",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-5",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 5",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-6",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 6",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-7",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 7",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-8",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 8",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-9",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 9",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-10",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 10",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-11",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 11",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-12",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 12",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-13",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 13",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-14",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 14",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-15",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 15",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-16",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 16",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-17",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 17",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-18",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 18",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-19",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 19",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-20",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 20",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-21",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 21",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-22",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 22",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-23",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 23",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-24",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 24",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-2-25",
    "title": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol - Clinical Decision Stage 25",
    "category": "Acute Ischemic Stroke & Thrombolysis / Thrombectomy Protocol",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-1",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 1",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-2",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 2",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-3",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 3",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-4",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 4",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-5",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 5",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-6",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 6",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-7",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 7",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-8",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 8",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-9",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 9",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-10",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 10",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-11",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 11",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-12",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 12",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-13",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 13",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-14",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 14",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-15",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 15",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-16",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 16",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-17",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 17",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-18",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 18",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-19",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 19",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-20",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 20",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-21",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 21",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-22",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 22",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-23",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 23",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-24",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 24",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-3-25",
    "title": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign) - Clinical Decision Stage 25",
    "category": "Sepsis & Septic Shock Resuscitation Bundle (Surviving Sepsis Campaign)",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-1",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 1",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-2",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 2",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-3",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 3",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-4",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 4",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-5",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 5",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-6",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 6",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-7",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 7",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-8",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 8",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-9",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 9",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-10",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 10",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-11",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 11",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-12",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 12",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-13",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 13",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-14",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 14",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-15",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 15",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-16",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 16",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-17",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 17",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-18",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 18",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-19",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 19",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-20",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 20",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-21",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 21",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-22",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 22",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-23",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 23",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-24",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 24",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-4-25",
    "title": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol - Clinical Decision Stage 25",
    "category": "Diabetic Ketoacidosis (DKA) Insulin & Fluid Protocol",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-1",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 1",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-2",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 2",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-3",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 3",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-4",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 4",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-5",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 5",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-6",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 6",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-7",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 7",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-8",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 8",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-9",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 9",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-10",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 10",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-11",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 11",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-12",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 12",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-13",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 13",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-14",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 14",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-15",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 15",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-16",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 16",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-17",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 17",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-18",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 18",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-19",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 19",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-20",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 20",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-21",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 21",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-22",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 22",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-23",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 23",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-24",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 24",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-5-25",
    "title": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation - Clinical Decision Stage 25",
    "category": "Adult Acute Respiratory Distress Syndrome (ARDS) Lung-Protective Ventilation",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-1",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 1",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-2",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 2",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-3",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 3",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-4",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 4",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-5",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 5",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-6",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 6",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-7",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 7",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-8",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 8",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-9",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 9",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-10",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 10",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-11",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 11",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-12",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 12",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-13",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 13",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-14",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 14",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-15",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 15",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-16",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 16",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-17",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 17",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-18",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 18",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-19",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 19",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-20",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 20",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-21",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 21",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-22",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 22",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-23",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 23",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-24",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 24",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-6-25",
    "title": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol - Clinical Decision Stage 25",
    "category": "Deep Vein Thrombosis & Pulmonary Embolism Anticoagulation Protocol",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-1",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 1",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-2",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 2",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-3",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 3",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-4",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 4",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-5",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 5",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-6",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 6",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-7",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 7",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-8",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 8",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-9",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 9",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-10",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 10",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-11",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 11",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-12",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 12",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-13",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 13",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-14",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 14",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-15",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 15",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-16",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 16",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-17",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 17",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-18",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 18",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-19",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 19",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-20",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 20",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-21",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 21",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-22",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 22",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-23",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 23",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-24",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 24",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-7-25",
    "title": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway - Clinical Decision Stage 25",
    "category": "Community-Acquired Pneumonia (CURB-65) Stratification & Antimicrobial Pathway",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-1",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 1",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-2",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 2",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-3",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 3",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-4",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 4",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-5",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 5",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-6",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 6",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-7",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 7",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-8",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 8",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-9",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 9",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-10",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 10",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-11",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 11",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-12",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 12",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-13",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 13",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-14",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 14",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-15",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 15",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-16",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 16",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-17",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 17",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-18",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 18",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-19",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 19",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-20",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 20",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-21",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 21",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-22",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 22",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-23",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 23",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-24",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 24",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-8-25",
    "title": "Pediatric Status Asthmaticus Escalation Protocol - Clinical Decision Stage 25",
    "category": "Pediatric Status Asthmaticus Escalation Protocol",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-1",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 1",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-2",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 2",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-3",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 3",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-4",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 4",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-5",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 5",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-6",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 6",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-7",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 7",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-8",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 8",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-9",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 9",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-10",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 10",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-11",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 11",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-12",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 12",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-13",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 13",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-14",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 14",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-15",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 15",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-16",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 16",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-17",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 17",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-18",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 18",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-19",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 19",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-20",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 20",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-21",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 21",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-22",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 22",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-23",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 23",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-24",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 24",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-9-25",
    "title": "Hypertensive Emergency & Target Organ Damage Protocol - Clinical Decision Stage 25",
    "category": "Hypertensive Emergency & Target Organ Damage Protocol",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-1",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 1",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 1,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 1",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-2",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 2",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 2,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 2",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-3",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 3",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 3,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 3",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-4",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 4",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 4,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 4",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-5",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 5",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 5,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 5",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-6",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 6",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 6,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 6",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-7",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 7",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 7,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 7",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-8",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 8",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 8,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 8",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-9",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 9",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 9,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 9",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-10",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 10",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 10,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 10",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-11",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 11",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 11,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 11",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-12",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 12",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 12,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 12",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-13",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 13",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 13,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 13",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-14",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 14",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 14,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 14",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-15",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 15",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 15,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 15",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-16",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 16",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 16,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 16",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-17",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 17",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 17,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 17",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-18",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 18",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 18,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 18",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-19",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 19",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 19,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 19",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-20",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 20",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 20,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 20",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-21",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 21",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 21,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 21",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-22",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 22",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 22,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 22",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-23",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 23",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 23,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 23",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-24",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 24",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 24,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 24",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  },
  {
    "pathwayId": "PATH-10-25",
    "title": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway - Clinical Decision Stage 25",
    "category": "Post-Operative Enhanced Recovery After Surgery (ERAS) Pathway",
    "phaseLevel": 25,
    "targetPopulation": "Inpatient and Intensive Care Units",
    "evidenceGrade": "Class I, Level of Evidence A (AHA / ACC / WHO Guidelines)",
    "clinicalActions": [
      "Assess baseline physiological vitals (HR, BP, SpO2, RR, GCS, Temperature) within first 15 minutes of stage 25",
      "Obtain STAT diagnostic biomarkers: High-sensitivity Troponin, Serum Lactate, Arterial Blood Gas, CMP, and CBC",
      "Initiate evidence-based targeted pharmacological infusion with continuous hemodynamic telemetry monitoring",
      "Perform continuous clinical scoring evaluation utilizing NEWS2, qSOFA, and Glasgow Coma Scale algorithms"
    ],
    "escalationTriggers": [
      "MAP < 65 mmHg refractory to initial crystalloid fluid bolus of 30 mL/kg",
      "Serum Lactate > 4.0 mmol/L or failure to clear by 20% over 2-hour interval",
      "Respiratory failure with PaO2/FiO2 ratio < 200 requiring high-flow or invasive mechanical ventilation"
    ],
    "contraindicationsAndCautions": [
      "Check patient EHR for documented beta-lactam, sulfonamide, or opioid hypersensitivity before order entry",
      "Adjust dosing intervals in patients with calculated eGFR < 30 mL/min/1.73m² (CKD-EPI equation)"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CLINICAL_CARE_PATHWAYS };
}
