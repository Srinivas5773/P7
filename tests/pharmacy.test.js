const test = require('node:test');
const assert = require('node:assert');
const { MOCK_DRUGS, CLINICAL_DRUG_INTERACTIONS } = require('../js/data/mock-drugs.js');

test('Pharmacy Data - Formulary and Interaction matrix structure', () => {
  assert.ok(Array.isArray(MOCK_DRUGS));
  assert.ok(MOCK_DRUGS.length >= 20);

  const atorvastatin = MOCK_DRUGS.find(d => d.name.includes('Atorvastatin'));
  assert.ok(atorvastatin);
  assert.strictEqual(atorvastatin.atcCode, 'C10AA05');

  // Verify critical drug-drug interaction rule: Sildenafil + Nitroglycerin
  const contraindication = CLINICAL_DRUG_INTERACTIONS.find(
    rule => (rule.drugA === 'DRUG-019' && rule.drugB === 'DRUG-020') ||
            (rule.drugA === 'DRUG-020' && rule.drugB === 'DRUG-019')
  );
  assert.ok(contraindication);
  assert.strictEqual(contraindication.severity, 'CRITICAL_CONTRAINDICATION');
});
