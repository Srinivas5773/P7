/**
 * Sepsis Early Warning Scoring (qSOFA & NEWS2)
 * Evaluates physiological parameters and triggers real-time clinical alerts.
 */

class SepsisRiskEngine {
  constructor() {
    this.alertThreshold = 2; // qSOFA score >= 2 triggers alert
  }

  evaluateQSOFA(vitals) {
    let score = 0;
    const { respiratoryRate, systolicBP, gcsScore } = vitals;

    if (respiratoryRate >= 22) score += 1;
    if (systolicBP <= 100) score += 1;
    if (gcsScore < 15) score += 1;

    return {
      score,
      riskLevel: score >= 2 ? 'HIGH' : (score === 1 ? 'MODERATE' : 'LOW'),
      alert: score >= this.alertThreshold,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = new SepsisRiskEngine();
