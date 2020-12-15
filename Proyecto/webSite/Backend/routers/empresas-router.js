var express = require('express');
var router = express.Router();
var empresa = require('../models/empresas');
var mongoose = require('mongoose');

//todos los administradores
router.get('/',function(req, res){
    empresa.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//agregar una empresa (usuario tipo empresa)
router.post('/registrar', function(req, res){
    let empresaAnadir = new empresa({
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
        bloquear: req.body.bloquear,
        datosEmpresa: {
            nombreEmpresa: req.body.nombreEmpresa,
            descripcionEmpresa: req.body.descripcionEmpresa,
            direccionEmpresa: req.body.direccionEmpresa,
            telefono: req.body.telefono1,
            correoEmpresa: req.body.correoEmpresa,
            categoriaEmpresa: req.body.categoriaEmpresa,
            planObtenido: req.body.planObtenido,
        },
        administracionRecursos: [],
        administracionPaginas: [],
        configuracionSitio: {
            tituloSitio: req.body.tituloSitio,
            descripcionSitio: req.body.descripcionSitio,
            palabrasClaves: [],
            logo: req.body.logo,
            favico: req.body.favico,
            codigoExtraCss: req.body.codigoExtraCss,
            codigoExtraJs: req.body.codigoExtraJs,
            encabezados: [],
            footers: []
        },
        registroCategorias: [],
        registroProductos: []
    });
    empresaAnadir.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    }); 
});

//Obtener una empresa seleccionada
router.get('/:idEmpresa/detalles',function(req, res){
    empresa.find(
        {
            _id: req.params.idEmpresa
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

//actualizar los datos de una empresa
router.put('/:idEmpresa/actualizar-datos',function(req, res){
    empresa.update(
        {_id:req.params.idEmpresa},
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            telefono: req.body.telefono,
            pais: req.body.pais,
            estado: req.body.estado,
            codigoPostal: req.body.codigoPostal,
            ciudad: req.body.ciudad,
            direccion: req.body.direccion,
            genero: req.body.genero
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//actualizar la contrasena
router.put('/:idEmpresa/cambio-contrasena',function(req, res){
    empresa.update(
        {_id:req.params.idEmpresa},
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

//datos de empresa
router.put('/:idEmpresa/datos-empresa',function(req, res){
    empresa.update(
        {_id:req.params.idEmpresa},
        {
            datosEmpresa:{
                nombreEmpresa: req.body.nombreEmpresa,
                descripcionEmpresa: req.body.descripcionEmpresa,
                direccionEmpresa: req.body.direccionEmpresa,
                telefono: req.body.telefono,
                correoEmpresa: req.body.correoEmpresa,
                categoriaEmpresa: req.body.categoriaEmpresa,
                planObtenido: req.body.planObtenido    
            }
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