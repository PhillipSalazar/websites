const express = require('express');
const app = express();
const path = require('path');
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
     title : "Phillip Salazar",
     about : "A student of software."
    });

});


app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port 8000!')
});
