let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})


const TeacherSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        groups: [String]
    })

const SubjectSchema = new mongoose.Schema(
    {
        title: String,
        teachers: [TeacherSchema]
    })

const MarkSchema = new mongoose.Schema(
    {
        date: Date,
        marks: Number,
        subject: SubjectSchema
    })

const StudentSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        marks: [MarkSchema]
    })

let StudentModel = mongoose.model("StudentArbol", StudentSchema);

let alumno1 = new StudentModel(
    {
        firstName: "Dani",
        lastName: "Perez",
        marks: [{
            date: new Date("2020, 01, 21"),
            marks: 7,
            subject: {
                title: "Literatura",
                teachers: [{
                    firstName: "Juanjo",
                    lastName: "Rivera",
                    groups: ["A", "B", "C"]
                }
                ]
            }
        
        },
        {
            date: new Date("2022, 07, 15"),
            marks: 6,
            subject: {
                title: "Biologia",
                teachers: [{
                    firstName: "Pepe",
                    lastName: "Martin",
                    groups: ["B", "C", "D"]
                }
                ]
            }
        }
    ]
    }
);

let alumno2 = new StudentModel(
    {
        firstName: "Laura",
        lastName: "Gómez",
        marks: [
            {
                date: new Date("2021, 03, 10"),
                marks: 8,
                subject: {
                    title: "Matemáticas",
                    teachers: [
                        {
                            firstName: "Ana",
                            lastName: "López",
                            groups: ["A", "B"]
                        }
                    ]
                }
            },
            {
                date: new Date("2022, 09, 05"),
                marks: 9,
                subject: {
                    title: "Historia",
                    teachers: [
                        {
                            firstName: "Carlos",
                            lastName: "Rodríguez",
                            groups: ["A", "C"]
                        }
                    ]
                }
            }
        ]
    }
);

let alumno3 = new StudentModel(
    {
        firstName: "Maria",
        lastName: "Garcia",
        marks: [
            {
                date: new Date("2019, 07, 13"),
                marks: 5,
                subject: {
                    title: "Inglés",
                    teachers: [
                        {
                            firstName: "Rosa",
                            lastName: "Gimenez",
                            groups: ["A", "B"]
                        }
                    ]
                }
            },
            {
                date: new Date("2022, 09, 05"),
                marks: 10,
                subject: {
                    title: "Economía",
                    teachers: [
                        {
                            firstName: "Ruben",
                            lastName: "Alonso",
                            groups: ["A", "C"]
                        }
                    ]
                }
            }
        ]
    }
);

let alumno4 = new StudentModel(
    {
        firstName: "Adrian",
        lastName: "Ruiz",
        marks: [
            {
                date: new Date("2019, 10, 20"),
                marks: 7,
                subject: {
                    title: "Dibujo",
                    teachers: [
                        {
                            firstName: "Jose",
                            lastName: "Martin",
                            groups: ["C", "D"]
                        }
                    ]
                }
            },
            {
                date: new Date("2023, 01, 25"),
                marks: 4,
                subject: {
                    title: "Griego",
                    teachers: [
                        {
                            firstName: "Patricia",
                            lastName: "Avila",
                            groups: ["A", "D"]
                        }
                    ]
                }
            }
        ]
    }
);

// INSERTAR DOCS EN BBDD

// // StudentModel.create([alumno1, alumno2, alumno3, alumno4])
// //     .then((data) => {
// //         console.log("Alumnos insertados en la base de datos");
// //         console.log(data);
// //         mongoose.disconnect();
// //     })
// //     .catch((err) => {
// //         console.log("Error al insertar los alumnos en la base de datos: " + err);
// //     });


// MOSTRAR TODAS LAS NOTASDE UN ALUMNO
StudentModel.find({ firstName: "Laura", lastName: "Gómez" })
    .then((alumnos) => {
        if (alumnos.length === 0) {
            console.log("No se encontraron alumnos con ese nombre.");
        } else {
            // Mostrar notas
            alumnos.forEach((alumno) => {
                console.log("Notas de " + alumno.firstName + " " + alumno.lastName + ":");
                alumno.marks.forEach((mark) => {
                    console.log("Calificación: " + mark.marks + ", Asignatura: " + mark.subject.title);
                });
            });
        }
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error al buscar al alumno: " + err);
    });


//MOSTRAR TODAS LAS ASIGNATURAS DE UN ALUMNO

StudentModel.find({ firstName: "Dani", lastName: "Perez" })
    .then((alumnos) => {
        if (alumnos.length === 0) {
            console.log("No se encontraron alumnos con ese nombre.");
        } else {
            // Mostrar notas
            alumnos.forEach((alumno) => {
                console.log("Asignaturas de " + alumno.firstName + " " + alumno.lastName + ":");
                alumno.marks.forEach((mark) => {
                    console.log("Asignatura: " + mark.subject.title);
                });
            });
        }
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error al buscar al alumno: " + err);
    });

//MOSTRAR TODOS LOS PROFESORES DE UN ALUMNO

// Usar el método find para buscar al alumno por firstName y lastName
StudentModel.find({ firstName: "Adrian", lastName: "Ruiz" })
    .then((alumnos) => {
        if (alumnos.length === 0) {
            console.log("No se encontraron alumnos con ese nombre.");
        } else {
            alumnos.forEach((alumno) => {
                console.log("Profesores de " + alumno.firstName + " " + alumno.lastName + ":");
                alumno.marks.forEach((mark) => {
                    mark.subject.teachers.forEach((teacher) => {
                        console.log("Nombres de profesores: " + teacher.firstName + " " + teacher.lastName);
                    });
                });
            });
        }
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error al buscar al alumno: " + err);
    });
