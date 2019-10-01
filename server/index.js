const express = require("express");
const mongoose = require("mongoose");


require('./services/passport');
require('/.models/User')
const app = express();

require('./routes/authRoutes')(app);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

const PORT = process.env.PORT || 5000;

























app.listen(PORT, () => {
  console.log(`App is listening for request on ${PORT}`);
});
