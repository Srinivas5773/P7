const test = require('node:test');
const assert = require('node:assert');
const { MOCK_INSURANCE_PAYERS, MOCK_BILLING_INVOICES } = require('../js/data/mock-insurance.js');

test('Billing & Payer Network - Insurance data integrity', () => {
  assert.ok(Array.isArray(MOCK_INSURANCE_PAYERS));
  assert.ok(MOCK_INSURANCE_PAYERS.length >= 4);

  const bcbs = MOCK_INSURANCE_PAYERS.find(p => p.id === 'PAYER-BCBS');
  assert.ok(bcbs);
  assert.strictEqual(bcbs.electronicClaimPayerId, 'BCBSMA');

  assert.ok(Array.isArray(MOCK_BILLING_INVOICES));
  const inv = MOCK_BILLING_INVOICES[0];
  assert.ok(inv.subtotal > 0);
  assert.ok(inv.items.length >= 1);
});
