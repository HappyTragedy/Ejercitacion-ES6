const alumnos = [
    { nombre: 'Sofia Bonavena', edad: 23 },
    { nombre: 'Micaela Fernandez', edad: 22 },
    { nombre: 'Giuliano Giovanola', edad: 20 },
    { nombre: 'Lautaro Hudson', edad: 19 },
    { nombre: 'Alejandro Nieco', edad: 22 },
    { nombre: 'Micaela Orfali', edad: 24 },
    { nombre: 'Pedro Balza', edad: 26 },
    { nombre: 'Leandro Amaro', edad: 35 },
    { nombre: 'Alva Ramírez', edad: 27 },
    { nombre: 'Diego Salischiker', edad: 29 },
]


//1. Obtener un array de strings con solo nombres de cada alumno usando .map().

const alumnosNombres = alumnos.map(function(names){
    return names.nombre;
});

console.log("Estos son los alumnos: ", alumnosNombres);


//2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter().

const alumnosEdades = alumnos.filter(({edad}) => edad > 25);

console.log("Los alumnos mayores a 25 años son: ", alumnosEdades);


//3. Obtener un entero con la edad total de todos los alumnos usando .reduce().

const edadTotal = alumnos.reduce(function(a, b){
    return a + b.edad;
}, 0) //Por qué este 0 (PREGUNTAR).

console.log("La edad total de los alumnos es: ", edadTotal);


//4. Obtener en una constante la edad de "Micaela Orfali" usando .find().

const nombreMO = alumnos.find(MO => MO.nombre === "Micaela Orfali");

const edadMO = nombreMO.edad;

console.log("La edad de Micaela Orfali es: ", edadMO);


//5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también.

const [AlumnoUno, AlumnoDos, , , , , , , , ] = alumnos;
console.log("El primer alumno es: ", AlumnoUno);

const [AlumnoUnoNom, AlumnoDosNom, , , , , , , , ] = alumnos;
console.log("El primer alumno es: ", AlumnoUnoNom.nombre);


//6. Obtener un array con aquellos alumnos que empiezan con la letra "L", usando .filter().

const alumnosConL = alumnos.filter(({nombre}) => nombre.charAt(0) === "L");

console.log("Los alumnos que empiezan con L son: ", alumnosConL);


//7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map().


const arr = alumnos.map(obj => ({...obj, Mascota: "Si"}))//Los "..." me agarran todo lo que está guardado en la constante, en este caso en la const "alumnos".

console.log("Propiedad 'mascota' agregada: ", arr);


//8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

const edadPromedio = edadTotal/alumnos.length;

console.log("El promedio de las edades es: ", edadPromedio);