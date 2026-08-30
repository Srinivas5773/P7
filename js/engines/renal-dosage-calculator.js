/**
 * Renal Dosage Adjustment and Pharmacokinetics Calculator
 * Calculates estimated Creatinine Clearance (Cockcroft-Gault) and dosage adjustments.
 */

class RenalDosageCalculator {
  constructor() {}

  calculateCrCl(age, weightKg, serumCreatinine, isFemale = false) {
    if (serumCreatinine <= 0) return 0;
    let crcl = ((140 - age) * weightKg) / (72 * serumCreatinine);
    if (isFemale) {
      crcl *= 0.85;
    }
    return Math.round(crcl * 10) / 10;
  }

  getDosingRecommendation(drugName, crcl) {
    if (crcl < 30) {
      return { adjustmentNeeded: true, reductionPercent: 50, warning: 'SEVERE_RENAL_IMPAIRMENT' };
    }
    if (crcl < 60) {
      return { adjustmentNeeded: true, reductionPercent: 25, warning: 'MODERATE_RENAL_IMPAIRMENT' };
    }
    return { adjustmentNeeded: false, reductionPercent: 0, warning: 'NORMAL_RENAL_FUNCTION' };
  }
}

module.exports = new RenalDosageCalculator();
