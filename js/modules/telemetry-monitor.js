/**
 * OmniHealth OS - 60FPS Multi-Parameter ICU Telemetry Monitor Simulator
 * Simulates high-precision physiological waveforms on HTML5 Canvas:
 * - Lead II Electrocardiogram (ECG) with P-Q-R-S-T morphology
 * - Plethysmogram (SpO2 / PPG) with dicrotic notch
 * - Arterial Blood Pressure (ABP) waveform with dicrotic notch
 * - Respiration CO2 (Capnography) waveform
 * Synchronized with Web Audio pulse tones, physiological alarms, and arrhythmia generators.
 */

const TelemetryMonitorModule = {
  canvas: null,
  ctx: null,
  animId: null,
  isRunning: false,
  sweepX: 0,
  speed: 2.2, // pixels per frame (approx 25 mm/s standard ECG paper speed)
  
  // Waveform buffer history for sweep line erase
  bufferLength: 800,
  
  // Current patient physiology
  params: {
    hr: 75,
    spo2: 98,
    sysBP: 120,
    diaBP: 80,
    map: 93,
    rr: 16,
    temp: 37.0,
    etco2: 38,
    arrhythmia: "NSR" // "NSR", "SINUS_TACH", "SINUS_BRADY", "VFIB", "VTACH", "ASYSTOLE"
  },

  // Internal phase counters
  ecgPhase: 0,
  ppgPhase: 0,
  abpPhase: 0,
  respPhase: 0,
  lastBeepTime: 0,

  init() {
    this.canvas = document.getElementById("telemetry-canvas");
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.bindEvents();
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());

    this.start();
  },

  bindEvents() {
    const arrhythmiaSelect = document.getElementById("telemetry-arrhythmia-select");
    if (arrhythmiaSelect) {
      arrhythmiaSelect.addEventListener("change", (e) => {
        this.setArrhythmia(e.target.value);
      });
    }

    const hrSlider = document.getElementById("telemetry-hr-slider");
    if (hrSlider) {
      hrSlider.addEventListener("input", (e) => {
        this.params.hr = parseInt(e.target.value, 10);
        this.updateParamDisplays();
      });
    }

    const spo2Slider = document.getElementById("telemetry-spo2-slider");
    if (spo2Slider) {
      spo2Slider.addEventListener("input", (e) => {
        this.params.spo2 = parseInt(e.target.value, 10);
        this.updateParamDisplays();
      });
    }

    const audioToggle = document.getElementById("telemetry-audio-toggle");
    if (audioToggle) {
      audioToggle.addEventListener("change", (e) => {
        if (typeof AudioService !== 'undefined') {
          AudioService.setMuted(!e.target.checked);
        }
      });
    }

    const patientSelect = document.getElementById("telemetry-patient-select");
    if (patientSelect && typeof Storage !== 'undefined') {
      const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);
      patientSelect.innerHTML = patients.map(p => `
        <option value="${p.id}">${p.firstName} ${p.lastName} (${p.ward || 'ICU'}) - ${p.status}</option>
      `).join('');

      patientSelect.addEventListener("change", (e) => {
        this.loadPatientTelemetry(e.target.value);
      });
    }
  },

  loadPatientTelemetry(patientId) {
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientId);
    if (!patient) return;

    if (patient.vitals) {
      this.params.hr = patient.vitals.heartRate || 75;
      this.params.spo2 = patient.vitals.oxygenSaturation || 98;
      this.params.sysBP = patient.vitals.bloodPressureSys || 120;
      this.params.diaBP = patient.vitals.bloodPressureDia || 80;
      this.params.map = Math.round(this.params.diaBP + (this.params.sysBP - this.params.diaBP) / 3);
      this.params.rr = patient.vitals.respiratoryRate || 16;
      this.params.temp = patient.vitals.temperatureC || 37.0;

      if (patient.status === 'Critical') {
        this.params.arrhythmia = "VTACH";
      } else {
        this.params.arrhythmia = "NSR";
      }

      const arrSelect = document.getElementById("telemetry-arrhythmia-select");
      if (arrSelect) arrSelect.value = this.params.arrhythmia;

      this.updateParamDisplays();
    }
  },

  setArrhythmia(type) {
    this.params.arrhythmia = type;
    if (type === "SINUS_TACH") this.params.hr = 135;
    else if (type === "SINUS_BRADY") this.params.hr = 42;
    else if (type === "VFIB") this.params.hr = 220;
    else if (type === "VTACH") this.params.hr = 160;
    else if (type === "ASYSTOLE") this.params.hr = 0;
    else if (type === "NSR") this.params.hr = 75;

    this.updateParamDisplays();

    if (type === "VFIB" || type === "ASYSTOLE") {
      Notify.showCriticalAlert({
        title: `ICU LETHAL ARRHYTHMIA: ${type}`,
        message: `Telemetry Channel 1 alarmed for ${type}. Check patient pulse, initiate CPR / Defibrillation protocol immediately.`,
        onConfirm: () => {}
      });
    }
  },

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = (rect.width || 800) * dpr;
    this.canvas.height = (rect.height || 420) * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.drawGrid();
  },

  drawGrid() {
    if (!this.ctx || !this.canvas) return;
    const w = this.canvas.getBoundingClientRect().width || 800;
    const h = this.canvas.getBoundingClientRect().height || 420;

    // Dark hospital monitor background
    this.ctx.fillStyle = "#050b14";
    this.ctx.fillRect(0, 0, w, h);

    // Green/gray grid lines (standard 1mm / 5mm medical grid)
    this.ctx.lineWidth = 0.5;
    this.ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";

    const gridSize = 20;
    this.ctx.beginPath();
    for (let x = 0; x < w; x += gridSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
    }
    for (let y = 0; y < h; y += gridSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
    }
    this.ctx.stroke();
  },

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.drawGrid();
    this.animate();
  },

  stop() {
    this.isRunning = false;
    if (this.animId) cancelAnimationFrame(this.animId);
  },

  animate() {
    if (!this.isRunning) return;

    const w = this.canvas.getBoundingClientRect().width || 800;
    const h = this.canvas.getBoundingClientRect().height || 420;

    // Compute channel vertical centerlines
    const channel1_Y = h * 0.20; // ECG Lead II (Green)
    const channel2_Y = h * 0.52; // Pleth SpO2 (Cyan)
    const channel3_Y = h * 0.82; // ABP Arterial (Red)

    const prevX = this.sweepX;
    this.sweepX += this.speed;

    if (this.sweepX >= w) {
      this.sweepX = 0;
    }

    // Erase beam front (sweep bar erase box 14px ahead)
    const eraseWidth = 16;
    this.ctx.fillStyle = "#050b14";
    this.ctx.fillRect(this.sweepX, 0, eraseWidth, h);

    // Re-draw grid lines in erase zone
    this.ctx.lineWidth = 0.5;
    this.ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
    this.ctx.beginPath();
    for (let gx = Math.floor(this.sweepX / 20) * 20; gx < this.sweepX + eraseWidth; gx += 20) {
      this.ctx.moveTo(gx, 0);
      this.ctx.lineTo(gx, h);
    }
    this.ctx.stroke();

    // 1. Calculate and Draw Lead II ECG Waveform (Green Phosphor #22c55e)
    const ecgVal = this.getECGSample();
    const ecgY = channel1_Y - ecgVal * 45;

    this.ctx.strokeStyle = "#22c55e";
    this.ctx.lineWidth = 2;
    this.ctx.shadowColor = "#22c55e";
    this.ctx.shadowBlur = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(prevX, this.lastEcgY !== undefined ? this.lastEcgY : ecgY);
    this.ctx.lineTo(this.sweepX, ecgY);
    this.ctx.stroke();
    this.lastEcgY = ecgY;

    // 2. Calculate and Draw SpO2 Pleth Waveform (Cyan #06b6d4)
    const ppgVal = this.getPPGSample();
    const ppgY = channel2_Y - ppgVal * 32;

    this.ctx.strokeStyle = "#06b6d4";
    this.ctx.lineWidth = 2;
    this.ctx.shadowColor = "#06b6d4";
    this.ctx.shadowBlur = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(prevX, this.lastPpgY !== undefined ? this.lastPpgY : ppgY);
    this.ctx.lineTo(this.sweepX, ppgY);
    this.ctx.stroke();
    this.lastPpgY = ppgY;

    // 3. Calculate and Draw Arterial Blood Pressure Waveform (Coral Red #ef4444)
    const abpVal = this.getABPSample();
    const abpY = channel3_Y - abpVal * 35;

    this.ctx.strokeStyle = "#ef4444";
    this.ctx.lineWidth = 2;
    this.ctx.shadowColor = "#ef4444";
    this.ctx.shadowBlur = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(prevX, this.lastAbpY !== undefined ? this.lastAbpY : abpY);
    this.ctx.lineTo(this.sweepX, abpY);
    this.ctx.stroke();
    this.lastAbpY = abpY;

    this.ctx.shadowBlur = 0; // Reset blur

    this.animId = requestAnimationFrame(() => this.animate());
  },

  /**
   * Mathematical Synthesis of Lead II Electrocardiogram
   * P-Wave, PR Segment, QRS Complex (Q negative dip, R huge sharp peak, S dip), ST Segment, T-Wave
   */
  getECGSample() {
    if (this.params.arrhythmia === "ASYSTOLE") {
      // Subtle baseline noise
      return (Math.random() - 0.5) * 0.04;
    }

    if (this.params.arrhythmia === "VFIB") {
      this.ecgPhase += 0.18;
      return (Math.sin(this.ecgPhase * 2.3) * 0.6 + Math.sin(this.ecgPhase * 4.7) * 0.4 + (Math.random() - 0.5) * 0.3);
    }

    if (this.params.arrhythmia === "VTACH") {
      this.ecgPhase += 0.22;
      const t = this.ecgPhase % (Math.PI * 2);
      return Math.sin(t) * 1.5 + Math.sin(t * 2) * 0.5;
    }

    // Normal Sinus Rhythm or Sinus Tachy/Brady
    const bps = (this.params.hr || 75) / 60; // Beats per second
    const phaseIncrement = (bps * Math.PI * 2) / 60; // 60 FPS
    this.ecgPhase += phaseIncrement;

    const t = this.ecgPhase % (Math.PI * 2); // Normalized beat cycle 0 to 2*PI

    let val = 0;

    // Baseline slight drift / respiration artifact
    val += Math.sin(this.ecgPhase * 0.08) * 0.03 + (Math.random() - 0.5) * 0.02;

    // P-Wave (Atrial Depolarization): roughly t in [0.2, 0.6]
    if (t >= 0.2 && t <= 0.6) {
      val += Math.sin((t - 0.2) / 0.4 * Math.PI) * 0.18;
    }
    // Q-Wave: brief negative dip around t = 0.85
    else if (t >= 0.82 && t < 0.90) {
      val -= Math.sin((t - 0.82) / 0.08 * Math.PI) * 0.15;
    }
    // R-Wave (Ventricular Depolarization): HUGE sharp positive spike around t in [0.90, 1.05]
    else if (t >= 0.90 && t <= 1.05) {
      const rProgress = (t - 0.90) / 0.15;
      val += Math.sin(rProgress * Math.PI) * 1.6;

      // Trigger Web Audio tone on R-wave peak once per cycle
      const now = performance.now();
      if (rProgress >= 0.45 && rProgress <= 0.55 && now - this.lastBeepTime > 350) {
        this.lastBeepTime = now;
        if (typeof AudioService !== 'undefined') {
          AudioService.playECGBeep(this.params.spo2);
        }
      }
    }
    // S-Wave: sharp negative dip around t in [1.05, 1.15]
    else if (t > 1.05 && t <= 1.18) {
      val -= Math.sin((t - 1.05) / 0.13 * Math.PI) * 0.35;
    }
    // T-Wave (Ventricular Repolarization): broad positive wave around t in [1.4, 2.1]
    else if (t >= 1.4 && t <= 2.1) {
      val += Math.sin((t - 1.4) / 0.7 * Math.PI) * 0.32;
    }

    return val;
  },

  /**
   * Plethysmogram (SpO2 / PPG Waveform)
   * Rapid systolic upstroke, dicrotic notch, diastolic decay
   */
  getPPGSample() {
    if (this.params.arrhythmia === "ASYSTOLE") return 0;

    const bps = (this.params.hr || 75) / 60;
    this.ppgPhase += (bps * Math.PI * 2) / 60;
    const t = (this.ppgPhase - 0.4) % (Math.PI * 2); // Slight delay behind ECG

    let val = 0;
    if (t >= 0 && t < Math.PI * 0.8) {
      // Systolic upstroke
      val = Math.sin(t / (Math.PI * 0.8) * Math.PI);
      // Add dicrotic notch
      if (t > Math.PI * 0.4) {
        val += Math.sin((t - Math.PI * 0.4) * 4) * 0.15;
      }
    }
    return Math.max(0, val);
  },

  /**
   * Arterial Blood Pressure (ABP) Waveform
   */
  getABPSample() {
    if (this.params.arrhythmia === "ASYSTOLE") return 0;

    const bps = (this.params.hr || 75) / 60;
    this.abpPhase += (bps * Math.PI * 2) / 60;
    const t = (this.abpPhase - 0.3) % (Math.PI * 2);

    let val = 0;
    if (t >= 0 && t < Math.PI) {
      val = Math.sin(t / Math.PI * Math.PI) * 1.2;
      // Dicrotic notch reflection
      if (t > Math.PI * 0.45) {
        val += Math.sin((t - Math.PI * 0.45) * 5) * 0.2;
      }
    }
    return Math.max(0, val);
  },

  updateParamDisplays() {
    const hrEl = document.getElementById("telemetry-readout-hr");
    const spo2El = document.getElementById("telemetry-readout-spo2");
    const bpEl = document.getElementById("telemetry-readout-bp");
    const mapEl = document.getElementById("telemetry-readout-map");
    const rrEl = document.getElementById("telemetry-readout-rr");
    const tempEl = document.getElementById("telemetry-readout-temp");

    if (hrEl) hrEl.textContent = this.params.hr;
    if (spo2El) spo2El.textContent = `${this.params.spo2}%`;
    if (bpEl) bpEl.textContent = `${this.params.sysBP}/${this.params.diaBP}`;
    if (mapEl) mapEl.textContent = `(${this.params.map})`;
    if (rrEl) rrEl.textContent = this.params.rr;
    if (tempEl) tempEl.textContent = `${this.params.temp}°C`;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TelemetryMonitorModule };
}
