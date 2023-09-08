//ESQUEMA

const mongoose = require("mongoose");

//creamos el ESQUEMA USER. sus campos y el tipo de dato q tendra cada 1
const UserSchema = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
            function(password)
            {
                return password.length >= 6;
            },

            "La contraseña debe contener mín. 6 caracteres"],
            select: false  
    }, //validador (validacion propia)
})

// //MIDDLEWARE
UserSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if(this.password >= 6){
        console.log("Has introducido una contraseña de 6 o mas caracteres");
        next();

    }else{
        console.log("Tu contraseña debe ser mas larga (6 caract. min.)");
    }
});

module.exports = mongoose.model("User", UserSchema) //exportamos. 
//"User"= nombre del modelo
//UserSchema el esquema en el que se va a basar el modelo
//1 tercer parametro podria ponerse, seria el nombre que va a recibir el modelo dentro de la bbdd


//ESQUEMA CREDENTIALS

const CredentialSchema = new mongoose.Schema({
    address: String,
    phone: Number, 
    email: String
})

// // //MIDDLEWARE
CredentialSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if(this.phone >= 9){
        console.log("Has introducido un telefono de 9 o mas dígitos");
        next();

    }else{
        console.log("Tu telefono debe contener 9 dígitos mínimo");
    }
});

module.exports = mongoose.model("Credentials", CredentialSchema)


// //ESQUEMA PROFILE

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol:{
        type:String,
        required: true
    }, 
    verified: Boolean //validador
})

module.exports = mongoose.model("Profile", ProfileSchema)