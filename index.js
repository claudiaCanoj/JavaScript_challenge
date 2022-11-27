const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
 },
 {
  age: 24,
  examScores: [],
  gender: 'female',
  name: 'silvia'
 }]
 
 const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
 const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
 const availableGenders = ['male', 'female'];

console.log('MENÚ DE OPCIONES: ')
console.log('1 - Mostrar en formato de tabla todos los alumnos.')
console.log('2 - Mostrar por consola la cantidad de alumnos que hay en clase.')
console.log('3 - Mostrar por consola todos los nombres de los alumnos.')
console.log('4 - Eliminar el último alumno de la clase.')
console.log('5 - Eliminar un alumno aleatoriamente de la clase.')
console.log('6 - Mostrar por consola todos los datos de los alumnos que son chicas.')
console.log('7 - Mostrar por consola el número de chicos y chicas que hay en la clase')
console.log('8 - Mostrar true o false por consola si todos los alumnos de la clase son chicas.')
console.log('9 - Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.')
console.log('10 - Añadir un alumno nuevo con los siguientes datos:')
console.log('11 - Mostrar por consola el nombre de la persona más joven de la clase.')
console.log('12 - Mostrar por consola la edad media de todos los alumnos de la clase.')
console.log('13 - Mostrar por consola la edad media de las chicas de la clase.')
console.log('14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.')
console.log('15- Ordenar el array de alumnos alfabéticamente según su nombre.')
console.log('16- Mostrar por consola el alumno de la clase con las mejores notas.')
console.log('17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.')
console.log('18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.')

