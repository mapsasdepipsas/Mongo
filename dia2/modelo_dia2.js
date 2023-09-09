let mongoose = require("mongoose");
let Photos = require("./esquema_dia2");

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})


//hacer nuevo documento 

//Documento PHOTOS

// let photoDocument = new Photos({
//     nombreusuario: "Maria",
//     url: "https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg",
//     titulo: "Paisaje montaña",
//     descripcion: "Una foto de una montaña"
// });

// photoDocument.save()
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((err) =>
// {
//     console.log(err);
// })


let foto1 = new Photos(
    {
        nombreusuario: "Fernando",
        url: "https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg",
        titulo: "Persona sentada en la montaña",
        descripcion: "Una persona mirando las montañas sentada en frente de un lago."
    }
);

let foto2 = new Photos(
    {
        nombreusuario: "Juan",
        url: "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
        titulo: "Atardecer en la playa",
        descripcion: "Una foto de una playa al atardecer."
    }
);

let foto3 = new Photos(
    {
        nombreusuario: "Pilar",
        url: "https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg",
        titulo: "Girasoles",
        descripcion: "Un campo de girasoles con el cielo nublado."
    }
);

let foto4 = new Photos(
    {
        nombreusuario: "Ainoa",
        url: "https://sobremesa.es/upload/images/02_2022/4106_noruega-fiordo-de-los-suenos.jpg",
        titulo: "Fiordos noruegos",
        descripcion: "Una foto de los fiordos noruegos."
    }
);

module.exports = {foto1,foto2,foto3,foto4};