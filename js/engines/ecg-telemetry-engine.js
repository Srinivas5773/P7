/**
 * ICU Multi-Lead ECG Waveform and Arrhythmia Detection
 * Simulates real-time cardiac vectors and detects tachy/bradycardia events.
 */

class ECGTelemetryEngine {
  constructor() {
    this.heartRateLimits = { min: 50, max: 120 };
  }

  evaluateHeartRate(bpm) {
    if (bpm < this.heartRateLimits.min) {
      return { status: 'BRADYCARDIA_ALERT', severity: 'CRITICAL', bpm };
    }
    if (bpm > this.heartRateLimits.max) {
      return { status: 'TACHYCARDIA_ALERT', severity: 'CRITICAL', bpm };
    }
    return { status: 'NORMAL_SINUS_RHYTHM', severity: 'NORMAL', bpm };
  }

  generateSyntheticLeadII(samples = 100) {
    const points = [];
    for (let i = 0; i < samples; i++) {
      const angle = (i / samples) * Math.PI * 2;
      points.push(Math.sin(angle) + 0.5 * Math.sin(3 * angle));
    }
    return points;
  }
}

module.exports = new ECGTelemetryEngine();
