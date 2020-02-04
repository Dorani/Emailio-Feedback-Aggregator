const requireLogin = require('../middlewares/requireLogin')


module.exports = app => {
  //if you are logged in and have credits then you can send out a survey, middlewares
  app.post('/api/surveys', requireLogin, (req, res) => {

  });
};
