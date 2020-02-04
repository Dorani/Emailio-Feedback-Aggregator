const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('.//middlewares/requireCredits')

module.exports = app => {
  //if you are logged in and have credits then you can send out a survey, middlewares
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

  });
};
