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
}, 0) //La "a" se inicializa en el número este.

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


//9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No".

//Cat Facts: https://alexwohlbruck.github.io/cat-facts/


//10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar). PUNTO 12 IMPLEMENTADO ACÁ CON EL CATCH().

function getDataWithPromises(){
    const json = response => response.json()
fetch('https://cat-fact.herokuapp.com/facts')//obtiene el resultado del URL.
    .then(json)//lo convierte en JSON (se convierte en un texto JSON legible para JS)
    .then(data => {
       console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
       console.log('Request failed', error)
    })
}

getDataWithPromises();


//11. Implementar una función getDataWithAsync que utilice async/await junto con la API fetch para buscar los datos de la API elegida.

const getDataWithAsync = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')//Obtengo todo lo que está en esa API.
    const facts = await response.json()//Pasa a JSON.
    console.log(facts)
}

getDataWithAsync()  