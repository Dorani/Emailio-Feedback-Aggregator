const passport = require('passport');



//Authenticate the user with the string 'google'
//which we have access through the GoogleStrategy object:

module.exports = (app) => {
  app.get("/auth/google", passport.authenticate('google', {
    //the scope specifies to google, what access we want to have more this users profile
    //these 2 strings, are not randomly made up
    //we can use different scopes in the oauth process
    scope: ['profile', 'email']
    })
  );

  //the second parameter of line 44 get request will not be handled by us,
  //the google strategy through passport, will do that for us, it will take the request and resolve it
  //into an actual profile.

  //when a user gets sent back to this route, inside the url they will have the code available
  //so when we send this request to passport, in this case, passport will see the code into the url
  //google will then exhange the code for a profile

  app.get("/auth/google/callback", passport.authenticate('google'));


  //whenever a authenticated makes a req to the following route,
  //we will log that user out

  app.get('/api/logout', (req, res) => {
    //passport will help us logout
    //attached to the req object
    //takes the cookie and kills the id in there

    req.logout();
    res.send('Logged out!', req.user)
  });

  //Api route that returns who is logged currently into our app
                          //Flow:

  //the request comes in, the cookie session we just wired up
  // will extract all the data out the cookie
  // passport pulls out the id
  // that id is passed to the deserialize user function
  // which turns the id into a user
  // then that user is passed to our req object
  // then the req goes to the route handler
  app.get("/api/current_user", (req, res) => {
    res.send(req.user)
  });
}
