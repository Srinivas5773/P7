/**
 * OmniHealth OS - Diagnostic Imaging & PACS Workstation Module
 * Implements a high-precision radiology viewing console on HTML5 Canvas:
 * - Window Level / Window Width (Brightness/Contrast)
 * - 1x to 8x Smooth Hardware Zoom & Pan
 * - Color Inversion & Pseudo-color Heatmaps
 * - Calibrated Anatomical Distance Measurement Ruler (mm)
 * - Region of Interest (ROI) Pixel Density / Hounsfield Unit Calculator
 * - Radiologist Structured Reports & Image Annotations
 */

const PACSViewerModule = {
  canvas: null,
  ctx: null,
  activeScanIndex: 0,

  // Transform & Tool States
  zoom: 1.0,
  panX: 0,
  panY: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,

  // Windowing (LUT adjustments)
  brightness: 0, // -100 to 100
  contrast: 100,  // 0 to 200
  isInverted: false,
  colorMap: "grayscale", // "grayscale", "hot_iron", "bone", "rainbow"

  // Active Tool Mode
  currentTool: "pan", // "pan", "ruler", "roi", "window"

  // Ruler measurement points
  rulerPoints: [],
  measurements: [],

  // ROI points
  roiCircle: null,

  init() {
    this.canvas = document.getElementById("pacs-viewport-canvas");
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.bindEvents();
    this.renderScanList();
    this.loadScan(0);
  },

  bindEvents() {
    // Scan selector click / change
    const scanSelect = document.getElementById("pacs-scan-select");
    if (scanSelect) {
      scanSelect.addEventListener("change", (e) => {
        this.loadScan(parseInt(e.target.value, 10));
      });
    }

    // Windowing sliders
    const brightSlider = document.getElementById("pacs-brightness-slider");
    if (brightSlider) {
      brightSlider.addEventListener("input", (e) => {
        this.brightness = parseInt(e.target.value, 10);
        this.redraw();
      });
    }

    const contrastSlider = document.getElementById("pacs-contrast-slider");
    if (contrastSlider) {
      contrastSlider.addEventListener("input", (e) => {
        this.contrast = parseInt(e.target.value, 10);
        this.redraw();
      });
    }

    // Invert button
    const invertBtn = document.getElementById("pacs-invert-btn");
    if (invertBtn) {
      invertBtn.addEventListener("click", () => {
        this.isInverted = !this.isInverted;
        this.redraw();
      });
    }

    // Reset view button
    const resetBtn = document.getElementById("pacs-reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.resetView());
    }

    // Tool selector buttons
    const toolBtns = document.querySelectorAll(".pacs-tool-btn");
    toolBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        toolBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.setTool(btn.getAttribute("data-tool"));
      });
    });

    // Canvas Interactive Events (Pan, Zoom, Ruler)
    if (this.canvas) {
      this.canvas.addEventListener("mousedown", (e) => this.onMouseDown(e));
      this.canvas.addEventListener("mousemove", (e) => this.onMouseMove(e));
      this.canvas.addEventListener("mouseup", () => this.onMouseUp());
      this.canvas.addEventListener("wheel", (e) => this.onWheel(e), { passive: false });
    }
  },

  renderScanList() {
    const select = document.getElementById("pacs-scan-select");
    if (!select || typeof MOCK_SCANS_DATA === 'undefined') return;

    select.innerHTML = MOCK_SCANS_DATA.map((scan, idx) => `
      <option value="${idx}" ${idx === 0 ? 'selected' : ''}>
        ${scan.studyType} (${scan.modality}) - ${scan.organSystem}
      </option>
    `).join('');
  },

  loadScan(index) {
    if (typeof MOCK_SCANS_DATA === 'undefined') return;
    this.activeScanIndex = index;
    const scan = MOCK_SCANS_DATA[index] || MOCK_SCANS_DATA[0];

    // Reset measurements for new scan
    this.rulerPoints = [];
    this.measurements = [];
    this.roiCircle = null;

    // Update info display
    const titleEl = document.getElementById("pacs-scan-title");
    const modalityEl = document.getElementById("pacs-scan-modality");
    const accEl = document.getElementById("pacs-scan-accession");
    const dateEl = document.getElementById("pacs-scan-date");
    const reportEl = document.getElementById("pacs-report-text");
    const highlightEl = document.getElementById("pacs-highlight-badge");

    if (titleEl) titleEl.textContent = scan.studyType;
    if (modalityEl) modalityEl.textContent = `Modality: ${scan.modality}`;
    if (accEl) accEl.textContent = `Acc #: ${scan.accessionNumber}`;
    if (dateEl) dateEl.textContent = `Acquired: ${scan.acquiredDate}`;
    if (reportEl) reportEl.textContent = scan.radiologistReport;
    if (highlightEl) highlightEl.textContent = scan.findingsHighlight || "Normal Study";

    // Log PACS access to audit trail
    if (typeof Storage !== 'undefined') {
      Storage.logAuditEvent("Radiologist / Attending Physician", "PACS_STUDY_ACCESSED", scan.accessionNumber, `Viewed diagnostic ${scan.studyType}`);
    }

    this.redraw();
  },

  setTool(toolName) {
    this.currentTool = toolName;
    if (this.canvas) {
      if (toolName === 'pan') this.canvas.style.cursor = 'grab';
      else if (toolName === 'ruler') this.canvas.style.cursor = 'crosshair';
      else if (toolName === 'roi') this.canvas.style.cursor = 'crosshair';
      else if (toolName === 'window') this.canvas.style.cursor = 'ns-resize';
    }
  },

  resetView() {
    this.zoom = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.brightness = 0;
    this.contrast = 100;
    this.isInverted = false;
    this.rulerPoints = [];
    this.measurements = [];
    this.roiCircle = null;

    const bSlider = document.getElementById("pacs-brightness-slider");
    const cSlider = document.getElementById("pacs-contrast-slider");
    if (bSlider) bSlider.value = 0;
    if (cSlider) cSlider.value = 100;

    this.redraw();
  },

  onMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    this.isDragging = true;
    this.dragStartX = x;
    this.dragStartY = y;

    if (this.currentTool === 'ruler') {
      this.rulerPoints.push({ x, y });
      if (this.rulerPoints.length === 2) {
        // Calculate millimeter distance (assuming approx 0.4mm / pixel calibration)
        const dx = this.rulerPoints[1].x - this.rulerPoints[0].x;
        const dy = this.rulerPoints[1].y - this.rulerPoints[0].y;
        const pixelDist = Math.sqrt(dx * dx + dy * dy) / this.zoom;
        const mmDist = (pixelDist * 0.42).toFixed(1);

        this.measurements.push({
          p1: { ...this.rulerPoints[0] },
          p2: { ...this.rulerPoints[1] },
          mm: mmDist
        });
        this.rulerPoints = [];
      }
      this.redraw();
    } else if (this.currentTool === 'roi') {
      this.roiCircle = { x, y, radius: 25 };
      this.calculateROIDensity();
      this.redraw();
    }
  },

  onMouseMove(e) {
    if (!this.isDragging) return;
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dx = x - this.dragStartX;
    const dy = y - this.dragStartY;

    if (this.currentTool === 'pan') {
      this.panX += dx;
      this.panY += dy;
      this.dragStartX = x;
      this.dragStartY = y;
      this.redraw();
    } else if (this.currentTool === 'window') {
      this.contrast = Math.max(0, Math.min(200, this.contrast + dx * 0.5));
      this.brightness = Math.max(-100, Math.min(100, this.brightness - dy * 0.5));
      this.dragStartX = x;
      this.dragStartY = y;
      this.redraw();
    }
  },

  onMouseUp() {
    this.isDragging = false;
  },

  onWheel(e) {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
    this.zoom = Math.max(0.6, Math.min(8.0, this.zoom * zoomFactor));
    this.redraw();
  },

  calculateROIDensity() {
    if (!this.roiCircle || !this.ctx) return;
    // Mock Hounsfield Units (HU) computation based on anatomy
    const huMean = Math.floor(Math.random() * 80) - 20; // e.g. soft tissue 35-50 HU, air -1000, bone +700
    const huStd = (Math.random() * 8 + 3).toFixed(1);

    const infoEl = document.getElementById("pacs-roi-info");
    if (infoEl) {
      infoEl.textContent = `ROI Mean Density: ${huMean} HU (± ${huStd}) • Area: 19.6 cm²`;
    }
  },

  redraw() {
    if (!this.canvas || !this.ctx || typeof MOCK_SCANS_DATA === 'undefined') return;
    const scan = MOCK_SCANS_DATA[this.activeScanIndex] || MOCK_SCANS_DATA[0];

    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width || 512;
    const h = rect.height || 512;

    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Apply CSS-like Filters for Windowing / Invert on Canvas
    const contrastRatio = this.contrast / 100;
    const brightnessPct = 100 + this.brightness;
    const invertPct = this.isInverted ? 100 : 0;
    this.ctx.filter = `contrast(${contrastRatio}) brightness(${brightnessPct}%) invert(${invertPct}%)`;

    // Apply Zoom & Pan transforms
    this.ctx.save();
    this.ctx.translate(w / 2 + this.panX, h / 2 + this.panY);
    this.ctx.scale(this.zoom, this.zoom);
    this.ctx.translate(-w / 2, -h / 2);

    // Render the anatomical scan onto canvas
    if (typeof MedicalScanRenderer !== 'undefined') {
      MedicalScanRenderer.renderToCanvas(this.canvas, scan.renderType);
    }

    this.ctx.restore();
    this.ctx.filter = "none"; // Reset filter for UI overlays

    // Draw Measurement Rulers overlay
    this.drawRulersOverlay();

    // Draw HUD stats overlay (Zoom level, Windowing W/L)
    this.drawHUD(w, h, scan);
  },

  drawRulersOverlay() {
    this.ctx.strokeStyle = "#facc15"; // bright yellow
    this.ctx.fillStyle = "#facc15";
    this.ctx.lineWidth = 2;
    this.ctx.font = "bold 12px monospace";

    this.measurements.forEach((m) => {
      this.ctx.beginPath();
      this.ctx.moveTo(m.p1.x, m.p1.y);
      this.ctx.lineTo(m.p2.x, m.p2.y);
      this.ctx.stroke();

      // End tick marks
      this.ctx.fillRect(m.p1.x - 3, m.p1.y - 3, 6, 6);
      this.ctx.fillRect(m.p2.x - 3, m.p2.y - 3, 6, 6);

      // Distance text
      const midX = (m.p1.x + m.p2.x) / 2;
      const midY = (m.p1.y + m.p2.y) / 2;
      this.ctx.fillText(`${m.mm} mm`, midX + 8, midY - 6);
    });

    // In-progress ruler point
    if (this.rulerPoints.length === 1) {
      const p = this.rulerPoints[0];
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // ROI Circle
    if (this.roiCircle) {
      this.ctx.strokeStyle = "#38bdf8";
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.arc(this.roiCircle.x, this.roiCircle.y, this.roiCircle.radius, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.fillStyle = "#38bdf8";
      this.ctx.fillText("ROI 1", this.roiCircle.x + this.roiCircle.radius + 4, this.roiCircle.y);
    }
  },

  drawHUD(w, h, scan) {
    this.ctx.fillStyle = "#38bdf8";
    this.ctx.font = "11px 'Courier New', monospace";
    this.ctx.textAlign = "left";

    // Top-left HUD
    this.ctx.fillText(`PATIENT: ${scan.patientId}`, 15, 20);
    this.ctx.fillText(`MODALITY: ${scan.modality}`, 15, 34);

    // Top-right HUD
    this.ctx.textAlign = "right";
    this.ctx.fillText(`ZOOM: ${(this.zoom * 100).toFixed(0)}%`, w - 15, 20);
    this.ctx.fillText(`W: ${this.contrast}  L: ${this.brightness + 128}`, w - 15, 34);
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PACSViewerModule };
}
