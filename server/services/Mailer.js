const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys');


class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content ) {

    super();

    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);
    //the Mail class has addContent built into it, we get it when we extend to it
    this.addContent(this.body);

    //enable click tracking in our email
    this.addClickTracking();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSetting = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);

    this.addTrackingSetting(trackingSettings);
  }
}

module.exports = Mailer;
