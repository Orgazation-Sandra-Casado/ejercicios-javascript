//Crea una variable Hola que tal, bienvenida a QA
let mensajeBienvenida1 = 'Hola que tal, bienvenida a QA';
//Longitud
let longitud = mensajeBienvenida1.length;
//Posicion de la letra QA
let posicionQa = mensajeBienvenida1.indexOf('QA');
//Primera letra
let letraPrimera = mensajeBienvenida1[0];
//Ultima letra
let letraUltima = mensajeBienvenida1[longitud - 1];
//Mayusculas
let letraMayusculas = mensajeBienvenida1.toUpperCase();
//Minusculas
let letraMinusculas = mensajeBienvenida1.toLowerCase();
//Crea una variable con tu nombre y modifica la frase para que diga Hola, nombre
let studentName = 'Sandra';
let welcomeMessage = mensajeBienvenida1.replace('que tal, bienvenida a QA', studentName);
let welcomeMessage2 = mensajeBienvenida1.replace('Hola ' + studentName);
//Crea una nueva palabra con la misma frase quitando la palabra que tal
let palabra2 = ' ';
let mensajeBienvenidaSinQueTal = mensajeBienvenida1.replace('que tal', palabra2);

let parrafo = document.getElementById('e1longitud');
parrafo.innerText = 'La longitud de la frase es ' + longitud;

parrafo = document.getElementById('e1posicionQa');
parrafo.innerText = 'La posicion de la palabra QA es ' + posicionQa;

parrafo = document.getElementById('e1letraPrimera');
parrafo.innerText = 'La priemra letra es ' + letraPrimera;

parrafo = document.getElementById('e1letraUltima');
parrafo.innerText = 'La ultima letra es ' + letraUltima;

parrafo = document.getElementById('e1letraMayusculas');
parrafo.innerText = 'Mayusculas ' + letraMayusculas;

parrafo = document.getElementById('e1letraMinusculas');
parrafo.innerText = 'Minusculas ' + letraMinusculas;

parrafo = document.getElementById('e1studentName');
parrafo.innerText = 'Cambio de nombre ' + welcomeMessage;

parrafo = document.getElementById('e1fraseSinQueTal');
parrafo.innerText = 'Frase sin Que Tal ' + mensajeBienvenidaSinQueTal;
