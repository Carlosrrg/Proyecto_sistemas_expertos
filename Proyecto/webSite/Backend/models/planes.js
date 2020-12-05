var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombrePlan: String,
        fechaEdicion: String,
        descripcion: String,
        precio: Number
    }
);

module.exports = mongoose.model('planes', esquema);