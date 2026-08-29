const test = require('node:test');
const assert = require('node:assert');
const { ClinicalCalculators } = require('../js/modules/clinical-calc.js');

test('ClinicalCalculators - NEWS2 Sepsis Score calculation', () => {
  // Normal physiological patient
  const normalScore = ClinicalCalculators.calculateNEWS2({
    rr: 16,
    spo2: 98,
    onOxygen: false,
    sysBP: 120,
    hr: 75,
    avpu: 'Alert',
    temp: 37.0
  });

  assert.strictEqual(normalScore.totalScore, 0);
  assert.strictEqual(normalScore.clinicalRisk, 'Low Clinical Risk');

  // Critical deteriorating sepsis patient
  const criticalScore = ClinicalCalculators.calculateNEWS2({
    rr: 28, // +3
    spo2: 88, // +3
    onOxygen: true, // +2
    sysBP: 85, // +3
    hr: 135, // +3
    avpu: 'Verbal', // +3
    temp: 39.5 // +2
  });

  assert.ok(criticalScore.totalScore >= 7);
  assert.strictEqual(criticalScore.alertClass, 'badge-danger');
});

test('ClinicalCalculators - eGFR 2021 CKD-EPI equation', () => {
  // 60yo Male with Cr 1.0 mg/dL -> Normal eGFR > 60
  const normalGFR = ClinicalCalculators.calculateEGFR({
    creatinineMgDl: 1.0,
    age: 60,
    gender: 'Male'
  });

  assert.ok(normalGFR.egfr >= 75);

  // Severe renal impairment Cr 3.2 mg/dL -> Stage G4 or G5
  const renalFail = ClinicalCalculators.calculateEGFR({
    creatinineMgDl: 3.2,
    age: 72,
    gender: 'Female'
  });

  assert.ok(renalFail.egfr < 20);
});

test('ClinicalCalculators - CHA2DS2-VASc stroke risk score', () => {
  const score = ClinicalCalculators.calculateCHADS({
    chf: true,
    hypertension: true,
    age: 78, // +2
    diabetes: true,
    strokeTia: false,
    vascularDisease: true,
    gender: 'Male'
  });

  assert.strictEqual(score.score, 6);
  assert.ok(score.recommendation.includes('Oral anticoagulation'));
});

test('ClinicalCalculators - Mean Arterial Pressure (MAP) and Anthropometrics', () => {
  const hemo = ClinicalCalculators.calculateHemodynamics({ sysBP: 120, diaBP: 80 });
  assert.strictEqual(hemo.map, 93);
  assert.strictEqual(hemo.pulsePressure, 40);

  const anthro = ClinicalCalculators.calculateAnthropometrics({ weightKg: 70, heightCm: 175, gender: 'Male' });
  assert.strictEqual(anthro.bmi, 22.9);
  assert.ok(anthro.category.includes('Normal weight'));
});
