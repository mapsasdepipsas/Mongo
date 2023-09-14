let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://mabel_sanroman:Mabel2999@dia1.gcywiur.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})

const teacherSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  groups: [String],
});

const subjectSchema = new mongoose.Schema({
  title: String,
  teachers: [teacherSchema],
});

const markSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  subject: subjectSchema
});

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  marks: [markSchema],
});


let Teacher = mongoose.model("teachers", teacherSchema)
let Subject = mongoose.model("subject", subjectSchema)
let Mark = mongoose.model("marks", markSchema)
let Student = mongoose.model("student", studentSchema)


let teacher1 = new Teacher({
  first_name: 'Rodolfo',
  last_name: 'Aguilar',
  groups: ['A', 'B'],
});

let teacher2 = new Teacher({
  first_name: 'Maria',
  last_name: 'Perez',
  groups: ['B', 'C'],
});

let subject1 = new Subject({
  title: 'Biologia',
  teachers: [teacher1, teacher2],
});

let subject2 = new Subject({
  title: 'Matematicas',
  teachers: [teacher1, teacher2],
});


let mark1 = new Mark({
  date: new Date('2021-03-14'),
  mark: 4,
  subject: subject1,
});

let mark2 = new Mark({
  date: new Date('2022-11-14'),
  mark: 3,
  subject: subject2,
});

let student2 = new Student({
  first_name: 'Rosa',
  last_name: 'Gimenez',
  marks: [mark1, mark2],
});

let student3 = new Student({
  first_name: 'Victor',
  last_name: 'Gimenez',
  marks: [mark1, mark2],
});



//INSERTAR EN BBDD
// Teacher.insertMany([teacher1, teacher2])
// .then(data => { console.log('Estudiante guardado'); console.log(data) })
// .catch(err => console.log(err))

// Subject.insertMany([subject1, subject2])
// .then(data => { console.log('Estudiante guardado'); console.log(data) })
// .catch(err => console.log(err))

// Mark.insertMany([mark1, mark2])
// .then(data => { console.log('Estudiante guardado'); console.log(data) })
// .catch(err => console.log(err))

// Student.insertMany([student2, student3])
//   .then(data => { console.log('Estudiante guardado'); console.log(data) })
//   .catch(err => console.log(err))

//MOSTRAR TODAS NOTAS DE 1 ALUMNO
// Student.findOne({ first_name: "Rosa" })

// .then(data => {
//   // console.log(data);
// for (let nota of data.marks) {
//     //console.log("Data[0].marks ", data[0].marks);

//     console.log("Nota: ", nota.mark)

// }
// })
// .catch(err => console.log(err));


//TODAS ASIGNATURAS DE 1 ALUMNO

// Student.findOne({first_name: "Rosa"})
//   .then(data => {
//     data.marks.forEach(mark => console.log(mark.subject.title))
//   })
//   .catch(err => console.log(err))

//cambiar a findOne y quitar data[0]. MEJOR.

//TODOS PROFESORES DE 1 ALUMNO
Student.findOne({first_name: "Victor"}) 
.then(student =>{
  if (student) {
   student.marks.forEach(mark =>{
   mark.subject.teachers.forEach(teacher =>{
   console.log(teacher.first_name + " " + teacher.last_name);
  });
})
}else{
  console.log('Estudiante no encontrado');
 }
    })
    .catch(err => console.log(err));
