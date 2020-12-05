var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var database = require('./modules/dataBase');
var usuariosRouter = require('./routers/usuarios-router');
var administradoresRouter = require('./routers/administradores-router');
var empresasRouter = require('./routers/empresas-router');
var categoriasRouter = require('./routers/categorias-router');
var planesRouter = require('./routers/planes-router');

var app = express();

app.get('/', function(req, res){
    res.send('servidor de backend en linea');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', usuariosRouter);
app.use('/administradores', administradoresRouter);
app.use('/empresas', empresasRouter);
app.use('/categorias', categoriasRouter);
app.use('/planes', planesRouter);

//app.use(express.static('public'));

app.listen(8888, function(){
    console.log('Servidor de backend de proyecto en puerto 8888 levantado');
});