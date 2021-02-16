'use strict';

// const enlaces = document.getElementsByTagName('a')
// console.log(enlaces.length)
// console.log(enlaces[4].href)

// const parrafos = document.getElementsByTagName('p')

// const enPar = parrafos[2].getElementsByTagName('a');

// console.log(enPar.length);

// const resultado = document.getElementById('resultado');
// resultado.innerHTML = enPar.length;

const parrafo = document.createElement('p');

const contenido = document.createTextNode('Este es un párrafo nuevo');

parrafo.appendChild(contenido);

document.body.appendChild(parrafo);
