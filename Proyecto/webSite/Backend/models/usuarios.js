var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        correo: String,
        contrasena: String,
        telefono: String,
        pais: String,
        estado: String,
        codigoPostal: String,
        ciudad: String,
        direccion: String,
        genero: String,
        metodoPagos: Array,
        historialCompras: Array
    }
);

module.exports = mongoose.model('usuarios', esquema);