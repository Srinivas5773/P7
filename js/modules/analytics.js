/**
 * OmniHealth OS - Hospital Analytics & Epidemiological Intelligence Module
 * Interactive Canvas charts, KPI executive summaries, bed occupancy trends,
 * emergency department door-to-balloon times, and regional disease surveillance.
 */

const AnalyticsModule = {
  init() {
    this.renderKPICards();
    this.renderOccupancyChart();
    this.renderEDWaitChart();
    this.renderEpidemiologyTrends();
  },

  renderKPICards() {
    const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);
    const departments = Storage.getAll(STORAGE_KEYS.DEPARTMENTS);
    const invoices = Storage.getAll(STORAGE_KEYS.INVOICES);

    const totalBeds = departments.reduce((sum, d) => sum + (d.totalBeds || 0), 0);
    const occupiedBeds = departments.reduce((sum, d) => sum + (d.occupiedBeds || 0), 0);
    const occupancyRate = totalBeds > 0 ? ((occupiedBeds / totalBeds) * 100).toFixed(1) : "0";

    const totalRevenue = invoices.reduce((sum, inv) => sum + (inv.subtotal || 0), 0);

    const bedCountEl = document.getElementById("kpi-bed-occupancy");
    const censusEl = document.getElementById("kpi-patient-census");
    const edWaitEl = document.getElementById("kpi-ed-waittime");
    const revEl = document.getElementById("kpi-total-revenue");

    if (bedCountEl) bedCountEl.textContent = `${occupancyRate}% (${occupiedBeds}/${totalBeds})`;
    if (censusEl) censusEl.textContent = `${patients.length} Active`;
    if (edWaitEl) edWaitEl.textContent = `18.4 mins`;
    if (revEl) revEl.textContent = `$${totalRevenue.toLocaleString()}`;
  },

  renderOccupancyChart() {
    const canvas = document.getElementById("analytics-occupancy-canvas");
    if (!canvas || typeof ChartEngine === 'undefined') return;

    const departments = Storage.getAll(STORAGE_KEYS.DEPARTMENTS);

    const labels = departments.map(d => d.code);
    const data = departments.map(d => Math.round((d.occupiedBeds / d.totalBeds) * 100));
    const colors = departments.map(d => d.color || "#3b82f6");

    ChartEngine.drawBarChart(canvas, {
      title: "Department Bed Occupancy (%)",
      labels: labels,
      data: data,
      colors: colors,
      yAxisUnit: "%"
    });
  },

  renderEDWaitChart() {
    const canvas = document.getElementById("analytics-ed-wait-canvas");
    if (!canvas || typeof ChartEngine === 'undefined') return;

    const hours = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"];
    const waitTimes = [12, 8, 24, 38, 42, 28]; // minutes

    ChartEngine.drawLineChart(canvas, {
      title: "24-Hour Emergency Triage Wait Times (Minutes)",
      labels: hours,
      datasets: [
        {
          label: "Average Triage Wait",
          data: waitTimes,
          color: "#f59e0b",
          fill: true,
          fillColor: "rgba(245, 158, 11, 0.15)",
          lineWidth: 2.5
        }
      ],
      yAxisUnit: "m"
    });
  },

  renderEpidemiologyTrends() {
    const canvas = document.getElementById("analytics-epi-canvas");
    if (!canvas || typeof ChartEngine === 'undefined') return;

    const weeks = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"];
    const influenza = [42, 65, 88, 124, 98, 70];
    const rsv = [30, 44, 58, 72, 80, 85];
    const covid = [22, 28, 35, 30, 26, 21];

    ChartEngine.drawLineChart(canvas, {
      title: "Regional Viral Respiratory Surveillance (Cases / 100k)",
      labels: weeks,
      datasets: [
        { label: "Influenza A/B", data: influenza, color: "#ef4444", fill: false, lineWidth: 2 },
        { label: "RSV (Pediatric)", data: rsv, color: "#38bdf8", fill: false, lineWidth: 2 },
        { label: "SARS-CoV-2", data: covid, color: "#10b981", fill: false, lineWidth: 2 }
      ],
      yAxisUnit: ""
    });
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AnalyticsModule };
}
