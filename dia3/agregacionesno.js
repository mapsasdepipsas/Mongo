const mongoose = require("mongoose");
const MarksModel = require ("./esquema_dia3.js")

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
  { useNewUrlParser: false, useUnifiedTopology: false })

// Reto 1: Implementar todos los puntos con Node
// • Calcular la nota media de los alumnos de una asignatura concreta.

// // EQUIVALENCIA AVG
MarksModel.aggregate([{$group: {"_id": "$subject_name", "Nota media": {"$avg": "$mark"}}}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// • Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
// • Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
// • Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
// • Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
// • Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
// • Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.

