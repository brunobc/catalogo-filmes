var express = require('express');
var path = require('path');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/lista', routes.lista);
app.post('/grava', routes.grava);
app.delete('/filme/:id', routes.deleta);

app.set('port', process.env.PORT || 3000);


var server = app.listen(app.get('port'), function() {
  console.log('Servidor foi iniciado na porta ' + server.address().port);
});


