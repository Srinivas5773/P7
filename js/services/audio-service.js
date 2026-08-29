/**
 * OmniHealth OS - Web Audio API Medical Synthesizer
 * Generates realistic hospital audio alerts, synchronized ECG heart beeps,
 * pulse oximeter frequency modulated tones, and emergency sirens directly in-browser
 * with zero audio files or external network requests.
 */

class MedicalAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.activeAlarmOscillator = null;
    this.isAlarmRunning = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.isMuted = !!muted;
    if (this.isMuted) {
      this.stopAlarm();
    }
  }

  /**
   * Generates a realistic pulse oximeter / ECG monitor QRS beep tone.
   * Pitch varies dynamically with oxygen saturation (SpO2):
   * Higher SpO2 (98-100%) = higher pitch (880 Hz / A5)
   * Lower SpO2 (85-90%) = deeper pitch (440 Hz / A4 or lower)
   */
  playECGBeep(spo2 = 98) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Pitch calculation: base 400Hz + scaled by SpO2 percentage
      const clampedSpo2 = Math.max(70, Math.min(100, spo2));
      const freq = 350 + Math.pow((clampedSpo2 - 70) / 30, 2) * 550; // 350Hz up to 900Hz

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Fast acoustic envelope (sharp onset, quick decay: 80ms)
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.25, this.ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.085);
    } catch (e) {
      console.warn("Web Audio playECGBeep error:", e);
    }
  }

  /**
   * Generates a high-priority physiological limit warning alarm (e.g. Asystole / V-Fib / Severe Desat)
   */
  playHighPriorityAlarm() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // 3 rapid high-pitched beeps (IEC 60601-1-8 medical alarm pattern)
      const freqs = [976, 976, 976];
      freqs.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + i * 0.14;

        osc.type = "square";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
        gain.gain.linearRampToValueAtTime(0.001, startTime + 0.10);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.11);
      });
    } catch (e) {
      console.warn("playHighPriorityAlarm error:", e);
    }
  }

  /**
   * Emergency Code Blue hospital siren tone
   */
  startCodeBlueSiren() {
    if (this.isMuted || this.isAlarmRunning) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      this.isAlarmRunning = true;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);

      // Low frequency modulation (LFO) for undulating siren
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(2, this.ctx.currentTime); // 2 Hz sweep
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(250, this.ctx.currentTime);

      lfo.connect(osc.frequency);
      osc.connect(gain);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.connect(this.ctx.destination);

      osc.start();
      lfo.start();

      this.activeAlarmOscillator = { osc, lfo, gain };
    } catch (e) {
      console.warn("startCodeBlueSiren error:", e);
    }
  }

  stopAlarm() {
    if (this.activeAlarmOscillator) {
      try {
        this.activeAlarmOscillator.osc.stop();
        this.activeAlarmOscillator.lfo.stop();
        this.activeAlarmOscillator.gain.disconnect();
      } catch (e) {}
      this.activeAlarmOscillator = null;
    }
    this.isAlarmRunning = false;
  }

  /**
   * Subtle pleasant notification chime for completed labs, appointments, or prescriptions
   */
  playNotificationChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Two harmonic chime notes (C6 -> G6)
      [1046.50, 1567.98].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.12;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.5);
      });
    } catch (e) {
      console.warn("playNotificationChime error:", e);
    }
  }
}

const AudioService = new MedicalAudioSynthesizer();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AudioService };
}
