/**
 * OmniHealth OS - Native Canvas Charting Engine
 * High-performance, zero-dependency data visualization for clinical vital trends,
 * hospital KPIs, occupancy rates, financial metrics, and disease trends.
 */

class OmniChartEngine {
  constructor() {}

  /**
   * Helper to set up HiDPI (Retina) crisp canvas dimensions
   */
  setupCanvas(canvas) {
    if (!canvas) return null;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || canvas.width || 400;
    const height = rect.height || canvas.height || 200;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, width, height };
  }

  /**
   * Multi-series Line Chart with smooth bezier curves, gradient fills, and data points
   */
  drawLineChart(canvas, { labels = [], datasets = [], title = "", yAxisUnit = "", showGrid = true }) {
    const setup = this.setupCanvas(canvas);
    if (!setup) return;
    const { ctx, width, height } = setup;

    const padLeft = 50;
    const padRight = 20;
    const padTop = title ? 40 : 25;
    const padBottom = 35;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    ctx.clearRect(0, 0, width, height);

    // Title
    if (title) {
      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 13px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(title, padLeft, 22);
    }

    // Determine global min and max
    let minVal = Infinity;
    let maxVal = -Infinity;
    datasets.forEach(ds => {
      ds.data.forEach(val => {
        if (val < minVal) minVal = val;
        if (val > maxVal) maxVal = val;
      });
    });

    if (minVal === Infinity) minVal = 0;
    if (maxVal === -Infinity) maxVal = 100;
    // Add 10% breathing room
    const range = maxVal - minVal || 1;
    minVal = Math.max(0, Math.floor(minVal - range * 0.1));
    maxVal = Math.ceil(maxVal + range * 0.1);

    // Draw horizontal grid lines & Y-axis labels
    const gridLines = 4;
    ctx.strokeStyle = "rgba(148, 163, 184, 0.12)";
    ctx.lineWidth = 1;
    ctx.font = "10px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.textAlign = "right";

    for (let i = 0; i <= gridLines; i++) {
      const yVal = minVal + (maxVal - minVal) * (1 - i / gridLines);
      const yPos = padTop + (chartH / gridLines) * i;

      if (showGrid) {
        ctx.beginPath();
        ctx.moveTo(padLeft, yPos);
        ctx.lineTo(width - padRight, yPos);
        ctx.stroke();
      }

      ctx.fillText(`${Math.round(yVal)}${yAxisUnit}`, padLeft - 8, yPos + 3);
    }

    // Draw X-axis labels
    const xCount = labels.length;
    const xStep = xCount > 1 ? chartW / (xCount - 1) : chartW;
    ctx.textAlign = "center";

    labels.forEach((lbl, idx) => {
      const xPos = padLeft + idx * xStep;
      ctx.fillText(lbl, xPos, height - 10);
    });

    // Plot each dataset
    datasets.forEach((ds) => {
      const color = ds.color || "#38bdf8";
      const pts = ds.data.map((val, idx) => {
        const x = padLeft + idx * xStep;
        const normalized = (val - minVal) / (maxVal - minVal || 1);
        const y = padTop + chartH * (1 - normalized);
        return { x, y, val };
      });

      if (pts.length === 0) return;

      // Area fill gradient under curve
      if (ds.fill !== false) {
        const fillGrad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
        fillGrad.addColorStop(0, ds.fillColor || `${color}33`);
        fillGrad.addColorStop(1, `${color}00`);

        ctx.beginPath();
        ctx.moveTo(pts[0].x, padTop + chartH);
        ctx.lineTo(pts[0].x, pts[0].y);

        for (let i = 0; i < pts.length - 1; i++) {
          const xc = (pts[i].x + pts[i + 1].x) / 2;
          const yc = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
        }
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        ctx.lineTo(pts[pts.length - 1].x, padTop + chartH);
        ctx.closePath();
        ctx.fillStyle = fillGrad;
        ctx.fill();
      }

      // Draw line
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = ds.lineWidth || 2.5;
      ctx.moveTo(pts[0].x, pts[0].y);

      for (let i = 0; i < pts.length - 1; i++) {
        const xc = (pts[i].x + pts[i + 1].x) / 2;
        const yc = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
      }
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      ctx.stroke();

      // Draw point markers
      pts.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#0f172a";
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    });
  }

  /**
   * Bar Chart (Single or Grouped)
   */
  drawBarChart(canvas, { labels = [], data = [], colors = [], title = "", yAxisUnit = "" }) {
    const setup = this.setupCanvas(canvas);
    if (!setup) return;
    const { ctx, width, height } = setup;

    const padLeft = 45;
    const padRight = 15;
    const padTop = title ? 35 : 20;
    const padBottom = 30;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    ctx.clearRect(0, 0, width, height);

    if (title) {
      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 12px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(title, padLeft, 18);
    }

    const maxVal = Math.max(...data, 10);
    const count = data.length;
    const barWidth = Math.min(36, (chartW / count) * 0.65);
    const gap = chartW / count;

    // Horizontal grid
    ctx.strokeStyle = "rgba(148, 163, 184, 0.1)";
    ctx.lineWidth = 1;
    ctx.font = "10px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.textAlign = "right";

    for (let i = 0; i <= 3; i++) {
      const yVal = Math.round(maxVal * (1 - i / 3));
      const yPos = padTop + (chartH / 3) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, yPos);
      ctx.lineTo(width - padRight, yPos);
      ctx.stroke();
      ctx.fillText(`${yVal}${yAxisUnit}`, padLeft - 6, yPos + 3);
    }

    // Bars
    data.forEach((val, idx) => {
      const barH = (val / maxVal) * chartH;
      const x = padLeft + idx * gap + (gap - barWidth) / 2;
      const y = padTop + chartH - barH;
      const color = colors[idx] || "#3b82f6";

      // Rounded top bar
      const radius = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, padTop + chartH);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.lineTo(x + barWidth - radius, y);
      ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
      ctx.lineTo(x + barWidth, padTop + chartH);
      ctx.closePath();
      ctx.fill();

      // Label below bar
      ctx.fillStyle = "#94a3b8";
      ctx.textAlign = "center";
      ctx.fillText(labels[idx] || "", x + barWidth / 2, height - 10);

      // Value above bar
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "bold 10px system-ui, -apple-system, sans-serif";
      ctx.fillText(val.toString(), x + barWidth / 2, y - 5);
    });
  }

  /**
   * Donut / Doughnut Chart for Department Bed Occupancy or Triage Proportions
   */
  drawDonutChart(canvas, { segments = [], centerText = "", centerSubtext = "" }) {
    const setup = this.setupCanvas(canvas);
    if (!setup) return;
    const { ctx, width, height } = setup;

    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const outerRadius = Math.min(cx, cy) * 0.85;
    const innerRadius = outerRadius * 0.65;

    const total = segments.reduce((sum, seg) => sum + (seg.value || 0), 0) || 1;
    let currentAngle = -Math.PI / 2;

    segments.forEach(seg => {
      const sliceAngle = (seg.value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(cx, cy, outerRadius, currentAngle, currentAngle + sliceAngle);
      ctx.arc(cx, cy, innerRadius, currentAngle + sliceAngle, currentAngle, true);
      ctx.closePath();
      ctx.fillStyle = seg.color || "#3b82f6";
      ctx.fill();
      currentAngle += sliceAngle;
    });

    // Center text
    if (centerText) {
      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 20px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(centerText, cx, cy - (centerSubtext ? 8 : 0));
    }
    if (centerSubtext) {
      ctx.fillStyle = "#94a3b8";
      ctx.font = "11px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(centerSubtext, cx, cy + 14);
    }
  }

  /**
   * Compact Sparkline for tabular vital trend previews
   */
  drawSparkline(canvas, data = [], color = "#10b981") {
    const setup = this.setupCanvas(canvas);
    if (!setup) return;
    const { ctx, width, height } = setup;

    ctx.clearRect(0, 0, width, height);
    if (!data || data.length < 2) return;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = 4;
    const step = (width - pad * 2) / (data.length - 1);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.8;

    data.forEach((val, i) => {
      const x = pad + i * step;
      const y = height - pad - ((val - min) / range) * (height - pad * 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
}

const ChartEngine = new OmniChartEngine();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ChartEngine };
}
