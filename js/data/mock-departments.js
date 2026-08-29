/**
 * OmniHealth OS - Mock Hospital Departments, Wards & Floor Plan Layout
 * Real-time bed occupancy states, nurse-to-patient ratios, equipment inventory,
 * and SVG ward layout coordinate data.
 */

const MOCK_DEPARTMENTS = [
  {
    id: "DEP-EMERG",
    name: "Emergency & Trauma Center",
    code: "ED",
    floor: "Ground Floor",
    wing: "Emergency Wing",
    headOfDepartment: "Dr. Aris Thorne, MD, FACEP",
    nurseToPatientRatio: "1:2 (Resuscitation) / 1:4 (Triage)",
    totalBeds: 16,
    occupiedBeds: 11,
    color: "#ef4444",
    rooms: [
      { id: "RM-ED-01", name: "Trauma Bay 1", beds: [{ id: "Bed-ED-01", patientId: "PAT-1004", status: "Occupied", equipment: ["Ventilator", "Defibrillator", "Rapid Infuser", "Arterial Line Monitor"] }] },
      { id: "RM-ED-02", name: "Trauma Bay 2", beds: [{ id: "Bed-ED-02", patientId: null, status: "Available", equipment: ["Ventilator", "Defibrillator", "Crash Cart"] }] },
      { id: "RM-ED-03", name: "Acute Care Room 3", beds: [{ id: "Bed-ED-03", patientId: null, status: "Cleaning", equipment: ["Cardiac Monitor", "Suction Unit"] }] },
      { id: "RM-ED-04", name: "Acute Care Room 4", beds: [{ id: "Bed-ED-04", patientId: null, status: "Available", equipment: ["Cardiac Monitor", "IV Pole"] }] },
      { id: "RM-ED-05", name: "Triage Observation Pod A", beds: [
        { id: "Bed-ED-05A", patientId: null, status: "Available", equipment: ["Vital Sign Spot Monitor"] },
        { id: "Bed-ED-05B", patientId: null, status: "Occupied", equipment: ["Vital Sign Spot Monitor"] }
      ]}
    ]
  },
  {
    id: "DEP-ICU",
    name: "Intensive Care Unit (Medical / Surgical)",
    code: "ICU",
    floor: "2nd Floor",
    wing: "North Tower",
    headOfDepartment: "Dr. Marcus Vance, MD, FCCP",
    nurseToPatientRatio: "1:1 or 1:2",
    totalBeds: 12,
    occupiedBeds: 9,
    color: "#f59e0b",
    rooms: [
      { id: "RM-ICU-01", name: "ICU Pod Alpha Room 1", beds: [{ id: "Bed-ICU-01", patientId: null, status: "Cleaning", equipment: ["Servo-U Ventilator", "Philips IntelliVue MX800 Monitor", "CRRT Machine"] }] },
      { id: "RM-ICU-02", name: "ICU Pod Alpha Room 2", beds: [{ id: "Bed-ICU-02", patientId: "PAT-1004", status: "Occupied", equipment: ["Hamilton C6 Ventilator", "Arterial Line Transducer", "Alaris SmartPump 4-channel"] }] },
      { id: "RM-ICU-03", name: "ICU Pod Alpha Room 3", beds: [{ id: "Bed-ICU-03", patientId: null, status: "Available", equipment: ["Servo-U Ventilator", "IntelliVue MX800", "IV Infusion Pump"] }] },
      { id: "RM-ICU-04", name: "ICU Isolation Room (Negative Pressure)", beds: [{ id: "Bed-ICU-04", patientId: null, status: "Available", equipment: ["HEPA Filtration Unit", "Ventilator", "Video Laryngoscope"] }] }
    ]
  },
  {
    id: "DEP-CARDIO",
    name: "Cardiology & Telemetry Ward",
    code: "CARD",
    floor: "3rd Floor",
    wing: "West Wing (3B)",
    headOfDepartment: "Dr. Sarah Jenkins, MD, FACC",
    nurseToPatientRatio: "1:3 or 1:4",
    totalBeds: 24,
    occupiedBeds: 18,
    color: "#3b82f6",
    rooms: [
      { id: "RM-CARD-301", name: "Cardiac Telemetry Suite 301", beds: [{ id: "Bed-301", patientId: null, status: "Available", equipment: ["Wireless Telemetry Transmitter", "Pulse Oximeter"] }] },
      { id: "RM-CARD-304", name: "Cardiac Care Suite 304", beds: [{ id: "Bed-304", patientId: "PAT-1001", status: "Occupied", equipment: ["Telemetry Transmitter", "NIBP Monitor", "IV Infusion Pump"] }] },
      { id: "RM-CARD-308", name: "Semi-Private Suite 308", beds: [
        { id: "Bed-308A", patientId: null, status: "Occupied", equipment: ["Telemetry Transmitter"] },
        { id: "Bed-308B", patientId: null, status: "Available", equipment: ["Telemetry Transmitter"] }
      ]}
    ]
  },
  {
    id: "DEP-NEURO",
    name: "Neurology & Stroke Step-Down",
    code: "NEURO",
    floor: "4th Floor",
    wing: "North Wing (4A)",
    headOfDepartment: "Dr. Robert Chen, MD, PhD",
    nurseToPatientRatio: "1:3",
    totalBeds: 18,
    occupiedBeds: 12,
    color: "#8b5cf6",
    rooms: [
      { id: "RM-NEURO-410", name: "Neuro Step-Down Room 410", beds: [{ id: "Bed-410", patientId: null, status: "Available", equipment: ["Continuous Video EEG Monitor", "Fall Alert Bed Sensor"] }] },
      { id: "RM-NEURO-412", name: "Neurology Private Room 412", beds: [{ id: "Bed-412", patientId: "PAT-1002", status: "Occupied", equipment: ["Dimming Photophobia Lighting", "IntelliVue Monitor"] }] }
    ]
  },
  {
    id: "DEP-PEDS",
    name: "Pediatric Inpatient Pavilion",
    code: "PEDS",
    floor: "2nd Floor",
    wing: "Children's Pavilion (2A)",
    headOfDepartment: "Dr. Elena Rostova, MD, FAAP",
    nurseToPatientRatio: "1:3",
    totalBeds: 20,
    occupiedBeds: 14,
    color: "#10b981",
    rooms: [
      { id: "RM-PEDS-205", name: "Pediatric Play Suite 205", beds: [{ id: "Bed-205", patientId: null, status: "Available", equipment: ["Pediatric Crib Bed", "O2 Blender", "Pediatric Vitals Monitor"] }] },
      { id: "RM-PEDS-208", name: "Pediatric Inpatient Room 208", beds: [{ id: "Bed-208", patientId: "PAT-1003", status: "Occupied", equipment: ["Pediatric O2 Blender", "Pulse Oximeter", "Nebulizer Comp"] }] }
    ]
  },
  {
    id: "DEP-SURG",
    name: "Orthopedic & General Surgery Ward",
    code: "SURG",
    floor: "5th Floor",
    wing: "Surgical Pavilion (5B)",
    headOfDepartment: "Dr. Sanjay Patel, MD, FAAOS",
    nurseToPatientRatio: "1:4",
    totalBeds: 28,
    occupiedBeds: 22,
    color: "#06b6d4",
    rooms: [
      { id: "RM-SURG-502", name: "Post-Op Private Suite 502", beds: [{ id: "Bed-502", patientId: "PAT-1005", status: "Occupied", equipment: ["Game Ready Cryotherapy Unit", "SCD Compression Sleeves", "PCA Pump"] }] },
      { id: "RM-SURG-504", name: "Post-Op Suite 504", beds: [{ id: "Bed-504", patientId: null, status: "Available", equipment: ["SCD Sleeves", "IV Pump"] }] }
    ]
  },
  {
    id: "DEP-ONCO",
    name: "Medical Oncology & Infusion Center",
    code: "ONCO",
    floor: "6th Floor",
    wing: "East Wing (6C)",
    headOfDepartment: "Dr. Miriam Goldberg, MD",
    nurseToPatientRatio: "1:3 (Inpatient) / 1:2 (Infusion)",
    totalBeds: 22,
    occupiedBeds: 16,
    color: "#ec4899",
    rooms: [
      { id: "RM-ONCO-601", name: "Oncology Inpatient Suite 601", beds: [{ id: "Bed-601", patientId: "PAT-1006", status: "Occupied", equipment: ["CADD Ambulatory Infusion Pump", "Chemotherapy Spill Kit", "Bio-Hazard Waste Bin"] }] }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_DEPARTMENTS };
}
