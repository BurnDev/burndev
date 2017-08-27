const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // todo: fix build
//  // app.use(express.static('client/build'));
//  app.use(express.static('client/public'));
// }

app.use(express.static('client/public'));

//setup sendgrid options
var helper = require('sendgrid').mail;
var toEmail = new helper.Email('draisy@gmail.com');
var subject = 'Your BurnDev Contact Request';
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

app.post('/api/contact', (req, res) => {
  var data = req.body,
    from = new helper.Email(data.email, data.name),
    content = new helper.Content('text/plain', data.message),
    mail = new helper.Mail(from, subject, toEmail, content),
    request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
      res.json(error);
    }
    console.log('code', response.statusCode);
    console.log('body', response.body);
    console.log('headers', response.headers);
    res.json(response);
  });

});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
