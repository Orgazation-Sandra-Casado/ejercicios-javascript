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

/*Ejercicio 2
Crea una variable con una frase en la que te presentes y muestrala junto con:
Su longitud
La posición de tu nombre
La primera letra de la frase.
La última letra de la frase.
Muestra la frase completa en mayúscula
Muestra la frase completa en minúscula
Muestra la frase cambiando tu nombre por otro que elijas.
Crea una nueva palabra, con la misma frase quitando tu nombre.*/

let fraseEj2 = 'Hola, me llamo Sandra y me gusta la fotografia';
let longitudEj2 = fraseEj2.length;
let posicionNombreEj2 = fraseEj2.indexOf('Sandra');
let primeraLetraEj2 = fraseEj2[0];
let ultimaLetraEj2 = fraseEj2[longitudEj2 - 1];
let frase2Mayuscula = fraseEj2.toUpperCase();
let frase2Minuscula = fraseEj2.toLowerCase();
let segundoNombre = 'Ramses';
let cambioNombre = fraseEj2.replace('Sandra', segundoNombre);
let sinNombre = fraseEj2.replace(' me llamo Sandra', '');

let cadenas = document.getElementById('e2longitud');
cadenas.innerText = 'La longitud de la frase ' + fraseEj2 + ' es ' + longitudEj2;

cadenas = document.getElementById('e2posicion');
cadenas.innerText = 'La posicion del nombre es ' + posicionNombreEj2;

cadenas = document.getElementById('e2primera');
cadenas.innerText = 'La primera letra es ' + primeraLetraEj2;

cadenas = document.getElementById('e2ultima');
cadenas.innerText = 'La ultima letra es ' + ultimaLetraEj2;

cadenas = document.getElementById('e2mayuscula');
cadenas.innerText = 'La frase en mayusculas es ' + frase2Mayuscula;

cadenas = document.getElementById('e2minuscula');
cadenas.innerText = 'La frase en minusculas es ' + frase2Minuscula;

cadenas = document.getElementById('e2segundoNombre');
cadenas.innerText = 'La frase con nuevo nombre es ' + cambioNombre;

cadenas = document.getElementById('e2sinNombre');
cadenas.innerText = 'La frase sin nombre es ' + sinNombre;

//Ejercicio 3. Crea una variable con tu nombre completo y muestralo por pantalla. Luego quita los espacios. 
let nombreCompleto = 'Sandra Casado Aznar';
let nombreSinEspacios = nombreCompleto.replaceAll(' ', '');

let e3Nombre = document.getElementById('e3nombreSinEspacios');
e3Nombre.innerText = 'Mi nombre es ' + nombreCompleto + ' y sin espacios es ' + nombreSinEspacios;

//Ejercicio 4
//Crea una variable con una palabra en minuscula y muestralo por pantalla. Cambia la primera letra a mayuscula y muestrala por pantalla.
let e4Minuscula = 'bosque';
let e4Primera = e4Minuscula[0];
let primeraMayuscula = e4Primera.toUpperCase();
let nuevaCadena4 = e4Minuscula.replace(e4Primera, primeraMayuscula);

let e4Pantalla = document.getElementById('e4Minuscula');
e4Pantalla.innerText = 'La palabra es ' + e4Minuscula;

let e4PrimeraMayuscula = document.getElementById('e4Primera');
e4PrimeraMayuscula.innerText = 'La palabra es ' + nuevaCadena4;

//Ejercicio 5
//Crea una cadena con el texto Hola Mundo y muestralo por pantalla. Reemplaza la palabra Hola por Adios y muestralo por pantalla.
let e5Hola = 'Hola mundo';
let e5Despedida = e5Hola.replace('Hola', 'Adios');
let e5Pantalla = document.getElementById('e5hola');
e5Pantalla.innerText = 'Texto original ' + e5Hola + ' Texto nuevo ' + e5Despedida;









