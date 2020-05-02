const functions = require('firebase-functions');
const mailgun = require('mailgun-js');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

// Sends an email confirmation when a subscribes for updates
exports.sendEmailConfirmation = functions.https.onRequest(
  (request, response) => {
    const domain = 'mg.remoteshiva.org';
    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain });
    const data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'enderash@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!',
    };
    mg.messages().send(data, function (error, body) {
      response.send(body);
    });
  }
);
