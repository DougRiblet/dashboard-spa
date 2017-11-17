var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MONGOOSE 

if(!process.env.MONGODB_URI){
  var uri = require( './uri' ).uri;
} else {
  var uri = process.env.MONGODB_URI;
}

mongoose.Promise = require('bluebird');

mongoose.connect(uri, { useMongoClient: true })
  .then(() => {
    console.log('Mongoose connection established');
  })
  .catch(err => { // if error we will be here
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

// SCHEMA

var dashSchema = mongoose.Schema({
  fullName: String,
  photoURL: String,
  blurb: String
});

var Dash = mongoose.model('Dash', dashSchema);

// ENDPOINTS

app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.get('/allUsers', function(req, res) {
  Dash.find(function(err, data){
    if (err) {
      console.log('Error: ', err);
    } else {
      res.json(data);
    }
  })
});

app.post('/newUser', function(req, res) {
  var newb = new Dash(req.body);
  newb.save()
    .then(item => {
      res.status(200).send(item);
    })
    .catch(err => {
      res.status(400).send("Error saving to database");
    });
});

app.post('/updateUser/:id', function(req, res) {
  Dash.findById(req.params.id, function(err, datum) {
    if (!datum)
      return next(new Error('Could not locate this user'));
    else {
      datum.fullName = req.body.fullName;
      datum.photoURL = req.body.photoURL;
      datum.blurb = req.body.blurb;

      datum.save().then(item => {
        res.status(200).json('Successfully updated');
      })
      .catch(err => {
        res.status(400).send("Could not update");
      });
    }
  });
});

app.delete('/deleteUser/:id', function(req, res) {
  Dash.findByIdAndRemove({_id: req.params.id}, function(err, datum){
    if(err) {
      res.json("Could not delete: ", err);
    } else {
      res.json('Successfully deleted');
    }
  });
});

app.get('/favicon.ico', function (req, res) {
  res.sendStatus(200);
});

app.use(function (req, res, next) {
  res.status(404).send('Error 404');
});

// SERVER

app.listen(port, function () {
  console.log('App listening on port ' + port);
});
