let mongoose = require("mongoose");
let User = require("./esquema_reto2_dia1");
let Credentials = require("./esquema_reto2_dia1");
let Profile = require("./esquema_reto2_dia1");

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})


//hacer nuevo documento 

//Documento USER

let userDocument = new User({
    login: "Hola",
    password: "Holasoycarlos",
});

userDocument.save()
.then((data) =>
{
    console.log(data);
})
.catch((err) =>
{
    console.log(err);
})

//Documento CREDENTIALS

let credentialDocument = new Credentials({
    address: "Calle de la Luz",
    phone: 629740912,
    email: "carlosje@gmail.com",
});

credentialDocument.save()
.then((data) =>
{
    console.log(data);
})
.catch((err) =>
{
    console.log(err);
})


//Documento PROFILE

let profileDocument = new Profile({
    name: "Juana",
    surname: "Martinez",
    dateOfBirth: 1970-1-1,
    comments: "Soy Juana y me gusta la coca cola",
    rol: "user"
})

profileDocument.save()
.then((data)=>
{
    console.log(data);
})
.catch((err)=>
{
    console.log(err);
})