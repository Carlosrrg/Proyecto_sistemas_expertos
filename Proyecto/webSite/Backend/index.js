var express = require('express');

var app = express();

/*app.get('/', function(req, res){
    res.send('servidor de backend en linea');
});*/

app.use(express.static('public'));

app.listen(8888, function(){
    console.log('Servidor de backend de proyecto en puerto 8888 levantado');
});