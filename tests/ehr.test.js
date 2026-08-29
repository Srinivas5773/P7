const test = require('node:test');
const assert = require('node:assert');
const { MOCK_PATIENTS } = require('../js/data/mock-patients.js');
const { MOCK_ICD10_CODES, MOCK_CPT_CODES } = require('../js/data/mock-icd10.js');

test('EHR & Coding - Patient records integrity', () => {
  assert.ok(Array.isArray(MOCK_PATIENTS));
  assert.ok(MOCK_PATIENTS.length >= 5);

  const patient = MOCK_PATIENTS[0];
  assert.strictEqual(patient.id, 'PAT-1001');
  assert.ok(patient.vitals.heartRate > 0);
  assert.ok(Array.isArray(patient.allergies));
  assert.ok(Array.isArray(patient.diagnoses));
  assert.ok(Array.isArray(patient.prescriptions));
});

test('EHR & Coding - ICD-10 and CPT coding dictionaries', () => {
  assert.ok(Array.isArray(MOCK_ICD10_CODES));
  assert.ok(MOCK_ICD10_CODES.length >= 20);

  const htn = MOCK_ICD10_CODES.find(c => c.code === 'I10');
  assert.ok(htn);
  assert.ok(htn.description.includes('hypertension'));

  assert.ok(Array.isArray(MOCK_CPT_CODES));
  const ecgCpt = MOCK_CPT_CODES.find(c => c.code === '93000');
  assert.ok(ecgCpt);
  assert.strictEqual(ecgCpt.baseFee, 75.00);
});
