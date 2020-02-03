const mongoose = require('mongoose');

const { Schema } = mongoose;

//Sub document to avoide duplicates
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false}
});


module.exports = recipientSchema;
