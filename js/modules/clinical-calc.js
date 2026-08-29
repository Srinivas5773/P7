/**
 * OmniHealth OS - Clinical Decision Support & Medical Calculators
 * Validated clinical score equations:
 * 1. NEWS2 (National Early Warning Score for Sepsis & Clinical Deterioration)
 * 2. eGFR (CKD-EPI 2021 Creatinine Equation)
 * 3. CHA2DS2-VASc (Atrial Fibrillation Stroke Risk)
 * 4. Mean Arterial Pressure (MAP) & Pulse Pressure
 * 5. Body Mass Index (BMI), Body Surface Area (Mosteller), Ideal Body Weight (Devine)
 * 6. Pediatric Weight-Based Dosage Calculator
 */

const ClinicalCalculators = {
  /**
   * NEWS2 Calculator (Royal College of Physicians)
   * Scores: Respiration Rate, SpO2, Oxygen Therapy, Systolic BP, Heart Rate, Consciousness (AVPU), Temperature
   */
  calculateNEWS2({ rr, spo2, onOxygen, sysBP, hr, avpu, temp }) {
    let score = 0;
    const breakdown = {};

    // 1. Respiration Rate (breaths/min)
    if (rr <= 8) { score += 3; breakdown.rr = 3; }
    else if (rr >= 9 && rr <= 11) { score += 1; breakdown.rr = 1; }
    else if (rr >= 12 && rr <= 20) { score += 0; breakdown.rr = 0; }
    else if (rr >= 21 && rr <= 24) { score += 2; breakdown.rr = 2; }
    else if (rr >= 25) { score += 3; breakdown.rr = 3; }

    // 2. Oxygen Saturation (SpO2 Scale 1)
    if (spo2 <= 91) { score += 3; breakdown.spo2 = 3; }
    else if (spo2 === 92 || spo2 === 93) { score += 2; breakdown.spo2 = 2; }
    else if (spo2 === 94 || spo2 === 95) { score += 1; breakdown.spo2 = 1; }
    else if (spo2 >= 96) { score += 0; breakdown.spo2 = 0; }

    // 3. Supplemental Oxygen
    if (onOxygen) { score += 2; breakdown.onOxygen = 2; }
    else { breakdown.onOxygen = 0; }

    // 4. Systolic Blood Pressure (mmHg)
    if (sysBP <= 90) { score += 3; breakdown.sysBP = 3; }
    else if (sysBP >= 91 && sysBP <= 100) { score += 2; breakdown.sysBP = 2; }
    else if (sysBP >= 101 && sysBP <= 110) { score += 1; breakdown.sysBP = 1; }
    else if (sysBP >= 111 && sysBP <= 219) { score += 0; breakdown.sysBP = 0; }
    else if (sysBP >= 220) { score += 3; breakdown.sysBP = 3; }

    // 5. Heart Rate (bpm)
    if (hr <= 40) { score += 3; breakdown.hr = 3; }
    else if (hr >= 41 && hr <= 50) { score += 1; breakdown.hr = 1; }
    else if (hr >= 51 && hr <= 90) { score += 0; breakdown.hr = 0; }
    else if (hr >= 91 && hr <= 110) { score += 1; breakdown.hr = 1; }
    else if (hr >= 111 && hr <= 130) { score += 2; breakdown.hr = 2; }
    else if (hr >= 131) { score += 3; breakdown.hr = 3; }

    // 6. Consciousness (Alert vs CVPU)
    if (avpu === 'A' || avpu === 'Alert') { score += 0; breakdown.avpu = 0; }
    else { score += 3; breakdown.avpu = 3; }

    // 7. Temperature (°C)
    if (temp <= 35.0) { score += 3; breakdown.temp = 3; }
    else if (temp >= 35.1 && temp <= 36.0) { score += 1; breakdown.temp = 1; }
    else if (temp >= 36.1 && temp <= 38.0) { score += 0; breakdown.temp = 0; }
    else if (temp >= 38.1 && temp <= 39.0) { score += 1; breakdown.temp = 1; }
    else if (temp >= 39.1) { score += 2; breakdown.temp = 2; }

    let clinicalRisk = "Low Clinical Risk";
    let alertClass = "badge-success";
    let response = "Ward-based response. Routine 12-hourly monitoring.";

    if (score >= 7) {
      clinicalRisk = "High Risk / Critical Sepsis Hazard (Score >= 7)";
      alertClass = "badge-danger";
      response = "EMERGENT RESPONSE: Immediate assessment by Critical Care / ICU outreach team. Transfer to HDU/ICU consideration.";
    } else if (score >= 5 || Object.values(breakdown).some(v => v === 3)) {
      clinicalRisk = "Medium Risk (Score 5-6 or Individual Red Score 3)";
      alertClass = "badge-warning";
      response = "Urgent clinical review by attending physician or Rapid Response Team (RRT). Continuous or hourly monitoring.";
    } else if (score >= 1) {
      clinicalRisk = "Low Risk (Score 1-4)";
      alertClass = "badge-info";
      response = "Ward nurse assessment. Minimum 4-6 hourly monitoring.";
    }

    return { totalScore: score, breakdown, clinicalRisk, alertClass, response };
  },

  /**
   * eGFR Calculator (2021 CKD-EPI Creatinine Equation without Race)
   */
  calculateEGFR({ creatinineMgDl, age, gender }) {
    const isFemale = gender.toLowerCase().startsWith('f');
    const kappa = isFemale ? 0.7 : 0.9;
    const alpha = isFemale ? -0.241 : -0.302;
    const femaleFactor = isFemale ? 1.012 : 1.0;

    const scrDivKappa = creatinineMgDl / kappa;
    const minVal = Math.min(scrDivKappa, 1);
    const maxVal = Math.max(scrDivKappa, 1);

    const egfr = 142 * Math.pow(minVal, alpha) * Math.pow(maxVal, -1.200) * Math.pow(0.9938, age) * femaleFactor;
    const rounded = Math.round(egfr);

    let stage = "G1 (Normal or High)";
    let description = "Normal renal function";
    if (rounded >= 90) { stage = "Stage G1"; description = "Normal / High renal function (>=90 mL/min/1.73m²)"; }
    else if (rounded >= 60) { stage = "Stage G2"; description = "Mildly decreased renal function (60-89 mL/min/1.73m²)"; }
    else if (rounded >= 45) { stage = "Stage G3a"; description = "Mild to moderately decreased renal function (45-59 mL/min/1.73m²)"; }
    else if (rounded >= 30) { stage = "Stage G3b"; description = "Moderately to severely decreased renal function (30-44 mL/min/1.73m²)"; }
    else if (rounded >= 15) { stage = "Stage G4"; description = "Severely decreased renal function (15-29 mL/min/1.73m²)"; }
    else { stage = "Stage G5"; description = "Kidney failure / End-Stage Renal Disease (<15 mL/min/1.73m²)"; }

    return { egfr: rounded, stage, description };
  },

  /**
   * CHA2DS2-VASc Stroke Risk Calculator in Non-Valvular Atrial Fibrillation
   */
  calculateCHADS({ chf, hypertension, age, diabetes, strokeTia, vascularDisease, gender }) {
    let score = 0;
    const isFemale = gender.toLowerCase().startsWith('f');

    if (chf) score += 1;
    if (hypertension) score += 1;
    if (age >= 75) score += 2;
    else if (age >= 65) score += 1;
    if (diabetes) score += 1;
    if (strokeTia) score += 2;
    if (vascularDisease) score += 1;
    if (isFemale) score += 1;

    let annualStrokeRisk = "0.2%";
    let recommendation = "Low risk: No antithrombotic therapy recommended.";

    if (score === 1 && !isFemale) {
      annualStrokeRisk = "0.6%";
      recommendation = "Low-Moderate risk: Oral anticoagulant (DOAC preferred) should be considered.";
    } else if (score >= 2) {
      const risks = ["0.2%", "0.6%", "2.2%", "3.2%", "4.8%", "7.2%", "9.7%", "11.2%", "12.5%", "15.0%"];
      annualStrokeRisk = risks[Math.min(score, risks.length - 1)];
      recommendation = "High risk: Oral anticoagulation (DOAC e.g. Apixaban or Warfarin) strongly recommended.";
    }

    return { score, annualStrokeRisk, recommendation };
  },

  /**
   * Hemodynamic Calculator: Mean Arterial Pressure (MAP) & Pulse Pressure
   */
  calculateHemodynamics({ sysBP, diaBP }) {
    const map = Math.round(diaBP + (sysBP - diaBP) / 3);
    const pulsePressure = sysBP - diaBP;
    let mapStatus = "Optimal Perfusion (65-100 mmHg)";
    let alertClass = "badge-success";

    if (map < 65) {
      mapStatus = "Inadequate Organ Perfusion (< 65 mmHg - Sepsis / Shock Hazard)";
      alertClass = "badge-danger";
    } else if (map > 110) {
      mapStatus = "Severe Hypertension / Hypertensive Urgency";
      alertClass = "badge-warning";
    }

    return { map, pulsePressure, mapStatus, alertClass };
  },

  /**
   * Anthropometrics: BMI, BSA (Mosteller), Ideal Body Weight (Devine)
   */
  calculateAnthropometrics({ weightKg, heightCm, gender }) {
    const heightM = heightCm / 100;
    const bmi = parseFloat((weightKg / (heightM * heightM)).toFixed(1));
    const bsa = parseFloat(Math.sqrt((heightCm * weightKg) / 3600).toFixed(2));

    const heightInches = heightCm / 2.54;
    const inchesOver5Ft = Math.max(0, heightInches - 60);
    const isFemale = gender.toLowerCase().startsWith('f');
    const ibw = parseFloat((isFemale ? (45.5 + 2.3 * inchesOver5Ft) : (50.0 + 2.3 * inchesOver5Ft)).toFixed(1));

    let category = "Normal weight";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25.0) category = "Normal weight (18.5 - 24.9)";
    else if (bmi < 30.0) category = "Overweight (25.0 - 29.9)";
    else if (bmi < 35.0) category = "Obesity Class I (30.0 - 34.9)";
    else if (bmi < 40.0) category = "Obesity Class II (35.0 - 39.9)";
    else category = "Morbid Obesity Class III (>= 40.0)";

    return { bmi, bsa, ibw, category };
  },

  /**
   * Pediatric & Adult Weight-Based Dosage Calculator
   */
  calculateDosage({ weightKg, dosePerKg, frequencyHours, maxDailyDoseMg }) {
    const singleDoseMg = parseFloat((weightKg * dosePerKg).toFixed(1));
    const dosesPerDay = Math.floor(24 / frequencyHours);
    let totalDailyMg = singleDoseMg * dosesPerDay;

    let warning = null;
    if (maxDailyDoseMg && totalDailyMg > maxDailyDoseMg) {
      warning = `Calculated daily dose (${totalDailyMg}mg) exceeds maximum safe daily limit (${maxDailyDoseMg}mg). Capped at maximum.`;
      totalDailyMg = maxDailyDoseMg;
    }

    return { singleDoseMg, dosesPerDay, totalDailyMg, warning };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ClinicalCalculators };
}
