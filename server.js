const express = require('express');
const app = express();
const path = require('path');
const parser = require('json-parser');
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
     title      : "Phillip Salazar",
     about      : "A student of software.",
     intro_text : "Welcome to Phillipjs. A thing about Javascript!",
     about      : "About Me!",
     summary    : "I am a self-taught developer, that likes to work in web development. " +
                  "I like to make HTML5 games, and design websites. " +
                  "I also run a web site called"
    });

});

app.get('/about', function(req, res){
/*
  res.render('about' {
    name : ""
  });
  */
});

app.get('/api', function(req, res){
  var data = {
    "a": "codez1",
    "b": "code "
  }
//  var object = JSON.parse(object);
  res.send(data);

});

app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port 8000!')
});
