var express = require('express');
var router = express.Router();
var categorias = require('../models/categorias');
var mongoose = require('mongoose');

//todos los administradores
router.get('/',function(req, res){
    categorias.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});



module.exports = router;