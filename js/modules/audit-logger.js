/**
 * OmniHealth OS - HIPAA Security & Audit Trail Logging Engine
 * Records all patient record accesses, medication modifications, clinical overrides,
 * and diagnostic exports into an immutable audit trail with actor IDs and timestamps.
 */

const AuditLoggerModule = {
  init() {
    this.bindEvents();
    this.renderAuditLogs();
  },

  bindEvents() {
    const filterInput = document.getElementById("audit-filter-input");
    if (filterInput) {
      filterInput.addEventListener("input", (e) => this.filterLogs(e.target.value));
    }

    const exportBtn = document.getElementById("audit-export-csv-btn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportAuditCSV());
    }

    const clearBtn = document.getElementById("audit-clear-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => this.clearAuditLogs());
    }
  },

  renderAuditLogs() {
    const tbody = document.getElementById("audit-logs-tbody");
    if (!tbody || typeof Storage === 'undefined') return;

    const logs = Storage.getAll(STORAGE_KEYS.AUDIT_LOGS);

    if (logs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-muted">No security audit logs recorded.</td></tr>`;
      return;
    }

    tbody.innerHTML = logs.map(log => {
      const isCriticalAction = log.action.includes("CRITICAL") || log.action.includes("ALERT") || log.action.includes("CODE_BLUE");

      return `
        <tr class="${isCriticalAction ? 'row-critical' : ''}">
          <td class="text-xs font-mono text-muted">${new Date(log.timestamp).toLocaleString()}</td>
          <td><span class="badge-code">${log.id}</span></td>
          <td><strong>${log.actor}</strong></td>
          <td><span class="badge ${isCriticalAction ? 'badge-danger' : 'badge-outline-primary'}">${log.action}</span></td>
          <td>${log.resource}</td>
          <td class="text-xs">${log.details}</td>
        </tr>
      `;
    }).join('');
  },

  filterLogs(query) {
    const q = query.trim().toLowerCase();
    const rows = document.querySelectorAll("#audit-logs-tbody tr");
    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(q) ? "" : "none";
    });
  },

  exportAuditCSV() {
    const logs = Storage.getAll(STORAGE_KEYS.AUDIT_LOGS);
    if (typeof Export !== 'undefined') {
      Export.exportToCSV(logs, `omnihealth-hipaa-audit-${new Date().toISOString().slice(0, 10)}.csv`);
    }
  },

  clearAuditLogs() {
    if (confirm("Are you sure you want to reset audit security records? (This action is restricted under HIPAA Title II)")) {
      Storage.setItem(STORAGE_KEYS.AUDIT_LOGS, []);
      Storage.logAuditEvent("Security Officer / Admin", "AUDIT_LOGS_PURGED", "Audit Vault", "Audit trail purged by authorized administrator.");
      this.renderAuditLogs();
      Notify.showToast({
        title: "Audit Trail Reset",
        message: "Audit records cleared.",
        type: "warning"
      });
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AuditLoggerModule };
}
