/**
 * OmniHealth OS - Virtual Telehealth & Teleconsultation Suite
 * Features:
 * - Simulated Encrypted WebRTC Video Consultation Screen
 * - Canvas Camera Visual Diagnostic Filters (Standard, Derm / Skin Contrast, Thermal Simulation)
 * - Real-Time Automated Medical Transcription Engine Simulation
 * - In-Call Clinical Chat & Live Vitals Synchronization
 * - Shared Telemedicine Whiteboard
 */

const TelehealthModule = {
  isCallActive: false,
  callTimerInterval: null,
  callDurationSeconds: 0,
  activeFilter: "standard",
  transcriptionIndex: 0,

  mockTranscriptLines: [
    { speaker: "Dr. Sarah Jenkins", text: "Good morning! I can hear you clearly. How have you been feeling since we adjusted your Lisinopril dose?" },
    { speaker: "Patient (Eleanor Vance)", text: "Good morning Doctor. The chest tightness has improved, but I noticed a slight dry cough in the evenings." },
    { speaker: "Dr. Sarah Jenkins", text: "That is a known class effect of ACE inhibitors. Let's monitor your blood pressure and kidney labs; if it persists, we can switch you to an ARB like Losartan." },
    { speaker: "Patient (Eleanor Vance)", text: "That sounds good. I've also been checking my blood pressure daily as instructed." },
    { speaker: "Dr. Sarah Jenkins", text: "Excellent. I see your live vitals streaming into my chart right now at 138/88 mmHg. That is a noticeable improvement." },
    { speaker: "Dr. Sarah Jenkins", text: "I will renew your 90-day Atorvastatin and send the electronic prescription directly to your preferred pharmacy." }
  ],

  init() {
    this.bindEvents();
    this.renderVideoFeed();
  },

  bindEvents() {
    const startCallBtn = document.getElementById("telehealth-start-btn");
    const endCallBtn = document.getElementById("telehealth-end-btn");
    const muteBtn = document.getElementById("telehealth-mute-btn");
    const filterSelect = document.getElementById("telehealth-filter-select");
    const chatSendBtn = document.getElementById("telehealth-chat-send");
    const chatInput = document.getElementById("telehealth-chat-input");

    if (startCallBtn) startCallBtn.addEventListener("click", () => this.startCall());
    if (endCallBtn) endCallBtn.addEventListener("click", () => this.endCall());
    if (filterSelect) {
      filterSelect.addEventListener("change", (e) => {
        this.activeFilter = e.target.value;
        this.renderVideoFeed();
      });
    }

    if (chatSendBtn && chatInput) {
      chatSendBtn.addEventListener("click", () => this.sendChatMessage());
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.sendChatMessage();
      });
    }
  },

  startCall() {
    this.isCallActive = true;
    this.callDurationSeconds = 0;
    this.transcriptionIndex = 0;

    const startBtn = document.getElementById("telehealth-start-btn");
    const endBtn = document.getElementById("telehealth-end-btn");
    const statusEl = document.getElementById("telehealth-call-status");

    if (startBtn) startBtn.style.display = "none";
    if (endBtn) endBtn.style.display = "inline-flex";
    if (statusEl) {
      statusEl.textContent = "CONNECTED (End-to-End Encrypted)";
      statusEl.className = "badge badge-success animate-pulse";
    }

    // Start timer
    this.callTimerInterval = setInterval(() => {
      this.callDurationSeconds++;
      const mins = Math.floor(this.callDurationSeconds / 60).toString().padStart(2, '0');
      const secs = (this.callDurationSeconds % 60).toString().padStart(2, '0');
      const timerEl = document.getElementById("telehealth-call-timer");
      if (timerEl) timerEl.textContent = `${mins}:${secs}`;

      // Simulate real-time speech transcription every 8 seconds
      if (this.callDurationSeconds % 8 === 0 && this.transcriptionIndex < this.mockTranscriptLines.length) {
        this.appendTranscription(this.mockTranscriptLines[this.transcriptionIndex]);
        this.transcriptionIndex++;
      }
    }, 1000);

    Storage.logAuditEvent("Telehealth Provider", "TELEHEALTH_SESSION_STARTED", "Session #TH-9021", "Secure virtual video encounter commenced.");

    Notify.showToast({
      title: "Telehealth Room Connected",
      message: "HIPAA-compliant audio/video stream established with patient.",
      type: "success"
    });

    this.renderVideoFeed();
  },

  endCall() {
    this.isCallActive = false;
    if (this.callTimerInterval) clearInterval(this.callTimerInterval);

    const startBtn = document.getElementById("telehealth-start-btn");
    const endBtn = document.getElementById("telehealth-end-btn");
    const statusEl = document.getElementById("telehealth-call-status");

    if (startBtn) startBtn.style.display = "inline-flex";
    if (endBtn) endBtn.style.display = "none";
    if (statusEl) {
      statusEl.textContent = "DISCONNECTED";
      statusEl.className = "badge badge-secondary";
    }

    Storage.logAuditEvent("Telehealth Provider", "TELEHEALTH_SESSION_ENDED", "Session #TH-9021", `Session concluded. Duration: ${this.callDurationSeconds}s`);

    Notify.showToast({
      title: "Consultation Concluded",
      message: `Encounter duration: ${Math.floor(this.callDurationSeconds / 60)}m ${this.callDurationSeconds % 60}s. Clinical transcript saved.`,
      type: "info"
    });

    this.renderVideoFeed();
  },

  renderVideoFeed() {
    const canvas = document.getElementById("telehealth-video-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width || 640;
    const h = canvas.height || 380;

    ctx.clearRect(0, 0, w, h);

    if (!this.isCallActive) {
      // Standby screen
      ctx.fillStyle = "#090d16";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#64748b";
      ctx.font = "14px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("📷 Virtual Camera Standby. Click 'Launch Consultation' to begin.", w / 2, h / 2);
      return;
    }

    // Active Simulated Video Stream
    ctx.fillStyle = "#0c1322";
    ctx.fillRect(0, 0, w, h);

    // Apply Diagnostic Visual Filter
    if (this.activeFilter === "thermal") {
      const grad = ctx.createRadialGradient(w / 2, h / 2 - 20, 30, w / 2, h / 2, 180);
      grad.addColorStop(0, "#ef4444"); // High temp core
      grad.addColorStop(0.4, "#f59e0b");
      grad.addColorStop(0.8, "#3b82f6");
      grad.addColorStop(1, "#1e1b4b");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(w / 2, h / 2 - 10, 110, 140, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.activeFilter === "derm_contrast") {
      ctx.fillStyle = "#5c4033";
      ctx.beginPath();
      ctx.ellipse(w / 2, h / 2 - 10, 100, 130, 0, 0, Math.PI * 2);
      ctx.fill();
      // High contrast derm pigment spot
      ctx.fillStyle = "#1c0d02";
      ctx.beginPath();
      ctx.arc(w / 2 + 25, h / 2 - 30, 8, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Standard video portrait simulation
      const faceGrad = ctx.createRadialGradient(w / 2, h / 2 - 20, 20, w / 2, h / 2, 120);
      faceGrad.addColorStop(0, "#fcd34d");
      faceGrad.addColorStop(0.8, "#d97706");
      faceGrad.addColorStop(1, "#92400e");
      ctx.fillStyle = faceGrad;
      ctx.beginPath();
      ctx.ellipse(w / 2, h / 2 - 20, 85, 110, 0, 0, Math.PI * 2);
      ctx.fill();

      // Shoulders
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.ellipse(w / 2, h + 40, 180, 90, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Overlays (Doctor PIP, Timestamp, Encryption Lock)
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.fillRect(w - 140, h - 110, 125, 95);
    ctx.strokeStyle = "#0284c7";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(w - 140, h - 110, 125, 95);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 10px monospace";
    ctx.textAlign = "left";
    ctx.fillText("👨‍⚕️ Dr. S. Jenkins", w - 132, h - 94);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "9px monospace";
    ctx.fillText("HD 1080p • 60 FPS", w - 132, h - 22);

    // Top HUD
    ctx.fillStyle = "#22c55e";
    ctx.fillText("🔒 256-BIT TLS ENCRYPTED", 16, 24);
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(`FILTER: ${this.activeFilter.toUpperCase()}`, 16, 40);
  },

  appendTranscription({ speaker, text }) {
    const container = document.getElementById("telehealth-transcript-box");
    if (!container) return;

    const line = document.createElement("div");
    line.className = "transcript-line animate-slide-in";
    line.innerHTML = `
      <span class="transcript-speaker ${speaker.includes('Dr.') ? 'speaker-doc' : 'speaker-patient'}">${speaker}:</span>
      <span class="transcript-text">${text}</span>
    `;
    container.appendChild(line);
    container.scrollTop = container.scrollHeight;
  },

  sendChatMessage() {
    const input = document.getElementById("telehealth-chat-input");
    const container = document.getElementById("telehealth-chat-messages");
    if (!input || !container) return;

    const msg = input.value.trim();
    if (!msg) return;

    const msgEl = document.createElement("div");
    msgEl.className = "chat-msg chat-msg-self animate-pop";
    msgEl.innerHTML = `
      <div class="chat-sender">You (Physician)</div>
      <div class="chat-text">${msg}</div>
      <div class="chat-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
    input.value = "";
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TelehealthModule };
}