rl.question("Elige una de las opciones: ", (value) => {
	switch (value) {
		case "1":
			showStudents();
			break;
		case "2":
			countStudents();
			break;
		case "3":
			showNames();
			break;
		case "4":
			countStudents();
			deleteLastStudent();
			countStudents();
			break;
		case "5":
			countStudents();
			deleteRandomStudent();
			countStudents();
			break;
		case "6":
		    showGirls();
			break;
		case "7":
			countByGender();
			break;
		case "8":
			checkGirls();
			break;
		case "9":
			checkAges();
			break;
		case "10":
			countStudents();
			addRandomStudent();
			countStudents();
			break;
		case "11":
			showYounger();
			break;
		case "12":
			averageAge();
			break;
		case "13":
			averageAgeGirls();
			break;
		case "14":
			addNoteStudents();
			showStudents();
			break;
		case "15":
			addRandomStudent();
			addRandomStudent();
			console.log("Desordenados");
			showStudents();
			sortByName();
			console.log("Ordenados");
			showStudents();
			break;
		case "16":
			addNoteStudents();
			showBestStudent();
			break;
		case "17":
			addNoteStudents();
			showBestAverage();
			break;
		case "18":
			addNoteStudents();
			console.log("Notas originales");
			showStudents();
			addPoint();
			console.log("Notas despues de añadir nota");
			showStudents();
			break;
		default:
		  console.log('Lo lamentamos, opción no valida')
		  break;
	  }

	rl.close();
});		  

 // 1- Mostrar en formato de tabla todos los alumnos.
  function showStudents() {
   console.table(students);
 }
 
 function showStudent(student) {
   console.table(student);
 }
 
 // 2- Mostrar por consola la cantidad de alumnos que hay en clase.
 function countStudents() {
   console.log(students.length);
 }
 
 // 3- Mostrar por consola todos los nombres de los alumnos.
 function showNames() {
   students.forEach(showName);
 }
 
 function showName(student) {
   console.log(student.name);
 }
 
 // 4- Eliminar el último alumno de la clase.
 function deleteLastStudent() {
   students.splice(students.length - 1, 1);
 }
 
 // 5- Eliminar un alumno aleatoriamente de la clase.
 function deleteRandomStudent() {
   const position = Math.floor(Math.random() * students.length);
     students.splice(position, 1);
 }
 
 // 6- Mostrar por consola todos los datos de los alumnos que son chicas.
 function showGirls() {
   students.forEach(showGirl);
 }
 
 function showGirl(student) {
   if (student.gender === "female") {
     showStudent(student);
   }
 }
 
 // 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
 function countByGender() {
   let females = 0;
   let males = 0;
   students.forEach(function (student) {
     if (student.gender === "female") {
       females++;
     } else if (student.gender === "male") {
       males++;
     }
   });
   console.log("Mujeres " + females);
   console.log("Hombres " + males);
 }
 
 // 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
 function checkGirls() {
   let ret = true;
   students.forEach(function (student) {
     if (student.gender !== "female") {
       ret = false;
     }
   });
   console.log("Todos son mujeres " + ret);
 }
 
 // 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
 function checkAges() {
   let ret = true;
   students.forEach(function (student) {
     if (student.age >= 20 && student.age <= 25) {
     console.log(student.name);
     }
   });
 }
 
 /*
   10- Añadir un alumno nuevo con los siguientes datos:
     nombre aleatorio.
     edad aleatoria entre 20 y 50 años.
     género aleatorio.
     listado de calificaciones vacío.
     ¡OJO!, el nombre y el género tienen que ir acordes.
  */
  function addRandomStudent() {
   const pos_genre = Math.floor(Math.random() * 2);
   const pos_name = Math.floor(Math.random() * 6);
   const random_age = Math.floor(Math.random() * 30);
   let name;
   if (pos_genre === 0) {
     name = availableMaleNames[pos_name];    
   } else {
     name = availableFemaleNames[pos_name];    
   }
   const new_student = {age: random_age,
              examScores: [],
              gender: availableGenders[pos_genre],
                name: name}
   students.push(new_student);
  }
  
  /*
   11- Mostrar por consola el nombre de la persona más joven de la clase.
   ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
   */
 function showYounger() {
   let name = "";
   let age = 200;
   students.forEach(function (student) {
     if (student.age < age) {
       age = student.age;
       name = student.name;
     }
   });
   console.log(name);
 }
 
 // 12- Mostrar por consola la edad media de todos los alumnos de la clase.
 function averageAge() {
   let total = 0;
   students.forEach(function (student) {
     total += student.age;
   });
   console.log(total / students.length);
 }
 
 // 13- Mostrar por consola la edad media de las chicas de la clase.
 function averageAgeGirls() {
   let total = 0;
   let count = 0;
   students.forEach(function (student) {
     if (student.gender === "female") {
       total += student.age;
       count++;
     }
   });
   console.log(total / count);
 }
 
 // 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
 function addNoteStudents() {
   students.forEach(function (student) {
     student.examScores.push(Math.floor(Math.random() * 10));
   });
 }
 
 // 15- Ordenar el array de alumnos alfabéticamente según su nombre.
 function sortByName() {
   return students.sort((a, b) => a.name.localeCompare(b.name));
 }
 
 /*
   16- Mostrar por consola el alumno de la clase con las mejores notas.
   El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.
  */
 function showBestStudent() {
   let notes = 0;
   let name = "";
   students.forEach(function (student) {
     let aux = 0;
     student.examScores.forEach(function(note) {
       aux += note;
     });   
     if (aux > notes) {
       notes = aux;
       name = student.name;
     }
   });
   console.log(name);
 }
 
 // 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
 function showBestAverage() {
   let notes = 0;
   let name = "";
   students.forEach(function (student) {
     let aux = 0;
     student.examScores.forEach(function(note) {
       aux += note;
     });   
     aux /= student.examScores.length;
     if (aux > notes) {
       notes = aux;
       name = student.name;
     }
   });
   console.log(name + " " + notes);
 }
 
 // 18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.
 function addPoint() {
   students.forEach(function (student) {
     if (student.examScores.length == 0) {
       student.examScores.push(10);
     }   
	 for (let i = 0; i < student.examScores.length; i++) {
		if (student.examScores[i] <= 9) {
			student.examScores[i] += 1;
		}
	 }
   });
   return students;
 }
