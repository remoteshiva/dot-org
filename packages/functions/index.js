const functions = require('firebase-functions');
const domain = 'mg.remoteshiva.org';
const mg = require('mailgun-js')({
  apiKey: functions.config().mailgun.key,
  domain,
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!');
// });

// Sends an email confirmation when a subscribes for updates
exports.sendEarlyAdopterConfirmation = functions.firestore
  .document('earlyadopters/{email}')
  .onCreate((snap, context) => {
    const doc = snap.data();
    const toEmail = context.params.email;
    const toFullName = doc.fullName;

    // Mailgun Documentation: https://documentation.mailgun.com/en/latest/user_manual.html#templates
    const data = {
      from: 'RemoteShiva <info@remoteshiva.org>',
      to: toEmail,
      subject: 'Thank you from RemoteShiva',
      template: 'send_early_adopter_confirmation',
      'h:X-Mailgun-Variables': `{"fullName": "${toFullName}", "email": "${toEmail}"}`,
    };
    console.log(`onCreate ran with toEmail ${toEmail} and toFullName ${toFullName} and data ${JSON.stringify(data)}`);
    // TODO: This function quits, returning nothing, before the callback runs to mg.messages().send
    mg.messages()
      .send(data)
      .then(() => {
        return snap.ref.set(
          {
            earlyAdopterConfirmationStatus: 'sent',
          },
          { merge: true }
        );
      })
      .catch((error) => {
        return snap.ref.set(
          {
            earlyAdopterConfirmationStatus: `mailgun error ${error}`,
          },
          { merge: true }
        );
      });
  });
