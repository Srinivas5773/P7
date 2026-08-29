/**
 * OmniHealth OS - Main Master Application Controller & Router
 * Coordinates view navigation, state reactivity, global search, module life cycles,
 * and system startup.
 */

const App = {
  currentModule: "ehr",

  init() {
    console.log("OmniHealth OS: Initializing Clinical Operating System...");

    // Bind Navigation Sidebar Links
    this.bindNavigation();

    // Bind Global Topbar Search
    this.bindGlobalSearch();

    // Initialize Submodules
    if (typeof SettingsModule !== 'undefined') SettingsModule.init();
    if (typeof EHRModule !== 'undefined') EHRModule.init();
    if (typeof EmergencyModule !== 'undefined') EmergencyModule.init();
    if (typeof TelemetryMonitorModule !== 'undefined') TelemetryMonitorModule.init();
    if (typeof PACSViewerModule !== 'undefined') PACSViewerModule.init();
    if (typeof PharmacyModule !== 'undefined') PharmacyModule.init();
    if (typeof LaboratoryModule !== 'undefined') LaboratoryModule.init();
    if (typeof AppointmentsModule !== 'undefined') AppointmentsModule.init();
    if (typeof TelehealthModule !== 'undefined') TelehealthModule.init();
    if (typeof SymptomCheckerModule !== 'undefined') SymptomCheckerModule.init();
    if (typeof FloorPlanModule !== 'undefined') FloorPlanModule.init();
    if (typeof BillingModule !== 'undefined') BillingModule.init();
    if (typeof AnalyticsModule !== 'undefined') AnalyticsModule.init();
    if (typeof AuditLoggerModule !== 'undefined') AuditLoggerModule.init();

    // Start Live Clock
    this.startClock();

    // Default Module View
    this.switchModule("ehr");
  },

  bindNavigation() {
    const navLinks = document.querySelectorAll(".sidebar-nav-item");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetModule = link.getAttribute("data-module");
        if (targetModule) {
          this.switchModule(targetModule);
        }
      });
    });
  },

  switchModule(moduleName) {
    this.currentModule = moduleName;

    // Update active nav link styling
    const navLinks = document.querySelectorAll(".sidebar-nav-item");
    navLinks.forEach(link => {
      if (link.getAttribute("data-module") === moduleName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Hide all view panels, show the targeted view panel
    const views = document.querySelectorAll(".module-view");
    views.forEach(v => {
      v.style.display = "none";
    });

    const targetView = document.getElementById(`view-${moduleName}`);
    if (targetView) {
      targetView.style.display = "block";
    }

    // Trigger module-specific redraws or animations
    if (moduleName === "telemetry" && typeof TelemetryMonitorModule !== 'undefined') {
      TelemetryMonitorModule.resizeCanvas();
    } else if (moduleName === "pacs" && typeof PACSViewerModule !== 'undefined') {
      PACSViewerModule.redraw();
    } else if (moduleName === "analytics" && typeof AnalyticsModule !== 'undefined') {
      AnalyticsModule.renderKPICards();
      AnalyticsModule.renderOccupancyChart();
      AnalyticsModule.renderEDWaitChart();
      AnalyticsModule.renderEpidemiologyTrends();
    } else if (moduleName === "floorplan" && typeof FloorPlanModule !== 'undefined') {
      FloorPlanModule.renderWardFloorPlan();
    } else if (moduleName === "audit" && typeof AuditLoggerModule !== 'undefined') {
      AuditLoggerModule.renderAuditLogs();
    }
  },

  bindGlobalSearch() {
    const searchInput = document.getElementById("topbar-global-search");
    const dropdown = document.getElementById("topbar-search-dropdown");

    if (!searchInput || !dropdown || typeof Storage === 'undefined') return;

    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q || q.length < 2) {
        dropdown.style.display = "none";
        return;
      }

      const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);
      const matches = patients.filter(p =>
        p.firstName.toLowerCase().includes(q) ||
        p.lastName.toLowerCase().includes(q) ||
        (p.mrn && p.mrn.toLowerCase().includes(q)) ||
        (p.diagnoses && p.diagnoses.some(d => d.name.toLowerCase().includes(q) || d.code.toLowerCase().includes(q)))
      ).slice(0, 5);

      if (matches.length === 0) {
        dropdown.style.display = "none";
        return;
      }

      dropdown.style.display = "block";
      dropdown.innerHTML = matches.map(p => `
        <div class="search-result-item" onclick="App.openPatientFromSearch('${p.id}')">
          <div class="font-bold text-sky-400">${p.firstName} ${p.lastName} <span class="text-xs text-muted">(${p.mrn})</span></div>
          <div class="text-xs text-muted">${p.gender}, ${p.age}y • Ward: ${p.ward || 'General'} • Status: ${p.status}</div>
        </div>
      `).join('');
    });

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  },

  openPatientFromSearch(patientId) {
    const dropdown = document.getElementById("topbar-search-dropdown");
    if (dropdown) dropdown.style.display = "none";

    const searchInput = document.getElementById("topbar-global-search");
    if (searchInput) searchInput.value = "";

    if (typeof EHRModule !== 'undefined') {
      EHRModule.loadPatient(patientId);
      const ehrSelect = document.getElementById("ehr-patient-select");
      if (ehrSelect) ehrSelect.value = patientId;
      this.switchModule("ehr");
    }
  },

  startClock() {
    const clockEl = document.getElementById("topbar-live-clock");
    const update = () => {
      if (clockEl) {
        const now = new Date();
        clockEl.textContent = now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
      }
    };
    update();
    setInterval(update, 1000);
  }
};

// Global DOM Content Loaded Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
