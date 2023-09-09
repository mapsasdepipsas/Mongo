//RETO 1 

let mongoose = require("mongoose");
let Photos = require('./esquema_dia2');

//Importar fotos del modelo
let fotos = require('./modelo_dia2');
let foto1 = fotos.foto1;
let foto2 = fotos.foto2;
let foto3 = fotos.foto3;
let foto4 = fotos.foto4;

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false});


//SUBIDA DE FOTOS
//Dado 1 usuario, url, titulo y descrip, guardar en coleccion photos
function addPhoto(nombreusuario,url,titulo,descripcion){
    let photo = new Photos({
        nombreusuario: nombreusuario,
        url: url,
        titulo: titulo,
        descripcion: descripcion
    });
    Photos.create(photo)
        .then((data) => {
            console.log("Documento guardado");
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
}
//Prueba

// addPhoto(foto1.nombreusuario,foto1.url,foto1.titulo, foto1.descripcion);
// addPhoto(foto2.nombreusuario,foto2.url,foto2.titulo, foto2.descripcion);
// addPhoto(foto3.nombreusuario,foto3.url,foto3.titulo, foto3.descripcion);
// addPhoto(foto4.nombreusuario,foto4.url,foto4.titulo, foto4.descripcion);



//OBTENER FOTOS
//Dado 1 usuario obtener todas sus fotos
    Photos.find({ nombreusuario: "Ainoa" }, 'url')
    .then((data) => {
        for (let foto of data) {
            console.log(foto.url);
        }
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error: " + err);
    });


//Prueba
////getPhotos("Juan");
//getPhotos("Ainoa");



//MODIFICAR FOTOS
//Dado el titulo de foto, modificar su descripcion
    Photos.updateMany(
        {titulo: "Fiordos noruegos"}, {descripcion: "Una foto muy bonita de los fiordos noruegos"}
        )
        .then((data) => {
            console.log('Foto actualizada');
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });


//Dado el titulo de foto, modificar su descripcion
// function modifyPhotos(titulo,descripcion){
//     Photos.findOneAndUpdate({titulo: titulo}, {descripcion: descripcion})
//         .then((data) => {
//             console.log('Foto actualizada');
//             console.log(data);
//             mongoose.disconnect();
//         })
//         .catch((err) => {
//             console.log("Error: " + err);
//         });
// }

//Prueba
//modifyPhotos('Atardecer en la playa','Una foto de una playa con el cielo rosa por el atardecer');





//ELIMINAR FOTO
//Dado 1 usuario y titulo, eliminar esa foto

    Photos.updateOne(
        { nombreusuario: "Juan", titulo: "Atardecer en la playa" },
        { $unset: {url: 1 } }
    )
    .then(function(data) {
        console.log("URL eliminada");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function() {
        console.log("Error al eliminar la URL de la foto");
    });


//Prueba
// delPhoto("Juan", "Atardecer en la playa")



//ELIMINAR TODAS FOTOS
//Dado 1 usuario eliminar todas sus fotos

Photos.updateMany(
    { nombreusuario: "Fernando" },
    { $unset: { url: "" } }
)
.then(function(data) {
    console.log("Todas las URL eliminadas");
    console.log(data);
    mongoose.disconnect();
})
.catch(function(err) {
    console.log("Error al eliminar las URLs de las fotos: " + err);
});



//AÑADIR NUEVA FOTO A UN USUARIO
// foto1.save()
//     .then((data) => {
//         console.log("Usuario guardado en la base de datos");
//         console.log(data);
//         let nuevaFoto = new Photos(
//             {
//                 nombreusuario: "Fernando",
//                 url: "https://etheriamagazine.com/wp-content/uploads/2020/03/Paisajes-islandia-cascada-900x545.jpg",
//                 titulo: "Paisaje cascada",
//                 descripcion: "Una cascada en la montaña"
//             }
//         );

//         // Guardar la nueva foto en la base de datos
//         nuevaFoto.save()
//             .then((data) => {
//                 console.log("Foto añadida");
//                 console.log(data);
//                 mongoose.disconnect();
//             })
//             .catch((err) => {
//                 console.log("Error: " + err);
//                 mongoose.disconnect();
//             });
//     });
// guardamos usuario1 en la bbdd usando save, y luego creamos una nueva foto para el mismo usuario y la guardamos también en la bbdd