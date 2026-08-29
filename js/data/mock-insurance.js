/**
 * OmniHealth OS - Mock Insurance Payers & Claim Adjudication Rules
 * Payer networks, benefit plans, copay tables, deductible accumulation,
 * and automated adjudication logic.
 */

const MOCK_INSURANCE_PAYERS = [
  {
    id: "PAYER-BCBS",
    name: "Blue Cross Blue Shield of Massachusetts",
    payerId: "00180",
    phone: "+1 (800) 888-2227",
    electronicClaimPayerId: "BCBSMA",
    clearinghouseStatus: "Active Electronic Connection",
    plans: [
      { id: "PLAN-BCBS-PPO", name: "Blue Care Elect PPO Preferred", copayOffice: 25.00, copaySpecialist: 40.00, copayED: 150.00, coinsurance: 0.15, deductibleInd: 1500.00, oopMaxInd: 5000.00, priorAuthRequired: ["70450", "73721", "29888"] },
      { id: "PLAN-BCBS-HMO", name: "HMO Blue New England", copayOffice: 20.00, copaySpecialist: 35.00, copayED: 100.00, coinsurance: 0.10, deductibleInd: 1000.00, oopMaxInd: 3500.00, priorAuthRequired: ["70450", "73721", "29888", "93306"] }
    ]
  },
  {
    id: "PAYER-AETNA",
    name: "Aetna Life & Health Insurance Co.",
    payerId: "60054",
    phone: "+1 (800) 872-3862",
    electronicClaimPayerId: "AETNA",
    clearinghouseStatus: "Active Electronic Connection",
    plans: [
      { id: "PLAN-AETNA-CHOICE", name: "Aetna Choice POS II", copayOffice: 30.00, copaySpecialist: 50.00, copayED: 200.00, coinsurance: 0.20, deductibleInd: 2000.00, oopMaxInd: 6000.00, priorAuthRequired: ["70450", "73721", "29888", "44140"] }
    ]
  },
  {
    id: "PAYER-UHC",
    name: "UnitedHealthcare",
    payerId: "87726",
    phone: "+1 (877) 842-3210",
    electronicClaimPayerId: "87726",
    clearinghouseStatus: "Active Electronic Connection",
    plans: [
      { id: "PLAN-UHC-PLUS", name: "Choice Plus National Network", copayOffice: 20.00, copaySpecialist: 40.00, copayED: 150.00, coinsurance: 0.20, deductibleInd: 1000.00, oopMaxInd: 4000.00, priorAuthRequired: ["73721", "29888"] }
    ]
  },
  {
    id: "PAYER-MEDICARE",
    name: "Centers for Medicare & Medicaid Services (CMS) Part A & B",
    payerId: "00801",
    phone: "+1 (800) 633-4227",
    electronicClaimPayerId: "CMSMEDICARE",
    clearinghouseStatus: "Active Electronic Connection",
    plans: [
      { id: "PLAN-MEDICARE-ORIG", name: "Traditional Medicare Part B (80/20)", copayOffice: 0.00, copaySpecialist: 0.00, copayED: 0.00, coinsurance: 0.20, deductibleInd: 240.00, oopMaxInd: 3400.00, priorAuthRequired: [] }
    ]
  },
  {
    id: "PAYER-MEDICAID",
    name: "MassHealth Standard (State Medicaid)",
    payerId: "10098",
    phone: "+1 (800) 841-2900",
    electronicClaimPayerId: "MASSHEALTH",
    clearinghouseStatus: "Active Electronic Connection",
    plans: [
      { id: "PLAN-MASSHEALTH-STD", name: "MassHealth Standard Comprehensive", copayOffice: 0.00, copaySpecialist: 0.00, copayED: 0.00, coinsurance: 0.00, deductibleInd: 0.00, oopMaxInd: 0.00, priorAuthRequired: ["29888", "44140"] }
    ]
  }
];

const MOCK_BILLING_INVOICES = [
  {
    invoiceId: "INV-2026-9041",
    patientId: "PAT-1001",
    encounterDate: "2026-08-27",
    providerId: "DOC-101",
    department: "Cardiology",
    status: "Partially Paid",
    items: [
      { cptCode: "99214", description: "Office visit established patient Level 4", quantity: 1, unitPrice: 165.00, total: 165.00 },
      { cptCode: "93000", description: "12-Lead Electrocardiogram with report", quantity: 1, unitPrice: 75.00, total: 75.00 },
      { cptCode: "80053", description: "Comprehensive metabolic panel (CMP)", quantity: 1, unitPrice: 85.00, total: 85.00 },
      { cptCode: "80061", description: "Lipid panel", quantity: 1, unitPrice: 65.00, total: 65.00 }
    ],
    subtotal: 390.00,
    insuranceBilled: 390.00,
    insuranceCovered: 325.00,
    insuranceAdjustment: 40.00,
    copayAmount: 25.00,
    patientBalance: 0.00,
    paymentStatus: "Paid in Full",
    claimId: "CLM-88194",
    claimStatus: "Adjudicated & Paid"
  },
  {
    invoiceId: "INV-2026-9042",
    patientId: "PAT-1005",
    encounterDate: "2026-08-28",
    providerId: "DOC-105",
    department: "Orthopedic Surgery",
    status: "Pending Adjudication",
    items: [
      { cptCode: "29888", description: "Arthroscopic ACL Reconstruction", quantity: 1, unitPrice: 3400.00, total: 3400.00 },
      { cptCode: "29881", description: "Arthroscopic Partial Meniscectomy", quantity: 1, unitPrice: 1850.00, total: 1850.00 },
      { cptCode: "73721", description: "Knee MRI scan pre-op", quantity: 1, unitPrice: 850.00, total: 850.00 },
      { cptCode: "99215", description: "Pre/Post-Op Specialist Evaluation Level 5", quantity: 1, unitPrice: 240.00, total: 240.00 }
    ],
    subtotal: 6340.00,
    insuranceBilled: 6340.00,
    insuranceCovered: 5072.00,
    insuranceAdjustment: 600.00,
    copayAmount: 50.00,
    patientBalance: 618.00,
    paymentStatus: "Pending Claim Processing",
    claimId: "CLM-88195",
    claimStatus: "Submitted (277CA Accepted)"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_INSURANCE_PAYERS, MOCK_BILLING_INVOICES };
}
