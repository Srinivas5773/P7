/**
 * OmniHealth OS - Mock Medical Scans & Procedural Radiography Engine
 * Generates realistic procedural medical images (Chest X-Ray, Brain CT, Knee MRI,
 * ICU Pulmonary Edema, Pediatric Pneumonia) directly onto HTML5 Canvas elements
 * for the interactive PACS workstation.
 */

const MOCK_SCANS_DATA = [
  {
    id: "SCAN-CXR-01",
    patientId: "PAT-1001",
    modality: "CR (Computed Radiography)",
    studyType: "Chest X-Ray PA & Lateral",
    accessionNumber: "ACC-2026-9901",
    acquiredDate: "2026-08-26 15:10:00",
    dimensions: { width: 512, height: 512 },
    windowCenter: 128,
    windowWidth: 256,
    organSystem: "Thorax / Cardiac",
    renderType: "chest_xray",
    radiologistReport: "Heart size enlarged (cardiothoracic ratio > 0.52). No pulmonary consolidation, pneumothorax, or large pleural effusion. Normal hilar vascularity.",
    findingsHighlight: "Cardiomegaly"
  },
  {
    id: "SCAN-CT-02",
    patientId: "PAT-1002",
    modality: "CT (Computed Tomography)",
    studyType: "Head / Brain CT Non-Contrast",
    accessionNumber: "ACC-2026-9902",
    acquiredDate: "2026-08-28 10:20:00",
    dimensions: { width: 512, height: 512 },
    windowCenter: 140,
    windowWidth: 180,
    organSystem: "Neurocranium",
    renderType: "brain_ct",
    radiologistReport: "Normal brain parenchyma with preserved gray-white differentiation. No acute intracranial hemorrhage or midline shift. Ventricles symmetrical.",
    findingsHighlight: "Unremarkable non-contrast Brain CT"
  },
  {
    id: "SCAN-PEDS-03",
    patientId: "PAT-1003",
    modality: "DX (Digital Radiography)",
    studyType: "Pediatric Chest X-Ray AP",
    accessionNumber: "ACC-2026-9903",
    acquiredDate: "2026-08-28 16:25:00",
    dimensions: { width: 512, height: 512 },
    windowCenter: 120,
    windowWidth: 240,
    organSystem: "Pediatric Thorax",
    renderType: "pediatric_pneumonia",
    radiologistReport: "Dense alveolar consolidation in the right middle and lower lung zones compatible with acute bacterial lobar pneumonia. Heart size normal.",
    findingsHighlight: "Right Lower Lobe Pneumonia"
  },
  {
    id: "SCAN-ICU-04",
    patientId: "PAT-1004",
    modality: "CR (Portable Radiography)",
    studyType: "Portable ICU Chest X-Ray",
    accessionNumber: "ACC-2026-9904",
    acquiredDate: "2026-08-27 04:15:00",
    dimensions: { width: 512, height: 512 },
    windowCenter: 130,
    windowWidth: 260,
    organSystem: "Thorax / ICU",
    renderType: "icu_chest_edema",
    radiologistReport: "Bilateral diffuse interstitial and alveolar opacities with perihilar batwing pattern. Endotracheal tube and central line tips in satisfactory anatomical position.",
    findingsHighlight: "Pulmonary Interstitial Edema / ARDS"
  },
  {
    id: "SCAN-MRI-05",
    patientId: "PAT-1005",
    modality: "MR (Magnetic Resonance)",
    studyType: "Knee MRI Sagittal T2 / Proton Density",
    accessionNumber: "ACC-2026-9905",
    acquiredDate: "2026-08-22 14:00:00",
    dimensions: { width: 512, height: 512 },
    windowCenter: 135,
    windowWidth: 200,
    organSystem: "Musculoskeletal (Right Knee)",
    renderType: "knee_mri",
    radiologistReport: "Complete discontinuity of the mid-substance fibers of the anterior cruciate ligament with surrounding hyperintense fluid signal. Complex tear of medial meniscus.",
    findingsHighlight: "ACL Complete Rupture & Meniscal Tear"
  }
];

/**
 * Procedural Medical Scan Drawing Utilities
 * Renders anatomical structures into HTML5 Canvas with realistic radiopacity gradients
 */
