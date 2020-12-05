var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        correo: String,
        contrasena: String,
        usuarioPlataforma: String,
        nivelPrioridad: String,
        eliminar:Boolean,
        planesAnadidos: Array,
        plantillasAnadidas: Array
    }
);

module.exports = mongoose.model('administradores', esquema);