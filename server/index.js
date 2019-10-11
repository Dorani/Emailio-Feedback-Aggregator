const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require("./config/keys");

const app = express();

app.use(
  cookieSession({
    //how long can the cookie live in the browser before it expires
    //30 days before expiration
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //key used to encrypt the cookie
    //allows us to specify multiple keys as an additional amount of security
    keys: [keys.cookieKey]
  })
)


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
