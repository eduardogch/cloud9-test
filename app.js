var express = require('express');

var app = express();


app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('*', function(req, res) {
   res.render('index'); 
});

app.listen(process.env.PORT, process.env.IP);