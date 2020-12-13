var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');
var mongoose = require('mongoose');

//todos los usuarios
router.get('/',function(req, res){
    usuario.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//agregar un usuario (Cliente)
router.post('/registrar', function(req, res){
    let usuarioAnadir = new usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        telefono: req.body.telefono,
        pais: req.body.pais,
        estado: req.body.estado,
        codigoPostal: req.body.codigoPostal,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        genero: req.body.genero,
        metodoPagos: [],
        historialCompras: []
    });
    usuarioAnadir.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    }); 
});

//obtener un usuario seleccionado
router.get('/:idUsuario/detalles',function(req, res){
    usuario.find(
        {
            _id: req.params.idUsuario
        },
        {})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//actualizar la contrasena
router.put('/:idUsuario/cambio-contrasena',function(req, res){
    usuario.update(
        {_id:req.params.idUsuario},
        {
            contrasena: req.body.contrasena,
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;