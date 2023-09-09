const mongoose = require("mongoose");

//creamos el ESQUEMA PHOTO. sus campos y el tipo de dato q tendra cada 1
const PhotoSchema = new mongoose.Schema({
    nombreusuario: String,
    url: String,
    titulo: String,
    descripcion: String
})

module.exports = mongoose.model("Photos", PhotoSchema)