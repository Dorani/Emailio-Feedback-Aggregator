const express = require("express");
const mongoose = require("mongoose");
const app = express();

const keys = require("./config/keys");

require('./models/User')
require('./services/passport');
require('./routes/authRoutes')(app);
// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emaily");
mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;

























app.listen(PORT, () => {
  console.log(`App is listening for request on ${PORT}`);
});
