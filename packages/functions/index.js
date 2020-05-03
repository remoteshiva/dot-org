const functions = require('firebase-functions');
const mailgun = require('mailgun-js');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

// Sends an email confirmation when a subscribes for updates
exports.sendEarlyAdopterConfirmation = functions.firestore
  .document('earlyadopters/{email}')
  .onCreate((snap, context) => {
    const toEmail = context.params.email;
    const toFullName = snap.data().fullName;

    const domain = 'mg.remoteshiva.org';
    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain });

    // Mailgun Documentation: https://documentation.mailgun.com/en/latest/user_manual.html#templates
    const data = {
      from: 'RemoteShiva <info@remoteshiva.org>',
      to: toEmail,
      subject: 'Thank you from RemoteShiva',
      template: 'send_early_adopter_confirmation',
      'h:X-Mailgun-Variables': `{"fullName": "${toFullName}", "email": "${toEmail}"}`,
    };
    mg.messages().send(data, function (error, body) {
      if (!error) {
        return snap.ref.set(
          {
            earlyAdopterConfirmationStatus: 'sent',
          },
          { merge: true }
        );
      }
      return snap.ref.set(
        {
          earlyAdopterConfirmationStatus: `mailgun error ${error}`,
        },
        { merge: true }
      );
    });
  });
