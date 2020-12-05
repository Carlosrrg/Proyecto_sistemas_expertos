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
        bloquear: Boolean,
        datosEmpresa: mongoose.SchemaTypes.Mixed,
        administracionRecursos: Array,
        administracionPaginas: Array,
        configuracionSitio: mongoose.SchemaTypes.Mixed,
        registroCategorias: Array,
        registroProductos: Array
    }
);

module.exports = mongoose.model('empresas', esquema);