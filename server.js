const express = require('express');
const app = express();
const path = require('path');
const parser = require('json-parser');
const storage = require('./storage.js');

app.set('view engine', 'hbs');
app.use(express.static('views'));
app.use(express.static('www'));
// prepare server
app.use('/css',express.static(__dirname + '/www/css'));
app.use('/js', express.static(__dirname + '/www/js'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/websites', express.static(__dirname + '/www/websites/diatbetes'));
   //res.sendFile(path.join(__dirname + '/index.html'));
   app.get('/', function (req, res) {

   res.render('index', {
     title      : storage.title,
     about      : storage.about,
     intro_text : storage.intro_text,
     about      : storage.about,
     summary    : storage.summary
    });

});

app.get('/websites', function(req, res){
 //res.sendFile(path.join(__dirname + '/projects.hbs'));
  res.render('websites', {
    title : storage.projects_title,
    text  : storage.projects_text
  });
});

app.get('/games', function(req, res){
  res.render('games', {
    title : "Games"

  });
});


/*
app.get('/api', function(req, res){
  var data = {
    "a": "codez1",
    "b": "code "
  }

//  var object = JSON.parse(object);
  res.send(data);

});
*/
app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port 8000!');
  console.log(storage.summary);
});
