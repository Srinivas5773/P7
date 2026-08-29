/**
 * OmniHealth OS - System Settings, RBAC Role Switcher & Database Management
 * Manages active user persona, clinical color theme, full JSON backup/restore,
 * and database maintenance.
 */

const SettingsModule = {
  currentRole: "doctor",
  currentTheme: "dark",

  init() {
    this.bindEvents();
    this.loadPersistedSettings();
  },

  bindEvents() {
    // Role switcher selector
    const roleSelect = document.getElementById("settings-role-select");
    if (roleSelect) {
      roleSelect.addEventListener("change", (e) => this.switchRole(e.target.value));
    }

    // Topbar quick role switcher
    const topRoleSelect = document.getElementById("topbar-role-select");
    if (topRoleSelect) {
      topRoleSelect.addEventListener("change", (e) => this.switchRole(e.target.value));
    }

    // Theme selector
    const themeSelect = document.getElementById("settings-theme-select");
    if (themeSelect) {
      themeSelect.addEventListener("change", (e) => this.switchTheme(e.target.value));
    }

    // Export JSON Backup
    const backupBtn = document.getElementById("settings-backup-btn");
    if (backupBtn) {
      backupBtn.addEventListener("click", () => {
        if (typeof Export !== 'undefined') Export.downloadDatabaseBackup();
      });
    }

    // Import JSON Backup
    const importInput = document.getElementById("settings-import-file");
    if (importInput) {
      importInput.addEventListener("change", (e) => this.handleFileImport(e));
    }

    // Factory Reset
    const resetBtn = document.getElementById("settings-factory-reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.factoryReset());
    }
  },

  loadPersistedSettings() {
    if (typeof Storage === 'undefined') return;

    const savedRole = Storage.getItem(STORAGE_KEYS.USER_ROLE, "doctor");
    const savedTheme = Storage.getItem(STORAGE_KEYS.APP_THEME, "dark");

    this.switchRole(savedRole, false);
    this.switchTheme(savedTheme, false);
  },

  switchRole(role, notify = true) {
    this.currentRole = role;
    Storage.setItem(STORAGE_KEYS.USER_ROLE, role);

    // Sync UI elements
    const s1 = document.getElementById("settings-role-select");
    const s2 = document.getElementById("topbar-role-select");
    const roleBadge = document.getElementById("topbar-user-badge");

    if (s1) s1.value = role;
    if (s2) s2.value = role;

    const roleMap = {
      doctor: { label: "Dr. Sarah Jenkins, MD (Cardiologist)", badge: "Attending Physician" },
      nurse: { label: "Nurse Jessica Adams, RN (BSN)", badge: "Triage Nurse" },
      pharmacist: { label: "Dr. Alex Vance, PharmD", badge: "Staff Pharmacist" },
      lab_tech: { label: "Marcus Reed, MLS (ASCP)", badge: "Lab Scientist" },
      billing: { label: "Elena Martinez, CPC", badge: "Billing Admin" },
      patient: { label: "Eleanor Vance (Patient)", badge: "Patient Portal" },
      admin: { label: "Chief Medical Officer", badge: "System Administrator" }
    };

    const info = roleMap[role] || roleMap.doctor;
    if (roleBadge) roleBadge.textContent = info.badge;

    const userNameEl = document.getElementById("topbar-user-name");
    if (userNameEl) userNameEl.textContent = info.label;

    Storage.logAuditEvent(info.label, "ROLE_SWITCHED", "RBAC Auth", `Active system perspective changed to ${info.badge}`);

    if (notify) {
      Notify.showToast({
        title: "Role Switch Activated",
        message: `Current clinical persona set to: ${info.badge}`,
        type: "info"
      });
    }
  },

  switchTheme(theme, notify = true) {
    this.currentTheme = theme;
    Storage.setItem(STORAGE_KEYS.APP_THEME, theme);

    document.documentElement.setAttribute("data-theme", theme);

    const themeSelect = document.getElementById("settings-theme-select");
    if (themeSelect) themeSelect.value = theme;

    if (notify) {
      Notify.showToast({
        title: "Theme Applied",
        message: `Visual theme updated to ${theme === 'dark' ? 'Clinical Dark' : theme === 'high-contrast' ? 'High Contrast Acuity' : 'Clean Hospital Light'}.`,
        type: "info"
      });
    }
  },

  handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const success = Storage.importDatabaseJSON(content);
      if (success) {
        Notify.showToast({
          title: "Database Restored",
          message: "Imported backup successfully. Refreshing view...",
          type: "success"
        });
        setTimeout(() => window.location.reload(), 1200);
      } else {
        alert("Failed to parse JSON backup file. Ensure valid OmniHealth format.");
      }
    };
    reader.readAsText(file);
  },

  factoryReset() {
    if (confirm("⚠️ WARNING: This will erase all local patient modifications, custom vitals, prescriptions, and reset the entire database to the default pristine sample records. Proceed?")) {
      Storage.factoryReset();
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SettingsModule };
}
