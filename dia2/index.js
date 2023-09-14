let mongoose = require('mongoose');
let Photo = require('./photo')

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})

let subirfoto= (nombreusuario, url, titulo, descripcion) => {
  let data= new Photo({
    nombreusuario: nombreusuario,
    url: url,
    titulo: titulo,
    descripcion: descripcion,
  })
  Photo.create(data)
    .then(data =>{
      console.log("Documento creado");
      console.log(data)
    })
    .catch(err => console.log(err))
}

let obtenerfotosUsuario= nombreusuario => {
  Photo.find({nombreusuario: nombreusuario })
    .then(data => console.log(data))

    .catch(err => console.log(err))
}

let actualizarDescrip = (titulo, descripcion) => {
  Photo.findOneAndUpdate({ titulo: titulo }, { descripcion: descripcion })
    .then(data => 
        {console.log("Descripcion actualizada"); 
        console.log(data)})

    .catch(err => console.log(err))
}


let borrarFoto = (nombreusuario, titulo) => {
  Photo.deleteOne({ nombreusuario: nombreusuario, titulo: titulo })
.then(data =>
    {console.log("Foto eliminada"); 
    console.log(data)})

.catch(err => console.log(err))
}

let borrarFotos = (nombreusuario) => {
  Photo.deleteMany({ nombreusuario: nombreusuario })
.then(data => { console.log("Fotos eliminadas"); 
    console.log(data)})

.catch(err => console.log(err))
}

//subirfoto('Sara', 'https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg', 'Girasoles', 'Un campo de girasoles')

//obtenerfotosUsuario("Ramon")

//actualizarDescrip('Girasoles', 'Una foto muy bonita')

//borrarFoto('Pilar', 'Girasoles')

borrarFotos('Sara')