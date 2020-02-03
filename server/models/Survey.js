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
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', SurveySchema)




//Notes for line 13:
//every survey will belong to a particular user
//the reference we are making this to, is the user collection
//this is a relationship field, so we use an underscore, good convention
