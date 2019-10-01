const express = require("express");
const mongoose = require("mongoose");
const app = express();

require('./models/User')
require('./services/passport');
require('./routes/authRoutes')(app);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emaily");

const PORT = process.env.PORT || 5000;

























app.listen(PORT, () => {
  console.log(`App is listening for request on ${PORT}`);
});
