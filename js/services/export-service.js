/**
 * OmniHealth OS - Medical Document Printing & Export Engine
 * Generates formatted, printable medical records, prescription slips,
 * lab test reports, itemized billing statements, CSV data dumps, and JSON backups.
 */

class ExportService {
  constructor() {}

  /**
   * Generates and prints an official medical prescription slip
   */
  printPrescription(patient, prescription, doctor) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Please allow popups to generate printable medical documents.");
      return;
    }

    const docName = doctor ? doctor.name : (patient.primaryPhysician || "Attending Physician");
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>OmniHealth Rx - ${patient.firstName} ${patient.lastName}</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 40px; color: #1e293b; }
          .header { border-bottom: 3px double #0284c7; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start; }
          .hospital-brand { font-size: 24px; font-weight: bold; color: #0369a1; letter-spacing: -0.5px; }
          .hospital-sub { font-size: 11px; color: #64748b; text-transform: uppercase; margin-top: 4px; }
          .rx-symbol { font-size: 42px; font-family: serif; font-weight: bold; color: #0284c7; margin-bottom: 12px; }
          .patient-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 24px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; font-size: 13px; }
          .patient-box div strong { color: #475569; display: block; font-size: 11px; text-transform: uppercase; }
          .medication-card { border: 1.5px solid #0284c7; border-radius: 8px; padding: 20px; margin-bottom: 30px; background: #f0f9ff; }
          .med-name { font-size: 20px; font-weight: bold; color: #0c4a6e; }
          .med-detail { font-size: 14px; margin-top: 8px; line-height: 1.6; color: #334155; }
          .footer { margin-top: 60px; display: flex; justify-content: space-between; align-items: flex-end; font-size: 12px; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 16px; }
          .sig-line { border-top: 1px solid #0f172a; width: 220px; text-align: center; padding-top: 6px; font-size: 12px; font-weight: bold; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="hospital-brand">OMNIHEALTH MEDICAL CENTER</div>
            <div class="hospital-sub">Department of Clinical Pharmacy & Outpatient Services</div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">750 Longwood Avenue, Boston, MA 02115 • Tel: (555) 700-1000</div>
          </div>
          <div style="text-align: right; font-size: 12px; color: #64748b;">
            <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <div><strong>Rx ID:</strong> ${prescription.id || 'RX-AUTOGEN'}</div>
          </div>
        </div>

        <div class="patient-box">
          <div><strong>Patient Name:</strong> ${patient.firstName} ${patient.lastName}</div>
          <div><strong>MRN / ID:</strong> ${patient.mrn || patient.id}</div>
          <div><strong>DOB / Age:</strong> ${patient.dob} (${patient.age} y/o)</div>
          <div><strong>Gender:</strong> ${patient.gender}</div>
          <div><strong>Known Allergies:</strong> ${patient.allergies ? patient.allergies.map(a => a.allergen).join(', ') : 'None Reported'}</div>
          <div><strong>Insurance:</strong> ${patient.insurance ? patient.insurance.provider : 'Self-Pay'}</div>
        </div>

        <div class="rx-symbol">&#8478;</div>

        <div class="medication-card">
          <div class="med-name">${prescription.name} ${prescription.dose}</div>
          <div class="med-detail">
            <div><strong>Route:</strong> ${prescription.route || 'Oral'}</div>
            <div><strong>Directions (Sig):</strong> ${prescription.frequency}</div>
            <div><strong>Quantity / Refills:</strong> Dispense 30-Day Supply • Refills: ${prescription.refills !== undefined ? prescription.refills : 0}</div>
            <div><strong>Indications:</strong> Active clinical therapy</div>
          </div>
        </div>

        <div class="footer">
          <div>
            <div>Prescribing Physician: <strong>${docName}</strong></div>
            <div>DEA Reg: #FJ9928104 • NPI: 1849201948</div>
            <div style="margin-top: 8px; font-size: 10px; color: #94a3b8;">Electronically authenticated via OmniHealth OS CPOE</div>
          </div>
          <div class="sig-line">
            Physician Signature / Date
          </div>
        </div>

        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  }

  /**
   * Generates and prints an itemized hospital billing invoice
   */
  printInvoice(invoice, patient) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Please allow popups to generate printable medical documents.");
      return;
    }

    const itemsHtml = invoice.items.map(item => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${item.cptCode || 'SVC'}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${item.description}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: right;">$${item.unitPrice.toFixed(2)}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600;">$${item.total.toFixed(2)}</td>
      </tr>
    `).join('');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>OmniHealth Billing Statement - ${invoice.invoiceId}</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 40px; color: #0f172a; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0f172a; padding-bottom: 16px; }
          .title { font-size: 24px; font-weight: bold; color: #0369a1; }
          .inv-badge { font-size: 18px; font-weight: bold; color: #475569; }
          .details { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 24px 0; font-size: 13px; line-height: 1.6; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px; }
          th { background: #f1f5f9; padding: 10px; text-align: left; font-weight: 600; color: #334155; border-bottom: 2px solid #cbd5e1; }
          .summary { width: 320px; margin-left: auto; margin-top: 24px; font-size: 13px; line-height: 2; }
          .summary-row { display: flex; justify-content: space-between; }
          .total-row { border-top: 2px solid #0f172a; font-weight: bold; font-size: 16px; color: #0369a1; padding-top: 6px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">OMNIHEALTH HEALTHCARE SYSTEM</div>
            <div style="font-size: 12px; color: #64748b;">Patient Financial Services & Revenue Cycle</div>
          </div>
          <div style="text-align: right;">
            <div class="inv-badge">INVOICE: ${invoice.invoiceId}</div>
            <div style="font-size: 12px; color: #64748b;">Date: ${invoice.encounterDate}</div>
          </div>
        </div>

        <div class="details">
          <div>
            <strong>Billed To (Patient):</strong><br>
            ${patient ? `${patient.firstName} ${patient.lastName}<br>MRN: ${patient.mrn}<br>${patient.address}` : 'Patient on File'}
          </div>
          <div>
            <strong>Insurance & Department:</strong><br>
            Provider: ${patient && patient.insurance ? patient.insurance.provider : 'Self-Pay'}<br>
            Department: ${invoice.department || 'Outpatient Services'}<br>
            Claim Status: <strong>${invoice.claimStatus || 'Adjudicated'}</strong>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>CPT Code</th>
              <th>Description</th>
              <th style="text-align: center;">Qty</th>
              <th style="text-align: right;">Unit Price</th>
              <th style="text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <div class="summary">
          <div class="summary-row"><span>Total Charges:</span> <span>$${invoice.subtotal.toFixed(2)}</span></div>
          <div class="summary-row" style="color: #16a34a;"><span>Insurance Covered:</span> <span>-$${(invoice.insuranceCovered || 0).toFixed(2)}</span></div>
          <div class="summary-row" style="color: #64748b;"><span>Contractual Adjustment:</span> <span>-$${(invoice.insuranceAdjustment || 0).toFixed(2)}</span></div>
          <div class="summary-row"><span>Copay / Co-insurance:</span> <span>$${(invoice.copayAmount || 0).toFixed(2)}</span></div>
          <div class="summary-row total-row"><span>Patient Balance Due:</span> <span>$${invoice.patientBalance.toFixed(2)}</span></div>
        </div>

        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  }

  /**
   * Export any JavaScript Array of Objects to a downloadable CSV file
   */
  exportToCSV(dataArray, filename = "omnihealth-export.csv") {
    if (!dataArray || dataArray.length === 0) {
      alert("No data available to export.");
      return;
    }

    const headers = Object.keys(dataArray[0]);
    const csvRows = [];
    csvRows.push(headers.join(','));

    dataArray.forEach(row => {
      const values = headers.map(header => {
        let val = row[header];
        if (typeof val === 'object' && val !== null) val = JSON.stringify(val);
        const escaped = ('' + (val !== undefined ? val : '')).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Download a complete JSON system backup
   */
  downloadDatabaseBackup() {
    if (typeof Storage === 'undefined') return;
    const json = Storage.exportDatabaseJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `omnihealth-backup-${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

const Export = new ExportService();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Export };
}
