const functions = require('firebase-functions');

const domain = 'mg.remoteshiva.org';
const mg = require('mailgun-js')({
  apiKey: functions.config().mailgun.key,
  domain,
});
const axios = require('axios');

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

    const notifySlack = (name, email, isRabbiOrLeader) => {
      let text = `${name} subscribed for updates (${email})`;
      if (isRabbiOrLeader) {
        text = `${text} (Rabbi or Leader)`;
      }
      axios
        .post(functions.config().slack.key, {
          text,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const sendConfirmationEmail = (resultOfAddingToMailingList) => {
      // Mailgun Documentation: https://documentation.mailgun.com/en/latest/user_manual.html#templates
      const data = {
        from: 'RemoteShiva <info@remoteshiva.org>',
        to: toEmail,
        subject: 'Thank you from RemoteShiva',
        template: 'send_early_adopter_confirmation',
        'h:X-Mailgun-Variables': `{"fullName": "${toFullName}", "email": "${toEmail}"}`,
      };
      // TODO: This function quits, returning nothing, before the callback runs to mg.messages().send
      mg.messages().send(data, (error, body) => {
        if (!error) {
          notifySlack(toFullName, toEmail, doc.isRabbiOrLeader);
          return snap.ref.set(
            {
              earlyAdopterConfirmationStatus: 'sent',
              addedToMailingListStatus: resultOfAddingToMailingList,
            },
            { merge: true }
          );
        }
        return snap.ref.set(
          {
            earlyAdopterConfirmationStatus: `mailgun error ${error}`,
            addedToMailingListStatus: resultOfAddingToMailingList,
          },
          { merge: true }
        );
      });
    };

    // 1 - Add user to mailing list for future use
    const list = mg.lists(`earlyadopters@${domain}`);
    const newMember = {
      subscribed: true,
      address: toEmail,
      name: toFullName,
      vars: { isRabbiOrLeader: doc.isRabbiOrLeader },
    };
    list.members().create(newMember, (error, data) => {
      // 2 - Send confirmation email to user
      if (!error) {
        return sendConfirmationEmail(true);
      }
      return sendConfirmationEmail(false);
    });
    return 0;
  });
