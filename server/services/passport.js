//gives express the idea of how to handle authentication
const passport = require("passport");
//used to instruct passport on how to authenticate
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');


const User = mongoose.model('users');

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

      //look through users collection and find the first record with a
      //google id of profile id, this avoids dups

      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            //great we already have a record with the given profile id
            //this tells passport null means we are finished, here is the user we just created
            //everything is done.
            done(null, existingUser)
          } else {
            //we don't have this user, so make a new record
            new User({ googleId: profile.id }).save()
              .then(user => done(null, user));
          };
        })
    }
  )
);
