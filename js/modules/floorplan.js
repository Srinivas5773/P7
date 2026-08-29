/**
 * OmniHealth OS - Interactive Hospital Bed Management & Floor Plan Visualizer
 * SVG & DOM-based real-time bed board map across ICU, Emergency, Surgery,
 * Cardiology, and Pediatrics wards with patient allocations and sanitization toggles.
 */

const FloorPlanModule = {
  activeDepartmentId: "DEP-EMERG",

  init() {
    this.bindEvents();
    this.renderWardSelector();
    this.renderWardFloorPlan();
  },

  bindEvents() {
    const wardSelect = document.getElementById("floorplan-ward-select");
    if (wardSelect) {
      wardSelect.addEventListener("change", (e) => {
        this.activeDepartmentId = e.target.value;
        this.renderWardFloorPlan();
      });
    }
  },

  renderWardSelector() {
    const select = document.getElementById("floorplan-ward-select");
    if (!select || typeof Storage === 'undefined') return;

    const departments = Storage.getAll(STORAGE_KEYS.DEPARTMENTS);
    select.innerHTML = departments.map(dep => `
      <option value="${dep.id}" ${dep.id === this.activeDepartmentId ? 'selected' : ''}>
        ${dep.name} (${dep.floor} - ${dep.wing}) [${dep.occupiedBeds}/${dep.totalBeds} Occupied]
      </option>
    `).join('');
  },

  renderWardFloorPlan() {
    const container = document.getElementById("floorplan-grid-container");
    const summaryEl = document.getElementById("floorplan-ward-summary");
    if (!container || typeof Storage === 'undefined') return;

    const dept = Storage.getById(STORAGE_KEYS.DEPARTMENTS, this.activeDepartmentId);
    if (!dept) return;

    if (summaryEl) {
      const occupancyRate = ((dept.occupiedBeds / dept.totalBeds) * 100).toFixed(0);
      summaryEl.innerHTML = `
        <strong>${dept.name}</strong> • Head: ${dept.headOfDepartment} • Staff Ratio: ${dept.nurseToPatientRatio}
        <span class="badge ${occupancyRate > 85 ? 'badge-danger' : 'badge-primary'} ml-2">Occupancy: ${occupancyRate}%</span>
      `;
    }

    const patients = Storage.getAll(STORAGE_KEYS.PATIENTS);

    container.innerHTML = dept.rooms.map(room => `
      <div class="floor-room-card">
        <div class="floor-room-header">
          <span>🚪 ${room.name}</span>
          <span class="text-xs text-muted">ID: ${room.id}</span>
        </div>
        <div class="floor-beds-grid">
          ${room.beds.map(bed => {
            const patient = bed.patientId ? patients.find(p => p.id === bed.patientId) : null;
            const isOccupied = bed.status === "Occupied" || !!patient;
            const isCleaning = bed.status === "Cleaning";

            return `
              <div class="floor-bed-cell ${isOccupied ? 'bed-occupied' : isCleaning ? 'bed-cleaning' : 'bed-available'}" onclick="FloorPlanModule.onBedClick('${dept.id}', '${room.id}', '${bed.id}')">
                <div class="bed-icon-row">
                  <span class="bed-label">🛏️ ${bed.id}</span>
                  <span class="badge ${isOccupied ? 'badge-danger' : isCleaning ? 'badge-warning' : 'badge-success'} text-xs">
                    ${isOccupied ? 'Occupied' : isCleaning ? 'Sanitizing' : 'Available'}
                  </span>
                </div>
                ${patient ? `
                  <div class="bed-patient-info">
                    <strong>${patient.firstName} ${patient.lastName}</strong>
                    <div class="text-xs text-muted">${patient.age}y ${patient.gender} • ${patient.status}</div>
                    <div class="text-xs text-sky-400 mt-1">HR: ${patient.vitals ? patient.vitals.heartRate : '--'} | SpO2: ${patient.vitals ? patient.vitals.oxygenSaturation : '--'}%</div>
                  </div>
                ` : `
                  <div class="bed-empty-state">
                    ${isCleaning ? '🧼 Terminal Sanitization in Progress' : 'Ready for Patient Admission'}
                  </div>
                `}
                <div class="bed-equipment-list">
                  ${bed.equipment.map(eq => `<span class="equipment-pill">${eq}</span>`).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');
  },

  onBedClick(deptId, roomId, bedId) {
    const dept = Storage.getById(STORAGE_KEYS.DEPARTMENTS, deptId);
    if (!dept) return;

    const room = dept.rooms.find(r => r.id === roomId);
    if (!room) return;

    const bed = room.beds.find(b => b.id === bedId);
    if (!bed) return;

    if (bed.patientId) {
      // Patient already in bed -> show options (View EHR / Discharge)
      const patient = Storage.getById(STORAGE_KEYS.PATIENTS, bed.patientId);
      const action = confirm(`Bed ${bedId} is occupied by ${patient ? `${patient.firstName} ${patient.lastName}` : 'Patient'}.\n\nClick OK to open EHR dossier, or Cancel to manage bed status.`);
      if (action && patient) {
        if (typeof EHRModule !== 'undefined') {
          EHRModule.loadPatient(patient.id);
          if (typeof App !== 'undefined') App.switchModule('ehr');
        }
      }
    } else {
      // Toggle bed status between Available and Cleaning
      bed.status = bed.status === "Available" ? "Cleaning" : "Available";
      Storage.update(STORAGE_KEYS.DEPARTMENTS, dept.id, { rooms: dept.rooms });
      Storage.logAuditEvent("Ward Charge Nurse", "BED_STATUS_TOGGLED", `${dept.name} - ${bedId}`, `Status changed to ${bed.status}`);
      this.renderWardFloorPlan();

      Notify.showToast({
        title: "Bed Status Updated",
        message: `${bedId} marked as ${bed.status}.`,
        type: "info"
      });
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FloorPlanModule };
}
