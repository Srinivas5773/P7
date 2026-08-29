/**
 * OmniHealth OS - Outpatient Appointment Scheduling & Calendar Module
 * Features:
 * - Multi-Specialty Doctor Directory with Real-Time Availability Matrix
 * - Appointment Booking Wizard with Slot Selection & Reason Intake
 * - In-Person vs Virtual Telehealth Visit Mode
 * - Appointment Status Tracking (Scheduled, Confirmed, Completed, Cancelled)
 */

const AppointmentsModule = {
  selectedDoctorId: "DOC-101",
  selectedDate: "2026-08-30",
  selectedSlot: null,

  init() {
    this.bindEvents();
    this.renderDoctorDirectory();
    this.renderDoctorAvailability();
    this.renderAppointmentsList();
  },

  bindEvents() {
    const specialtyFilter = document.getElementById("apt-specialty-filter");
    if (specialtyFilter) {
      specialtyFilter.addEventListener("change", (e) => this.filterDoctors(e.target.value));
    }

    const datePicker = document.getElementById("apt-booking-date");
    if (datePicker) {
      datePicker.value = this.selectedDate;
      datePicker.addEventListener("change", (e) => {
        this.selectedDate = e.target.value;
        this.renderDoctorAvailability();
      });
    }

    const bookBtn = document.getElementById("apt-confirm-booking-btn");
    if (bookBtn) {
      bookBtn.addEventListener("click", () => this.confirmBooking());
    }
  },

  renderDoctorDirectory() {
    const container = document.getElementById("apt-doctor-cards-container");
    if (!container || typeof Storage === 'undefined') return;

    const doctors = Storage.getAll(STORAGE_KEYS.DOCTORS);

    container.innerHTML = doctors.map(doc => `
      <div class="doctor-profile-card ${doc.id === this.selectedDoctorId ? 'selected-doctor' : ''}" onclick="AppointmentsModule.selectDoctor('${doc.id}')">
        <div class="doc-avatar-wrapper">
          <img src="${doc.avatar}" alt="${doc.name}" class="doc-avatar" onerror="this.src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150'">
          <div class="doc-rating">★ ${doc.rating}</div>
        </div>
        <div class="doc-info">
          <div class="doc-name">${doc.name} <span class="doc-title">${doc.title}</span></div>
          <div class="doc-specialty text-sky-400 font-medium">${doc.specialty} • ${doc.department}</div>
          <div class="doc-bio">${doc.bio}</div>
          <div class="doc-meta">
            <span>Fee: <strong>$${doc.consultationFee}</strong></span>
            <span>Room: <strong>${doc.room}</strong></span>
          </div>
        </div>
      </div>
    `).join('');
  },

  filterDoctors(specialty) {
    const cards = document.querySelectorAll(".doctor-profile-card");
    const docs = Storage.getAll(STORAGE_KEYS.DOCTORS);

    cards.forEach((card, idx) => {
      const doc = docs[idx];
      if (!doc) return;
      if (specialty === 'all' || doc.specialty.toLowerCase() === specialty.toLowerCase()) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  },

  selectDoctor(doctorId) {
    this.selectedDoctorId = doctorId;
    this.selectedSlot = null;
    this.renderDoctorDirectory();
    this.renderDoctorAvailability();
  },

  renderDoctorAvailability() {
    const container = document.getElementById("apt-slots-container");
    const docSummaryEl = document.getElementById("apt-selected-doc-summary");
    if (!container || typeof Storage === 'undefined') return;

    const doctor = Storage.getById(STORAGE_KEYS.DOCTORS, this.selectedDoctorId);
    if (!doctor) return;

    if (docSummaryEl) {
      docSummaryEl.innerHTML = `
        <strong>Booking with:</strong> ${doctor.name} (${doctor.specialty}) • Consultation: $${doctor.consultationFee}
      `;
    }

    const slots = (doctor.availability && doctor.availability.slots) ? doctor.availability.slots : ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

    container.innerHTML = slots.map(slot => `
      <button class="slot-pill ${slot === this.selectedSlot ? 'active-slot' : ''}" onclick="AppointmentsModule.selectSlot('${slot}')">
        ⏰ ${slot}
      </button>
    `).join('');
  },

  selectSlot(slot) {
    this.selectedSlot = slot;
    this.renderDoctorAvailability();
  },

  confirmBooking() {
    const patientSelect = document.getElementById("apt-patient-select");
    const visitTypeSelect = document.getElementById("apt-visit-type");
    const reasonInput = document.getElementById("apt-booking-reason");

    if (!this.selectedSlot) {
      Notify.showToast({
        title: "Slot Required",
        message: "Please select an available appointment time slot.",
        type: "warning"
      });
      return;
    }

    const patientId = patientSelect ? patientSelect.value : "PAT-1001";
    const patient = Storage.getById(STORAGE_KEYS.PATIENTS, patientId);
    const doctor = Storage.getById(STORAGE_KEYS.DOCTORS, this.selectedDoctorId);

    const newAppointment = {
      id: "APT-2026-" + Math.floor(100 + Math.random() * 900),
      patientId: patient ? patient.id : "PAT-1001",
      patientName: patient ? `${patient.firstName} ${patient.lastName}` : "Eleanor Vance",
      doctorId: doctor ? doctor.id : "DOC-101",
      doctorName: doctor ? doctor.name : "Dr. Sarah Jenkins",
      department: doctor ? doctor.department : "Cardiology",
      date: this.selectedDate,
      time: this.selectedSlot,
      type: visitTypeSelect ? visitTypeSelect.value : "In-Person Consultation",
      reason: reasonInput && reasonInput.value.trim() ? reasonInput.value.trim() : "Routine Clinical Evaluation",
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };

    Storage.insert(STORAGE_KEYS.APPOINTMENTS, newAppointment);
    Storage.logAuditEvent(
      "Scheduling Coordinator",
      "APPOINTMENT_BOOKED",
      newAppointment.id,
      `Booked appointment for ${newAppointment.patientName} with ${newAppointment.doctorName} on ${newAppointment.date} at ${newAppointment.time}`
    );

    Notify.showToast({
      title: "Appointment Confirmed",
      message: `Confirmed for ${newAppointment.date} at ${newAppointment.time} with ${newAppointment.doctorName}.`,
      type: "success"
    });

    if (reasonInput) reasonInput.value = "";
    this.selectedSlot = null;
    this.renderDoctorAvailability();
    this.renderAppointmentsList();
  },

  renderAppointmentsList() {
    const container = document.getElementById("apt-scheduled-list-tbody");
    if (!container || typeof Storage === 'undefined') return;

    const appointments = Storage.getAll(STORAGE_KEYS.APPOINTMENTS);

    if (appointments.length === 0) {
      container.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-muted">No scheduled appointments.</td></tr>`;
      return;
    }

    container.innerHTML = appointments.map(apt => `
      <tr>
        <td><span class="badge-code">${apt.id}</span></td>
        <td>
          <strong>${apt.patientName}</strong>
          <span class="text-xs text-muted block">${apt.patientId}</span>
        </td>
        <td>
          <div class="font-semibold text-sky-400">${apt.doctorName}</div>
          <div class="text-xs text-muted">${apt.department}</div>
        </td>
        <td>
          <div>📅 ${apt.date}</div>
          <div class="text-xs text-muted">⏰ ${apt.time}</div>
        </td>
        <td>
          <span class="badge ${apt.type.includes('Telehealth') || apt.type.includes('Virtual') ? 'badge-primary' : 'badge-outline-secondary'}">
            ${apt.type}
          </span>
        </td>
        <td>
          <span class="badge ${apt.status === 'Confirmed' ? 'badge-success' : apt.status === 'Completed' ? 'badge-info' : 'badge-warning'}">
            ${apt.status}
          </span>
        </td>
      </tr>
    `).join('');
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AppointmentsModule };
}
