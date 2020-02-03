const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = require('./Recipient')

const SurveySchema = new Schema({
  title: String,
  body: String,
  body: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0},
});

mongoose.model('surveys', SurveySchema)
