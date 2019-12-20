//gives express the idea of how to handle authentication
const passport = require("passport");
//used to instruct passport on how to authenticate
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');


const User = mongoose.model('users');

//define a function and pass it to serialize user
//first argument is user model
  //which user? well - rememeber when our client comes from the oath flow
  // the profile goes into the google strategy callback
  //   from that callback, we either retrieve a user instance or we create a new one
//So essentially, user represents, the "existingUser" we pulled out from
//our strategy promise
//second parameter is done

passport.serializeUser((user, done) => {
  //done is a callback, fyi, that we have to call
  // after we have done some work for nudgin passport along
    //first argument represents that nothing went wrong, null
    //second is the identifying piece of info (short cut to the mongo generated id),
    //so for the cookie - we will use the mongo id
      //the reason is we can make use of multiple diff auth providers
      //cause 1 user may have diff oauth strategies
      //to id the user on followup requests
  done(null, user.id);
});

//Deserilaize user
  //will take the id that we previously stuffed in the cookie
  //and turn it back into a mongoose model instance

passport.deserializeUser((id, done) => {
  //we want to search over all of our diff users in our DB
  //after we find a particular user
  //we will call done with that user

  User.findById(id)
    .then((user) => {
      done(null, user)
    });
});


//creates a new instance of the google passport Strategy
//tells passport to use this service
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
      //this is where the user will go while waiting to be authenticated

    },
    //the info we get back from google, this is where we can create a user
    //save it to the DB
    async (accessToken, refreshToken, profile, done) => {
      //look through users collection and find the first record with a
      //google id of profile id, this avoids dups
      const existingUser = await User.findOne({ googleId: profile.id, displayName: profile.displayName})
      if (existingUser) {
        //great we already have a record with the given profile id
        //this tells passport null means we are finished, here is the user we just created
        //everything is done.
        return done(null, existingUser);

        //we don't have this user, so make a new record
      };
      const user = await new User({ googleId: profile.id, displayName: profile.displayName }).save()
      done(null, user);
    }
  )
);



//
// //---------- OLD WAY ----------------//
//
// //gives express the idea of how to handle authentication
// const passport = require("passport");
// //used to instruct passport on how to authenticate
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const keys = require("../config/keys");
// const mongoose = require('mongoose');
//
//
// const User = mongoose.model('users');
//
// //define a function and pass it to serialize user
// //first argument is user model
//   //which user? well - rememeber when our client comes from the oath flow
//   // the profile goes into the google strategy callback
//   //   from that callback, we either retrieve a user instance or we create a new one
// //So essentially, user represents, the "existingUser" we pulled out from
// //our strategy promise
// //second parameter is done
//
// passport.serializeUser((user, done) => {
//   //done is a callback, fyi, that we have to call
//   // after we have done some work for nudgin passport along
//     //first argument represents that nothing went wrong, null
//     //second is the identifying piece of info (short cut to the mongo generated id),
//     //so for the cookie - we will use the mongo id
//       //the reason is we can make use of multiple diff auth providers
//       //cause 1 user may have diff oauth strategies
//       //to id the user on followup requests
//   done(null, user.id);
// });
//
// //Deserilaize user
//   //will take the id that we previously stuffed in the cookie
//   //and turn it back into a mongoose model instance
//
// passport.deserializeUser((id, done) => {
//   //we want to search over all of our diff users in our DB
//   //after we find a particular user
//   //we will call done with that user
//
//   User.findById(id)
//     .then((user) => {
//       done(null, user)
//     });
// });
//
//
// //creates a new instance of the google passport Strategy
// //tells passport to use this service
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: "/auth/google/callback",
//       proxy: true
//       //this is where the user will go while waiting to be authenticated
//
//     },
//     //the info we get back from google, this is where we can create a user
//     //save it to the DB
//     (accessToken, refreshToken, profile, done) => {
//
//       //look through users collection and find the first record with a
//       //google id of profile id, this avoids dups
//
//       User.findOne({ googleId: profile.id, displayName: profile.displayName  })
//         .then((existingUser) => {
//           if (existingUser) {
//             //great we already have a record with the given profile id
//             //this tells passport null means we are finished, here is the user we just created
//             //everything is done.
//             done(null, existingUser)
//           } else {
//             //we don't have this user, so make a new record
//             new User({ googleId: profile.id, displayName: profile.displayName })
//               .save()
//               .then(user => done(null, user));
//           };
//         })
//     }
//   )
// );
