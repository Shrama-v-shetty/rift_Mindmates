// models/Result.js
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  patient_id: String,
  drug: String,
  risk_assessment: Object,
  pharmacogenomic_profile: Object,
  clinical_recommendation: Object,
  llm_generated_explanation: Object,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', resultSchema);

