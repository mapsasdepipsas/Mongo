let mongoose = require('mongoose')

let photoSchema = new mongoose.Schema({
  nombreusuario: String,
  url: String,
  titulo: String,
  descripcion: String,
});

module.exports = mongoose.model("photo", photoSchema)