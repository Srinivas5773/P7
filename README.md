# OmniHealth OS - Enterprise Healthcare & Hospital Management Platform

An enterprise-grade, comprehensive clinical and hospital operations platform built entirely in modern **HTML5, CSS3, JavaScript, and Node.js**.

The application operates **100% client-side** or as a containerized Node.js service with persistent storage (IndexedDB & LocalStorage fallback), realistic clinical databases, hardware-accelerated HTML5 Canvas engines, and medical audio synthesizers with **no external API keys or `.env` files required**.

---

## Installation

To install all dependencies for local development and server orchestration:

```bash
# Clone the repository
git clone https://github.com/Srinivas5773/P7.git
cd P7

# Install dependencies using npm
npm install
```

---

## Build

To compile and validate all clinical modules, datasets, and engines:

```bash
# Run build process
npm run build
```

---

## Run

You can launch OmniHealth OS through any of the following methods:

### Option 1: Native Node.js Server
```bash
# Start production HTTP & WebSocket server
npm start
```
Then navigate to `http://localhost:3000` in your web browser.

### Option 2: Docker Container
```bash
# Build and launch with Docker
docker build -t omnihealth-hospital-os .
docker run -p 3000:3000 omnihealth-hospital-os
```

### Option 3: Docker Compose
```bash
# Start with Docker Compose
docker-compose up -d
```

### Option 4: Direct Standalone Browser Execution
Simply open `index.html` directly in any modern browser without running any web server:
```bash
explorer.exe index.html
```

---

## Dependencies

The project is engineered for zero-dependency standalone execution while providing an enterprise Node.js HTTP server.

- **Runtime & Server**:
  - `express`: Fast, unopinionated HTTP web server
  - `ws`: High-performance WebSocket server for multi-user clinical sync
  - `cors`: Cross-origin resource sharing middleware
- **Development & Testing**:
  - `c8`: Native V8 code coverage analysis
  - `Node.js Test Runner`: Built-in zero-dependency unit test framework

---

## Usage

OmniHealth OS contains 14 clinical and hospital operations portals accessible via the navigation sidebar:

1. **Electronic Health Records (EHR)**: Full patient charts, vitals trends, allergy warnings, and SOAP clinical documentation with real-time ICD-10 search.
2. **Clinical Decision Support (CDSS)**: Real-time risk calculations including NEWS2 (Sepsis Score), eGFR (CKD-EPI), and CHA2DS2-VASc stroke risk.
3. **Emergency Department (ESI 1-5)**: Color-coded triage board, rapid intake form, trauma alerts, ambulance tracking, and facility-wide Code Blue alarms.
4. **ICU Telemetry Monitor (60 FPS)**: Real-time multi-lead ECG, SpO2 Plethysmograph, and Arterial Blood Pressure canvas monitor with switchable arrhythmias and Web Audio heart beeps.
5. **PACS / DICOM Workstation**: Diagnostic image viewer with window/level contrast manipulation, 8x zoom, pan, inverted LUT, millimeter distance ruler, and ROI density metrics.
6. **Pharmacy & Formulary**: Inpatient medication dispensing, stock reordering, and real-time drug-drug interaction checker.
7. **Laboratory Information System (LIS)**: Specimen accessioning, assay validation, and automated panic threshold flagging.
8. **Outpatient Appointments**: Physician directory and booking calendar wizard.
9. **Virtual Telehealth Suite**: Encrypted simulated video consultation with live speech-to-text medical transcription.
10. **AI Symptom Checker**: Rule-based diagnostic decision tree with red flag detection and specialist routing.
11. **Hospital Bed Management**: Interactive ward floor plan with sanitization tracking.
12. **Medical Billing & Claims**: CPT fee schedules, 837P insurance claim adjudication simulator, and itemized invoices.
13. **Executive Analytics**: Hospital KPI dashboards, bed occupancy trends, and regional epidemiological surveillance.
14. **HIPAA Audit Log**: Immutable security audit trail with exportable CSV ledger.

---

## Tests & Coverage

To run the automated clinical calculation, EHR, pharmacy, and billing test suites:

```bash
# Execute unit test suites
npm test

# Generate code coverage report
npm run test:coverage
```

---

## Architecture & Codebase Structure

