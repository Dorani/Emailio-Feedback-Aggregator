const mongoose = require('mongoose');

const { Schema } = mongoose
//const Schema = mongoose.Schema;


const UserSchema = new Schema({
  googleId: String,
  displayName: String,
  credits: { type: Number, default: 0 }
});


mongoose.model('users', UserSchema);