const MedicalScanRenderer = {
  renderToCanvas(canvas, scanType, options = {}) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Reset transform & clear
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#05070a";
    ctx.fillRect(0, 0, width, height);

    if (scanType === 'chest_xray') {
      this.drawChestXRay(ctx, width, height, false);
    } else if (scanType === 'pediatric_pneumonia') {
      this.drawChestXRay(ctx, width, height, true);
    } else if (scanType === 'icu_chest_edema') {
      this.drawICUChest(ctx, width, height);
    } else if (scanType === 'brain_ct') {
      this.drawBrainCT(ctx, width, height);
    } else if (scanType === 'knee_mri') {
      this.drawKneeMRI(ctx, width, height);
    } else {
      this.drawChestXRay(ctx, width, height, false);
    }
  },

  drawChestXRay(ctx, w, h, isPneumonia) {
    const cx = w / 2;
    const cy = h / 2;

    // Background lung field radiolucency (dark gray/black)
    ctx.fillStyle = "#0a0d14";
    ctx.fillRect(0, 0, w, h);

    // Soft tissue outline
    const grad = ctx.createRadialGradient(cx, cy, 50, cx, cy, w * 0.48);
    grad.addColorStop(0, "rgba(50, 55, 65, 0.4)");
    grad.addColorStop(0.8, "rgba(80, 85, 95, 0.6)");
    grad.addColorStop(1, "rgba(20, 22, 28, 0.9)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 20, w * 0.42, h * 0.46, 0, 0, Math.PI * 2);
    ctx.fill();

    // Lung fields (Left & Right - dark radiolucent air spaces)
    ctx.fillStyle = "#080a0f";
    // Left lung field (anatomical right on screen)
    ctx.beginPath();
    ctx.ellipse(cx - w * 0.20, cy + 10, w * 0.16, h * 0.32, -0.05, 0, Math.PI * 2);
    ctx.fill();
    // Right lung field (anatomical left on screen)
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.20, cy + 10, w * 0.16, h * 0.32, 0.05, 0, Math.PI * 2);
    ctx.fill();

    // Spine & Mediastinum (Radio-opaque white column)
    const spineGrad = ctx.createLinearGradient(cx - 30, 0, cx + 30, 0);
    spineGrad.addColorStop(0, "rgba(180, 185, 195, 0.1)");
    spineGrad.addColorStop(0.5, "rgba(220, 225, 235, 0.7)");
    spineGrad.addColorStop(1, "rgba(180, 185, 195, 0.1)");
    ctx.fillStyle = spineGrad;
    ctx.fillRect(cx - 24, h * 0.08, 48, h * 0.85);

    // Cardiac Silhouette (Heart shadow)
    ctx.fillStyle = "rgba(210, 215, 225, 0.75)";
    ctx.beginPath();
    ctx.moveTo(cx - 20, cy - 60);
    ctx.bezierCurveTo(cx - 10, cy - 30, cx + 80, cy, cx + 90, cy + 70);
    ctx.bezierCurveTo(cx + 90, cy + 110, cx + 20, cy + 130, cx - 40, cy + 130);
    ctx.bezierCurveTo(cx - 70, cy + 130, cx - 80, cy + 80, cx - 60, cy + 40);
    ctx.closePath();
    ctx.fill();

    // Diaphragm arches (Left & Right hemidiaphragms)
    ctx.fillStyle = "rgba(190, 195, 205, 0.85)";
    ctx.beginPath();
    // Anatomical right (screen left)
    ctx.moveTo(cx - w * 0.40, cy + h * 0.38);
    ctx.quadraticCurveTo(cx - w * 0.22, cy + h * 0.22, cx - 20, cy + h * 0.28);
    ctx.lineTo(cx - 20, h);
    ctx.lineTo(cx - w * 0.40, h);
    ctx.closePath();
    ctx.fill();

    // Anatomical left (screen right)
    ctx.beginPath();
    ctx.moveTo(cx + 20, cy + h * 0.28);
    ctx.quadraticCurveTo(cx + w * 0.22, cy + h * 0.26, cx + w * 0.40, cy + h * 0.40);
    ctx.lineTo(cx + w * 0.40, h);
    ctx.lineTo(cx + 20, h);
    ctx.closePath();
    ctx.fill();

    // Clavicles (collar bones)
    ctx.strokeStyle = "rgba(230, 235, 245, 0.7)";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    // Left clavicle
    ctx.beginPath();
    ctx.moveTo(cx - 15, h * 0.16);
    ctx.quadraticCurveTo(cx - w * 0.22, h * 0.13, cx - w * 0.38, h * 0.17);
    ctx.stroke();
    // Right clavicle
    ctx.beginPath();
    ctx.moveTo(cx + 15, h * 0.16);
    ctx.quadraticCurveTo(cx + w * 0.22, h * 0.13, cx + w * 0.38, h * 0.17);
    ctx.stroke();

    // Rib cage arches
    ctx.strokeStyle = "rgba(190, 195, 205, 0.35)";
    ctx.lineWidth = 6;
    for (let i = 0; i < 7; i++) {
      const yOffset = h * 0.22 + i * (h * 0.08);
      // Left ribs
      ctx.beginPath();
      ctx.moveTo(cx - 20, yOffset - 10);
      ctx.quadraticCurveTo(cx - w * 0.38, yOffset + 10, cx - 25, yOffset + 35);
      ctx.stroke();
      // Right ribs
      ctx.beginPath();
      ctx.moveTo(cx + 20, yOffset - 10);
      ctx.quadraticCurveTo(cx + w * 0.38, yOffset + 10, cx + 25, yOffset + 35);
      ctx.stroke();
    }

    // If pneumonia, draw dense opacity in right lower lobe (screen left)
    if (isPneumonia) {
      const pneuGrad = ctx.createRadialGradient(cx - w * 0.20, cy + h * 0.18, 10, cx - w * 0.20, cy + h * 0.18, 65);
      pneuGrad.addColorStop(0, "rgba(240, 240, 245, 0.85)");
      pneuGrad.addColorStop(0.6, "rgba(200, 210, 220, 0.6)");
      pneuGrad.addColorStop(1, "rgba(200, 210, 220, 0)");
      ctx.fillStyle = pneuGrad;
      ctx.beginPath();
      ctx.ellipse(cx - w * 0.20, cy + h * 0.18, 60, 45, 0.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Anatomical orientation markers 'R' and 'L'
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 16px 'Courier New', monospace";
    ctx.fillText("R", 24, 36);
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("L", w - 36, 36);
    ctx.font = "11px 'Courier New', monospace";
    ctx.fillText("OMNI-RAD PA UPRIGHT", 24, h - 20);
  },

  drawBrainCT(ctx, w, h) {
    const cx = w / 2;
    const cy = h / 2;
    const radius = w * 0.38;

    // Deep black background
    ctx.fillStyle = "#020305";
    ctx.fillRect(0, 0, w, h);

    // Calvarium / Skull bone (Hyperdense bright white ring)
    ctx.fillStyle = "rgba(240, 245, 255, 0.95)";
    ctx.beginPath();
    ctx.ellipse(cx, cy, radius, radius * 1.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Subdural / Brain space inside skull
    ctx.fillStyle = "#22252c";
    ctx.beginPath();
    ctx.ellipse(cx, cy, radius - 14, (radius - 14) * 1.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Brain parenchyma (Cerebral hemispheres)
    const brainGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, radius - 20);
    brainGrad.addColorStop(0, "#4a4f5d");
    brainGrad.addColorStop(0.7, "#3a3e49");
    brainGrad.addColorStop(1, "#282c35");
    ctx.fillStyle = brainGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, radius - 16, (radius - 16) * 1.14, 0, 0, Math.PI * 2);
    ctx.fill();

    // Falx Cerebri (Midline fissure)
    ctx.strokeStyle = "rgba(180, 190, 205, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy - (radius - 20) * 1.1);
    ctx.lineTo(cx, cy + (radius - 20) * 1.1);
    ctx.stroke();

    // Lateral Ventricles (Hypodense CSF butterfly/crescent shapes)
    ctx.fillStyle = "#0a0c10"; // dark CSF
    // Left ventricle
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy - 40);
    ctx.bezierCurveTo(cx - 32, cy - 20, cx - 35, cy + 15, cx - 10, cy + 30);
    ctx.bezierCurveTo(cx - 16, cy + 10, cx - 18, cy - 10, cx - 8, cy - 40);
    ctx.fill();

    // Right ventricle
    ctx.beginPath();
    ctx.moveTo(cx + 8, cy - 40);
    ctx.bezierCurveTo(cx + 32, cy - 20, cx + 35, cy + 15, cx + 10, cy + 30);
    ctx.bezierCurveTo(cx + 16, cy + 10, cx + 18, cy - 10, cx + 8, cy - 40);
    ctx.fill();

    // Sulcal and gyral cortical markings
    ctx.strokeStyle = "rgba(20, 25, 35, 0.5)";
    ctx.lineWidth = 1.5;
    for (let a = 0; a < Math.PI * 2; a += 0.25) {
      const rx = cx + Math.cos(a) * (radius - 28);
      const ry = cy + Math.sin(a) * (radius - 28) * 1.1;
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx - Math.cos(a) * 18, ry - Math.sin(a) * 18);
      ctx.stroke();
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 16px 'Courier New', monospace";
    ctx.fillText("R", 24, 36);
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("L", w - 36, 36);
    ctx.font = "11px 'Courier New', monospace";
    ctx.fillText("OMNI-CT BRAIN AXIAL 5mm", 24, h - 20);
  },

  drawICUChest(ctx, w, h) {
    this.drawChestXRay(ctx, w, h, false);
    const cx = w / 2;
    const cy = h / 2;

    // Diffuse batwing pulmonary edema
    const edemaGrad = ctx.createRadialGradient(cx, cy + 20, 30, cx, cy + 20, w * 0.35);
    edemaGrad.addColorStop(0, "rgba(235, 240, 250, 0.7)");
    edemaGrad.addColorStop(0.5, "rgba(180, 195, 215, 0.45)");
    edemaGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = edemaGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 20, w * 0.34, h * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // Endotracheal Tube (Radiopaque line down trachea)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx, h * 0.05);
    ctx.lineTo(cx + 2, h * 0.28);
    ctx.stroke();
    // ETT Tip marker
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(cx - 2, h * 0.28, 8, 4);

    // ECG telemetry lead wires artifact
    ctx.strokeStyle = "rgba(240, 245, 255, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, cy - 80);
    ctx.quadraticCurveTo(cx - 60, cy, cx + 40, cy + 140);
    ctx.stroke();
  },

  drawKneeMRI(ctx, w, h) {
    const cx = w / 2;
    const cy = h / 2;

    ctx.fillStyle = "#030407";
    ctx.fillRect(0, 0, w, h);

    // Femur condyle (Upper bone)
    ctx.fillStyle = "#252b38";
    ctx.beginPath();
    ctx.moveTo(cx - 90, cy - 180);
    ctx.lineTo(cx + 90, cy - 180);
    ctx.bezierCurveTo(cx + 100, cy - 80, cx + 70, cy - 20, cx + 25, cy - 10);
    ctx.bezierCurveTo(cx - 20, cy - 10, cx - 80, cy - 30, cx - 90, cy - 180);
    ctx.fill();
    // Femur cortical bone outline
    ctx.strokeStyle = "#080a0f";
    ctx.lineWidth = 5;
    ctx.stroke();

    // Tibial plateau (Lower bone)
    ctx.fillStyle = "#252b38";
    ctx.beginPath();
    ctx.moveTo(cx - 85, cy + 180);
    ctx.lineTo(cx + 85, cy + 180);
    ctx.bezierCurveTo(cx + 80, cy + 60, cx + 60, cy + 25, cx + 10, cy + 20);
    ctx.bezierCurveTo(cx - 30, cy + 20, cx - 75, cy + 50, cx - 85, cy + 180);
    ctx.fill();
    ctx.strokeStyle = "#080a0f";
    ctx.lineWidth = 5;
    ctx.stroke();

    // Patella (Kneecap on anterior side)
    ctx.fillStyle = "#2b3240";
    ctx.beginPath();
    ctx.ellipse(cx - 100, cy - 40, 22, 45, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Joint fluid space (High intensity T2 hyperintense signal - bright)
    ctx.fillStyle = "rgba(220, 235, 255, 0.65)";
    ctx.beginPath();
    ctx.ellipse(cx, cy + 5, 60, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Anterior Cruciate Ligament (Discontinuous / torn fibers with edema)
    ctx.strokeStyle = "rgba(30, 35, 45, 0.8)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(cx + 35, cy - 35);
    ctx.lineTo(cx + 15, cy - 15);
    ctx.stroke();

    // Torn gap with bright edema signal
    ctx.fillStyle = "rgba(240, 245, 255, 0.9)";
    ctx.beginPath();
    ctx.arc(cx + 10, cy, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(30, 35, 45, 0.8)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(cx + 5, cy + 12);
    ctx.lineTo(cx - 15, cy + 25);
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 16px 'Courier New', monospace";
    ctx.fillText("ANT", 24, 36);
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("POST", w - 50, 36);
    ctx.font = "11px 'Courier New', monospace";
    ctx.fillText("OMNI-MR KNEE SAG T2/PD", 24, h - 20);
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_SCANS_DATA, MedicalScanRenderer };
}