```
OmniHealth-Hospital-System/
├── index.html                   # Single-Page Application master shell
├── server.js                    # Node.js HTTP & WebSocket server
├── package.json                 # Dependency manifest and npm scripts
├── package-lock.json            # Deterministic dependency lockfile
├── Dockerfile                   # Production container definition
├── docker-compose.yml           # Multi-service container orchestration
├── Makefile                     # Build & run automation targets
├── jest.config.js               # Test runner configuration
├── README.md                    # System architecture & instructions
├── tests/                       # Unit test suites
│   ├── clinical-calc.test.js    # NEWS2, eGFR, CHA2DS2-VASc validation
│   ├── ehr.test.js              # Patient models and ICD-10 coding tests
│   ├── pharmacy.test.js         # Formulary and drug interaction tests
│   └── billing.test.js          # Insurance claim adjudication tests
├── css/
│   ├── main.css                 # Design tokens, variables, dark/light themes
│   ├── components.css           # Buttons, tables, cards, modals, form inputs, toasts
│   ├── clinical-theme.css       # ECG monitor, PACS console, ESI triage badges
│   └── responsive.css           # Responsive mobile navigation & print layouts
└── js/
    ├── app.js                   # Master SPA router & lifecycle orchestrator
    ├── storage.js               # IndexedDB / LocalStorage persistent storage engine
    ├── services/
    │   ├── audio-service.js     # Web Audio API medical tone synthesizer
    │   ├── chart-service.js     # Hardware-accelerated Canvas chart engine
    │   ├── export-service.js    # PDF, CSV, and printable medical documents
    │   └── notification-service.js # Toast notifications & clinical panic alerts
    ├── engines/
    │   ├── fhir-hl7-interop-engine.js        # FHIR R4 & HL7 v2 message engine
    │   ├── clinical-decision-rules-engine.js # Evidence-based CDSS rules
    │   ├── dicom-pacs-processing-engine.js   # DICOM header & spatial filters
    │   ├── pharmacokinetics-engine.js        # PK/PD compartment modeling
    │   └── telemetry-dsp-engine.js           # Waveform filtering & QRS detection
    ├── data/
    │   ├── mock-patients.js     # Inpatient dossiers, vitals, problem lists
    │   ├── mock-doctors.js      # Attending physician directory & schedules
    │   ├── mock-drugs.js        # Pharmacopeia & drug interaction matrix
    │   ├── mock-drugs-expanded.js # Multi-class expanded formulary database
    │   ├── mock-icd10.js        # Core ICD-10 diagnostic & CPT procedure codes
    │   ├── mock-icd10-expanded.js # 19,880+ structured ICD-10 coding entries
    │   ├── mock-clinical-pathways.js # Evidence-based clinical guidelines
    │   ├── mock-labs.js         # Lab test catalog, reference ranges & panic values
    │   ├── mock-departments.js  # Hospital wards, floor plans, room allocations
    │   ├── mock-insurance.js    # Payer networks & insurance claim adjudication rules
    │   └── mock-scans.js        # Procedural radiology canvas renderer data
    └── modules/
        ├── ehr.js               # Electronic Health Records & SOAP documentation
        ├── clinical-calc.js     # Medical score formulas (NEWS2, eGFR, CHA2DS2-VASc)
        ├── emergency.js         # ESI 1-5 Triage Board & Code Blue dispatcher
        ├── telemetry-monitor.js # 60 FPS Canvas multi-parameter ICU monitor
        ├── pacs-viewer.js       # DICOM / PACS radiology workstation
        ├── pharmacy.js          # Formulary & prescription dispensing engine
        ├── laboratory.js        # Laboratory Information System (LIS)
        ├── appointments.js      # Doctor directory & appointment booking
        ├── telehealth.js        # Video consultation & live speech transcription
        ├── symptom-checker.js   # AI clinical decision tree & triage wizard
        ├── floorplan.js         # Interactive ward bed occupancy map
        ├── billing.js           # Itemized invoicing & claim adjudication
        ├── analytics.js         # Hospital KPI & epidemiological dashboard
        ├── audit-logger.js      # HIPAA immutable audit security trail
        └── settings.js          # RBAC persona switcher & data management
```

---

## Ownership & License

Proprietary Software. All rights reserved.
Unauthorized copying, modification, distribution, or commercial deployment without explicit authorization is strictly prohibited.
