var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'komikrish02@gmail.com',
    pass: 'bbnnc34f5'
  }
});

var mailOptions = {
  from: 'komikrish02@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
