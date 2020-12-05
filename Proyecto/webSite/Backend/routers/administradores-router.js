var express = require('express');
var router = express.Router();
var administrador = require('../models/administradores');
var mongoose = require('mongoose');

//todos los administradores
router.get('/',function(req, res){
    administrador.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//agregar un administrador (administrador de sitio)
router.post('/registrar', function(req, res){
    let administradorAnadir = new administrador({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        usuarioPlataforma: req.body.usuarioPlataforma,
        nivelPrioridad: req.body.nivelPrioridad,
        eliminar: req.body.eliminar,
        planesAnadidos: [],
        plantillasAnadidas: []
    });
    administradorAnadir.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    }); 
});

module.exports = router;