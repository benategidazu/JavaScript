// const guardar = document.getElementById('guardar');

// guardar.addEventListener('click',funcGuardar);

// function funcGuardar () {
//     alert('Se ha guardado correctamente');
// }

// const input = document.getElementById('nombre');

// input.addEventListener('focus', funcInput);

// function funcInput () {
//     input.style.backgroundColor = '#FF00FF';
// }

function funcGuardar () {
    alert('Se ha guardado correctamente');
}

let focusin = document.getElementById('nombre');

focusin.addEventListener('focusin', funcioninA);

function funcioninA () {
    focusin.style.backgroundColor = '#49D163'
}

let focusout = document.getElementById('nombre');

focusout.addEventListener('focusout', funcionoutA);

function funcionoutA () {
    focusout.style.backgroundColor = '#274ED5'
}

let vocal = document.getElementById('vocal');

vocal.addEventListener('keypress', vocalA);


function vocalA(){
    console.log(event)
    if (event.key === 'a'||event.key==='e'||event.key==='i'||event.key==='o'||event.key==='u'||event.key === 'A'||event.key === 'E'||event.key === 'I'||event.key === 'O'||event.key === 'U')
    vocal.style.backgroundColor= '#274ED5';
    else 
    vocal.style.backgroundColor = '#49D163';
}

