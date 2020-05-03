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
  .onWrite((change, context) => {
    if (
      !change.after.exists ||
      change.after.data().earlyAdopterConfirmationStatus !== undefined
    ) {
      // do nothing if the earlyadopter was deleted or earlyAdopterConfirmationSent is already set
      return;
    }
    const toEmail = context.params.email;
    const toFullName = change.after.data().fullName;
    const domain = 'mg.remoteshiva.org';
    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain });

    // 1 - Add user to mailing list for future use
    const list = mailgun.lists(`earlyadopters@${domain}`);
    const newMember = {
      subscribed: true,
      address: toEmail,
      name: toFullName,
      vars: { isRabbiOrLeader: change.after.data().isRabbiOrLeader },
    };
    list.members().create(newMember, (error, data) => {
      if (!error) {
        // 2 - Send confirmation email to user
        // Mailgun Documentation: https://documentation.mailgun.com/en/latest/user_manual.html#templates
        const data = {
          from: 'RemoteShiva <info@remoteshiva.org>',
          to: toEmail,
          subject: 'Thank you from RemoteShiva',
          template: 'send_early_adopter_confirmation',
          'h:X-Mailgun-Variables': `{"fullName": "${toFullName}", "email": "${toEmail}"}`,
        };
        mg.messages().send(data, function (error2, body) {
          if (!error) {
            return change.after.ref.set(
              {
                earlyAdopterConfirmationStatus: 'sent',
                addedToMailingListStatus: true,
              },
              { merge: true }
            );
          }
          return change.after.ref.set(
            {
              earlyAdopterConfirmationStatus: `mailgun error ${error}`,
              addedToMailingListStatus: true,
            },
            { merge: true }
          );
        });
      } else {
        // could not add them to mailing list
        return change.after.ref.set(
          {
            earlyAdopterConfirmationStatus: `mailgun error ${error}`,
            addedToMailingListStatus: false,
          },
          { merge: true }
        );
      }
    });
  });
