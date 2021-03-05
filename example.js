let persona = {
    'nombre': 'Luis',
    'edad': 20,
    'pais': 'Colombia'
}

let { nombre, pais } = persona;

console.log(nombre, pais);

let equipo1 = ['luis', 'claudia', 'lucia'];
let equipo2 = ['p1', 'p2', 'p3'];

let TPSurvey = ['p1', ...equipo1];
console.log(TPSurvey);

const nombres = [{
        name: 'Luis',
        edad: 20
    },
    {
        name: 'Diego',
        edad: 21
    }
];

let listaNombre = nombres.filter(i => i.edad == 21);
console.log(listaNombre);

const numeros = [1, 2, 3, 4];

// // Mutable
// for (let index = 0; index < numeros.length; index++) {
//     numeros[index] = numeros[index] + 2;
// }

// console.log(numeros);

// Inmutable

let arrayMap = numeros.map(item => {
    return item + 2;
})
console.log(numeros);
console.log(arrayMap);


function sum(a, b) {
    const result = a + b;
    return result;
}



// impura porque depende de variables externas
let c = 1;

function sum(a, b) {
    const result = a + b + c;
    return result;
}