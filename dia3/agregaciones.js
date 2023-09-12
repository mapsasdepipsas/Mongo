let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})



const TeacherSchema = new mongoose.Schema(
    {
        teacher_first_name: String,
        teacher_last_name: String,
    })

const MarkSchema = new mongoose.Schema(
    {
        id: Object,
        date: Date,
        mark: Number,
        student_first_name: String,
        student_last_name: String,
        group_name: String,
        subject_name: String,
        teachers: [TeacherSchema]
    })



let MarksModel = mongoose.model("MarksArbol", MarkSchema);

let alumno1 = new MarksModel(
    {
        date: new Date("2020, 01, 21"),
        mark: 7,
        student_first_name: "Juan",
        student_last_name: "Lopez",
        group_name: "A",
        subject_name: "Matematicas",
        teachers: [{
            teacher_first_name: "Pepe",
            teacher_last_name: "Martin",
        }]
        },
        )

let alumno2 = new MarksModel(
    {
        date: new Date("2020, 06, 15"),
        mark: 6,
        student_first_name: "Juana",
        student_last_name: "Rivera",
        group_name: "B",
        subject_name: "Biologia",
        teachers: [{
            teacher_first_name: "Pepe",
            teacher_last_name: "Martin",
        }]
        },
        )

let alumno3 = new MarksModel(
    {
        date: new Date("2023, 09, 02"),
        mark: 9,
        student_first_name: "Noelia",
        student_last_name: "Rueda",
        group_name: "C",
        subject_name: "Ingles",
        teachers: [{
            teacher_first_name: "Cristina",
            teacher_last_name: "Gimenez",
        }]
        },
        )

let alumno4 = new MarksModel(
    {
        date: new Date("2018, 12, 21"),
        mark: 5,
        student_first_name: "Manuela",
        student_last_name: "Villa",
        group_name: "B",
        subject_name: "Biologia",
        teachers: [{
            teacher_first_name: "Pepe",
            teacher_last_name: "Martin",
        }]
        },
        )

let alumno5 = new MarksModel(
    {
        date: new Date("2019, 07, 11"),
        mark: 10,
        student_first_name: "Juan",
        student_last_name: "Lopez",
        group_name: "C",
        subject_name: "Educacion Fisica",
        teachers: [{
            teacher_first_name: "Juana",
            teacher_last_name: "Fuentes",
        }]
        },
        )

let alumno6 = new MarksModel(
    {
        date: new Date("2020, 01, 21"),
        mark: 3,
        student_first_name: "Irene",
        student_last_name: "Garcia",
        group_name: "A",
        subject_name: "Valenciano",
        teachers: [{
            teacher_first_name: "Pepe",
            teacher_last_name: "Martin",
        }]
        },
        )

let alumno7 = new MarksModel(
    {
        date: new Date("2021, 12, 13"),
        mark: 4,
        student_first_name: "Irene",
        student_last_name: "Garcia",
        group_name: "B",
        subject_name: "Educacion Fisica",
        teachers: [{
            teacher_first_name: "Juana",
            teacher_last_name: "Fuentes",
        }]
        },
        )

let alumno8 = new MarksModel(
    {
        date: new Date("2018, 11, 04"),
        mark: 8,
        student_first_name: "Carolina",
        student_last_name: "Fernandez",
        group_name: "C",
        subject_name: "Matematicas",
        teachers: [{
            teacher_first_name: "Pepe",
            teacher_last_name: "Martin",
        }]
        },
        )

let alumno9 = new MarksModel(
    {
        date: new Date("2019, 05, 05"),
        mark: 7,
        student_first_name: "Raquel",
        student_last_name: "Lopez",
        group_name: "D",
        subject_name: "Latin",
        teachers: [{
            teacher_first_name: "Lorena",
            teacher_last_name: "Garcia",
        }]
        },
        )

let alumno10 = new MarksModel(
    {
        date: new Date("2022, 09, 10"),
        mark: 9,
        student_first_name: "Marta",
        student_last_name: "Lopez",
        group_name: "C",
        subject_name: "Latin",
        teachers: [{
            teacher_first_name: "Lorena",
            teacher_last_name: "Garcia",
        }]
        },
        )

module.exports = { MarksModel}
// INSERTAR DOCS EN BBDD

// MarksModel.create([alumno1, alumno2, alumno3, alumno4, alumno5, alumno6,
//                     alumno7, alumno8, alumno9, alumno10])
//     .then((data) => {
//         console.log("Alumnos insertados en la base de datos");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.log("Error al insertar los alumnos en la base de datos: " + err);
//     });

                ////////////////////////AGREGACIONES///////////////////////////////

                
// Reto 1: Implementar todos los puntos con Node
// • Calcular la nota media de los alumnos de una asignatura concreta.
//EQUIVALENCIA AVG //group = group by
MarksModel.aggregate([{$group: {"_id": "Matematicas", "Nota media": {"$avg": "$mark"}}}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// • Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
//sum = sum
MarksModel.aggregate([{$group: {_id: null, "totalAlumnos": {$sum: 1}}}])
.then((data) => {
    console.log(`Total alumnos (repetidos incl.): ${data[0].totalAlumnos}`);

})
.catch((error) => {
    console.log(error);
});

// • Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
//project= select, id:0 para que no salga el id
MarksModel.aggregate([{$project: {_id: 0, student_first_name: 1, student_last_name: 1}}])
.then((data) => {
    console.log(data);

})
.catch((error) => {
    console.log(error);
});

// • Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
//foreach para recorrer el array y que muestre nombre y apellidos de cada profe del array, project = select
MarksModel.aggregate([{$project: {_id: 0, teachers: 1}}])
.then((data) => {
    console.log('[');
    data.forEach((teachers) => {
    teachers.teachers.forEach((teacher)=>{
    console.log(`{ teacher_first_name: '${teacher.teacher_first_name}', teacher_last_name: '${teacher.teacher_last_name}'}`);
    })
    })
    console.log(']');

})
.catch((error) => {
    console.log(error);
});

// • Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
//sort= order by, ponemos id: -1 para que los ordene en orden inverso al alfabeto
MarksModel.aggregate([{$group: {_id: "$group_name", totalAlumnos: {$sum: 1}}},
{$sort: {_id: -1}}])
.then((data) => {
    console.log(data);

})
.catch((error) => {
    console.log(error);
});
// • Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
//match = where, sort= order by, limit = limit. donde notamedia mayor que 5, 
//sort -1 para ordenar de mayor a menos nota,
//limit 5 para obtener solo el top 5
MarksModel.aggregate([{$group: {_id: "$subject_name", notaMedia: {$avg: "$mark"}}},
{$match: {notaMedia: {$gt: 5}}},
{$sort: {notaMedia: -1}},
{$limit: 5}])
.then((data) => {
    console.log(data);

})
.catch((error) => {
    console.log(error);
});

// • Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.
//unwind para separar datos del array teachers
//dsps agrupamos x asignatura y sumamos el total en cada una
MarksModel.aggregate([{$unwind: "$teachers"},
{$group: {_id: "$subject_name", totalProfes: {$sum: 1}}}])
.then((data) => {
    console.log(data);

})
.catch((error) => {
    console.log(error);
});
