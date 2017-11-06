const express = require('express');
const app = express();
const path = require('path');

// prepare server
app.use('/css',express.static(__dirname + '/www/css') );
app.use('/', express.static(__dirname + '/www')); // redirect root

app .get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));

});


app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port 8000!')
});
