const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplates = require('../services/emailTemplates/surveyTemplate')


const Survey = mongoose.model('surveys');

module.exports = app => {
  //if you are logged in and have credits then you can send out a survey, middlewares
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipient } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    //Send an email
    const mailer = new Mailer(survey, surveyTemplate);
  });
};
