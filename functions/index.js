const functions = require('firebase-functions');
const admin = require(`firebase-admin`);

admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmailNotification = functions.firestore.document('submissions/{docId}').onCreate( (snapshot, ctx) => {
  const data = snapshot.data();
  let authData = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASSWORD
    }
  });

  authData.sendMail({
    from: 'mariaom.jobs@gmail.com',
    to: `${data.email}`,
    subject: 'Contacto',
    text: `${data.message}`,
    html: `${data.email}`,
  }).then( res => console.log('succesfully sent that mail')).catch( error => console.log(error));
})


