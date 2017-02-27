import express from 'express';


import bodyparser from 'body-parser';
import mongoose from 'mongoose';


import config from './public/js/config.js';


// let db = mongoose.connection;

let app = express();


let PORT = config.PORT;


var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');


// //Let's use the body-parser middleware
// app.use(bodyparser.text({type: 'application/graphql'}));

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb'}));



app.use(express.static(__dirname + '/public'));


app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});


// Contact mail

app.post('/contact_mail', function(req, res) {

 var firstName = req.body.firstName;
 var lastName = req.body.lastName;
 var email = req.body.email;
 var message = req.body.message;
 console.log("firstName is "+firstName+"   "+"lastName is "+lastName+"   "+"email is "+email+"   "+"message is "+message+"   ");



 var newContact= {};

     newContact.firstName = firstName;
     newContact.lastName = lastName;
     newContact.email = email;
     newContact.message = message;




    //res.status(200).send(newContact);
  //start


  // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
  var auth = {
    auth: {
      api_key: 'key-38227019ec4ec6d8f7c128ba9ff41f1a',
      domain: 'sandbox60dd7f6b49294cbd8af4a03c66bc6407.mailgun.org'
    }
  }
// ashokashok068@gmail.com
  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: email,
    to: 'ashokashok068@gmail.com', // An array if you have multiple recipients.
    subject: 'Contact mail',
    text: 'Details are \n\n First name is '+firstName+'\n\n Last name is '+lastName+'\n\n Email is '+email+'\n\nThank You\n'
  }, function (err1, info1) {
    if (err1) {
      console.log('Error1: ' + err1);
        res.status(404).send(err1);
    }
    else {
          // starts
      console.log("First mail sent");
            res.status(200).send(newContact);
          //end
    }
  });


  // nodemailerMailgun.sendMail({
  //   from: 'gouthamrs4u@gmail.com',
  //   to: email, // An array if you have multiple recipients.
  //   subject: 'Hey working, man!',
  //   text: 'Thanks '+firstName+'  for reaching me. I will get back to you soon..',
  // }, function (err2, info2) {
  //   if (err2) {
  //     console.log('Error2: ' + err2);
  //       res.status(404).send(err2);
  //   }
  //   else {
  //           console.log("second mail also sent");
  //           res.status(200).send(newContact);
  //   }
  // });
  // end

});

let server = app.listen(process.env.PORT || PORT, function () {
	console.log(`Server listening at ${PORT}`+ " at " +new Date());
//	mongoose.connect('mongodb://localhost/'+config.DATABASE);
});


/*
var http=require('http');

http.createServer(app).listen(8081, '10.132.88.171');
mongoose.connect('mongodb://localhost/'+config.DATABASE);
console.log("Server running at http://10.132.88.171:8081/"+ " at " +new Date());
*/
