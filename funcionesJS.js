'use strict';

// función lenght:calcula la longitud de una cadena

// const a='Hola';
// const numeroletras = a.length;

// console.log(numeroletras);

//conct():concatena varias cadenas de texto

// const mensaje= a.concat(' mundo');

// console.log(mensaje);

//toUpperCase() y toLowerCase(): transforma las letras en mayúsculas o minusculas

//chartAt(posición): obtiene los carácteres de la posición indicada

// let letra = a.charAt(0);
// let letra2 = a.charAt(3);

// console.log(letra+letra2)

//substring(inicio,fin): extrae una porción de una cadena de texto. El segundo parámetro es opcional, si no se indica se devuelve entero

// let substring = a.substring(2);

// console.log(substring)

//split(separador): convierte una cadena de texto en un array de cadena de texto.

// let split = a.split,

// console.log(split);

//Los tres últimos funcionan como los índices de los array.

//Ejercicio 1:

// let numero = prompt('Introduce un número')

// function checkNumber (numero) {
//     if (numero%2===0) {
//        return ('Tu número es par')
//     } else { return ('Tu número es impar')
// }
// }

// document.write(checkNumber(numero));

//Ejercicio 2:

// let frase = prompt('Escribeme la frase que quieras:');

// let controlMayusculas = frase.toUpperCase();

// let controlMinusculas = frase.toLowerCase();

// function mayusculasYminusculas(frase) {
//     if (frase === controlMayusculas) {
//         return 'Tu frase esta toda en mayúscula'
//     } else if (frase === controlMinusculas) {
//         return 'Tu frase esta toda en minúscula'
//     } else {
//         return 'Tu frase tiene mayúsculas y minúsculas'
//     }
// }
// alert(mayusculasYminusculas(frase));


//Funciones básicas para arrays:

//Función map(): permite aplicar una función a todos los elementos de un array
// const numeros = [3,5,23,543];
// const numerosmultiplicados = numeros.map(function (numeros) {
//     return numeros*5
// });

// alert(numerosmultiplicados);

//Ejercicio 3:

// const topics = ['JavasScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

// const topicsMayus = topics.map(function(i) {
//     return i.toUpperCase()
// });

// alert(topicsMayus);

//La anterior función pero con la función flecha:

// const topics = ['JavasScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

// const topicsMayus = topics.map(i => i.toUpperCase());

// alert(topicsMayus);

//Función filter() nos permite filtrar un array y elegir alguno de los elementos siguiendo un criterio.

//Ejemplo filter():

// const topicFiltered = topics.filter(function(palabra) {
//     return palabra.length>6;
// });
// console.log(topicFiltered);

// //Ejemplo anterior en función flecha:
// const topicFiltered2 = topics.filter(palabra => palabra.length>6);
// document.write(topicFiltered2);

//Ejercicio 4:

// const arrayFilter = [253, 8575, 1, 20, 4829, 838, 7373, 3645, 898];

// const arrayPares = arrayFilter.filter(function(i) 
// {
//      return i%2 === 0
// });

// const arrayImpares = arrayFilter.filter(function(a)
// {
//     return a%2 != 0
// });

// alert(arrayPares);
// alert(arrayImpares);

//Función reduce(): nos permite realizar cálculos que requieran utilizar varios elementos de un array. No devuleve un array, sino un valor.

//Ejercicio 5:

// const tiempos = [60, 75, 79, 80, 55, 59];

// const reduce = tiempos.reduce(function(acumulado, actual) {
//     return acumulado += actual;
// },0);

// alert(reduce/tiempos.length);

//Ejercicio 6:

// const words = ['Systems', 'Research', 'Institute', 'Environmental'];

// const palabraLarga = words.reduce(function(acumulado, actual) {
//     if ( acumulado.length > actual.length){
//         return acumulado
//     } else {
//         return actual
//     }
// }, '');

// alert(palabraLarga);

//Ejercicio concatenar métodos:

// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// let mesMay = meses.filter(nombre => nombre.length > 7).map(nombre => nombre.toUpperCase());

// alert(mesMay);

// alert(mesMay.length);

//Ejercicio array de objetos:

// const users = [
//     {username: 'ppc90', age: 30, premium: false},
//     {username: 'lu65', age: 24, premium: true},
//     {username: 'maria2', age: 26, premium: false},
//     {username: 'abc123', age: 20, premium: false},
//     {username: 'sergio58', age: 26, premium: true},
// ];

// const older = users.filter(function(user){
//     return user.age > 25
// });

// console.log(older);

//Ejercicio Clases:

// class comida {
//     constructor(nombre, tipo, calorias){
//         this.nombre = nombre;
//         this.tipo = tipo;
//         this.calorias = calorias;
//     }
// };

// const donut = new comida('donut de chocolate', 'dulce', 465);
// const cerveza = new comida('cerveza', 'bebida', 78);
// const zanahoria = new comida('zanahoria', 'verdura', 35);

// console.log(donut);
// console.log(cerveza);
// console.log(zanahoria);

//Ejercicio 7:

// class cuadrado {
//     constructor(lado, perimetro, area){
//         this.lado = lado;
//         this.perimetro = lado * 4;
//         this.area = lado*2;
//     }
// };

// const cpequeño = new cuadrado(2);
// const mediano = new cuadrado(5);
// const grande = new cuadrado (10);

// console.log(mediano);

//Ejercicio 8:

class Factura {
    constructor(nombre, array){
        this.nombre = nombre;
        this.array = array;
        this.pseudoclase = {
            baseImponible:0,
            iva: 21,
            total:0,
            fp: 'efectivo'
        };

        this.calcularBaseImponible = function(baseI){
            return (this.array.cantidad*this.array.precio)
        }
        this.calcularTotal = function(){
            return this.pseudoclase.total = this.pseudoclase.baseImponible*(1+(this.pseudoclase.iva/100))
        }
    }
};

class Cliente {
    constructor(name, direccion, telefono, nif){
        this.name = name;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
};

class Elemento {
    constructor(descripcion, cantidad, precio){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
};

const cliente1 = new Cliente('Pepe', 'Txkitiotaegi 4', 677444555, '78756473S');
const objeto = [new Elemento('botella', '1',2), new Elemento('raton', 20, 5)];

const factura1 = new Factura(cliente1, objeto);


console.log(factura1.calcularBaseImponible())
console.log(factura1.calcularTotal());



