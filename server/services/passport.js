//gives express the idea of how to handle authentication
const passport = require("passport");
//used to instruct passport on how to authenticate
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys")


//creates a new instance of the google passport Strategy
//tells passport to use this service
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback"
      //this is where the user will go while waiting to be authenticated

    },
    //the info we get back from google, this is where we can create a user
    //save it to the DB
    (accessToken, refreshToken, profile, done) => {
      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);
      console.log('Profile:', profile);
      
    }
  )
);
