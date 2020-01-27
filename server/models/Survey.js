const mongoose = require('mongoose');
const { Schema } = mongoose;

const SurveySchema = new Schema({
  title: String,
  body: String,
  body: String,
  recipients: [String]
});

mongoose.model('surveys', surveySchema)
