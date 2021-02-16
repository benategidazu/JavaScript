'use strict';

let cumple = {
    dia:27,
    mes:'Mayo',
};
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const nombre = 'Beñat';
const apellido = 'Egidazu';
const numero1 = 8;
const numero2 = '8';

console.log( 'Mi cumpleaños es el día ' + cumple.dia, 'de', cumple.mes);
console.log(meses[4]);
console.log('Hola' + nombre + apellido);
console.log(`Hola ${nombre} ${apellido}`)
console.log(numero1===numero2);
console.log(numero1 !== numero2);
console.log(numero2==numero1 || numero1 == numero2);
