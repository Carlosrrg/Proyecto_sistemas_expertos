var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombreCategoria: String,
        fechaAnadio: String,
        descripcionCategoria: String
    }
);

module.exports = mongoose.model('categorias', esquema);