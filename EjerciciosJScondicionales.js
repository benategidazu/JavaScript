'use strict';
// var numero1 = 5;
// const numero2 = 8;

// if (numero1<numero2 && numero2>=0 && (numero1<0 || numero1!=0) && numero1++ < numero2) {
//     alert("se cumplen todas las condiciones establecidas")
// };

// if (numero1<numero2) {
//     alert("numero1 no es mayor que numero2")
// };

// if (numero2>= 0) {
//     alert("numero2 es positivo")
// };

// if (numero1<0 || numero1!=0) {
//     alert("numero1 es negativo o distinto de 0")
// };

// if (numero1++ < numero2) {
//     alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
// };

//Ejercicio 2:

// const sinTopping = 1.9;
// const toppingoreo = 1;
// const toppingkitkat = 1.5;
// const toppingbrowniw = 0.75;
// const toppinglacasitos = 0.95;

// let topping = prompt('Introduce el topping que desee:');

// if (topping === 'oreo') {
//     document.write('Tu helado con topping de oreo cuesta'+ (sinTopping+toppingoreo) + '$')
// } else if (topping === 'KitKat') {
//     document.write('Tu helado con topping de KitKat cuesta'+ (sinTopping+toppingkitkat) + '$')
// } else if (topping === 'brownie') {
//     document.write('Tu helado con topping de brownie cuesta'+ (sinTopping+toppingbrowniw) + '$')
// } else if (topping === 'lacasitos') {
//     document.write('Tu helado con topping de lacasitos cuesta'+ (sinTopping+toppinglacasitos) + '$')
// } else {document.write('No tenemos este topping, lo sentimos. Tu helado sin topping cuesta'+ sinTopping + '$')};

//Ejercicio 3:

// const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// let dni = prompt('Introduce el número de tu DNI:');
// let letra  = prompt('Introduce la letra de tu DNI:');

// if (dni<0 || dni>99999999) {
//     document.write('El número proporcionado no es válido')
// } else { 
//     let i = dni%23;  
//     alert(letrasDNI[i])

// };

//Ejercicio 4:

// let diametro = prompt('Dime el diámetro de la rueda en metros:');
// let grosor = prompt('Dime el grosor de la rueda en metros:');

// if (diametro>1.4){
//     document.write('La rueda es para un vehículo grande.')
// } else if (diametro <= 1.4 && diametro > 0.8) {
//     document.write('La rueda es para un vehículo mediano')
// } else {
//     document.write('La rueda es para un vehículo pequeño ')
// };



// if ((diametro > 1.4 && grosor<0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
//     document.write('<br>El grosor de la rueda es inferior al recomendado')
// } else {
//     document.write('<br>El grosor de las ruedas esta bien')
// }

//Ejercicio 5:

// let notas =  [6, 7, 2, 9, 3, 4, 5, 8, 2];
// let suma = 0;
// let suma2 = 0;

// for(let i = 0; i<notas.length; i++) {
//     suma += notas[i];
// }

// console.log(suma);

// for(const i of notas) {
//     suma2+=i;
// }

// console.log(suma2)




