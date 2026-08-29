/**
 * OmniHealth OS - Clinical Alert & Notification Bus
 * Manages modal alerts, non-intrusive toast banners, critical panic flags,
 * and audio-visual physiological alarms.
 */

class NotificationService {
  constructor() {
    this.container = null;
  }

  ensureContainer() {
    if (!this.container) {
      this.container = document.getElementById("toast-container");
      if (!this.container) {
        this.container = document.createElement("div");
        this.container.id = "toast-container";
        this.container.className = "toast-container";
        document.body.appendChild(this.container);
      }
    }
    return this.container;
  }

  showToast({ title = "Notification", message = "", type = "info", duration = 4500 }) {
    const container = this.ensureContainer();

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type} animate-slide-in`;

    const iconMap = {
      success: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      error: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
      warning: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      info: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
    };

    toast.innerHTML = `
      <div class="toast-icon-wrapper">${iconMap[type] || iconMap.info}</div>
      <div class="toast-content">
        <div class="toast-title">${this.escapeHTML(title)}</div>
        <div class="toast-message">${this.escapeHTML(message)}</div>
      </div>
      <button class="toast-close" aria-label="Close notification">&times;</button>
    `;

    const closeBtn = toast.querySelector(".toast-close");
    const removeToast = () => {
      toast.classList.add("animate-fade-out");
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    };

    closeBtn.addEventListener("click", removeToast);

    container.appendChild(toast);

    // Audio chime
    if (typeof AudioService !== 'undefined') {
      if (type === 'error' || type === 'warning') {
        AudioService.playHighPriorityAlarm();
      } else {
        AudioService.playNotificationChime();
      }
    }

    if (duration > 0) {
      setTimeout(removeToast, duration);
    }
  }

  showCriticalAlert({ title, message, onConfirm }) {
    const modalBackdrop = document.createElement("div");
    modalBackdrop.className = "clinical-modal-backdrop critical-alarm-modal";

    modalBackdrop.innerHTML = `
      <div class="clinical-modal critical-border animate-pop">
        <div class="clinical-modal-header critical-header">
          <div class="critical-icon-pulse">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5">
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div>
            <h3>${this.escapeHTML(title)}</h3>
            <span class="badge-critical">CRITICAL CLINICAL ALERT</span>
          </div>
        </div>
        <div class="clinical-modal-body">
          <p class="critical-text">${this.escapeHTML(message)}</p>
        </div>
        <div class="clinical-modal-footer">
          <button class="btn btn-danger btn-acknowledge">Acknowledge & Action</button>
        </div>
      </div>
    `;

    document.body.appendChild(modalBackdrop);

    if (typeof AudioService !== 'undefined') {
      AudioService.playHighPriorityAlarm();
    }

    const ackBtn = modalBackdrop.querySelector(".btn-acknowledge");
    ackBtn.addEventListener("click", () => {
      document.body.removeChild(modalBackdrop);
      if (typeof onConfirm === 'function') onConfirm();
    });
  }

  escapeHTML(str) {
    if (!str) return "";
    return str.toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

const Notify = new NotificationService();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Notify };
}
