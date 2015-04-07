var express = require('express');
var path = require('path');
var routes = require('./routes');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.get('/', routes.index);

var server = app.listen(app.get('port'), function() {
  console.log('Servidor foi iniciado na porta ' + server.address().port);
});


