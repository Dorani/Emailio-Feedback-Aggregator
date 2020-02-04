const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require("./config/keys");
const logger = require("morgan");
const app = express();
const bodyParser = require('body-parser')

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  cookieSession({
    //Life of cookie on the browser, 30 days before expiration.
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //Key used to encrypt the cookie,
    //allows us to specify multiple keys as an additional amount of security
    keys: [keys.cookieKey]
  })
);

//Tell passport to make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());


require('./models/User');
require('./models/Survey')
require('./services/passport');
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


//express behavior in production environment
if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assests, ie: main.js/main.class
  app.use(express.static('client/build'));
  //Express will serve up the index.html file, if it does not recognize the route, catch all case
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });


}


mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then( () => console.log("DB server connected"))
  .catch( e => console.log("DB error", e));








const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`App is listening for request on port ${PORT}`);
});
