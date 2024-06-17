//Ejercicio 1
function mostrarSuma() {
    let num = parseInt(document.getElementById('e1suma').value);
    let mensaje = '';
    let suma = 0;
    for (let i = 0; i <= num; i++) {
        suma = suma + i;
    }
    mensaje = 'La suma de todos los numeros es ' + suma;
    imprimir(mensaje, 'ex1solucion');
}

//Ejercicio 2
function mostrarRepeticion() {
    let palabra = document.getElementById('e2palabra').value;
    let repeticion = parseInt(document.getElementById('e2numero').value);
    let mensaje = '';
    for (let i = 1; i <= repeticion; i++) {
        mensaje += i + ' ' + palabra + ' ';
    }
    imprimir(mensaje, 'ex2solucion');
}

//Ejercicio 3
function eleccionPalabra() {
    let palabra = document.getElementById('ex3palabra').value;
    palabra = palabra.toLowerCase();
    let num = parseInt(document.getElementById('ex3numerorepeticion').value);
    let mensaje = '';

    for (let i = 1; i <= num; i++) {
        if (palabra[0] === 'a' || palabra[0] === 'e' || palabra[0] === 'i' || palabra[0] === 'o' || palabra[0] === 'u') {
            mensaje += i + 'Amapola' + ' ';
        } else {
            mensaje += i + 'Margarita' + ' ';
        }
    }
    imprimir(mensaje, 'e3resultado');
}

//Ejercicio 4
function mostrarPares() {
    let num = parseInt(document.getElementById('numeroPar').value);
    let resultado = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            resultado += i + ' ';
        }
    }
    imprimir(resultado, 'e4buclesresultado')
}

//Ejercicio 5
let lista = [];
let mensaje = "";
let mensajeFinal = "";


function nuevoNombre() {
    let nombre = document.getElementById("ex4nombre").value;
    lista.push(nombre);
    imprimir(lista, "ex5nuevonombre");
}

function listaMayusculas() {
    for (let i = 0; i < lista.length; i++) {
        let nombre = lista[i];
        mensaje += nombre.toUpperCase() + ", ";
    }
    imprimir(mensaje, "ex5listamayusculas");
}

function nombresConA() {
    for (let i = 0; i < lista.length; i++) {
        let nombre = lista[i];
        if (nombre[0].toUpperCase() === "A") {
            mensajeFinal += nombre + " ";
        }
    }
    imprimir(mensajeFinal, "ex5resultado");
}

//Ejercicio 6
let listaNotas = [];
function agregarNota() {
    let nota = parseFloat(document.getElementById('ex6agregar').value);
    listaNotas.push(nota);
    imprimir(listaNotas, 'ex6resultadoagreganota');
}

function sumaTotal() {
    let suma = 0;
    let mensaje3;
    for (let i = 0; i < listaNotas.length; i++) {
        let notas = listaNotas[i];
        suma = notas + suma;
    }
    if (suma !== 0) {
        mensaje3 = " La suma total es " + suma;
    }
    else {
        mensaje3 = " No hay nota introducidas el resultado es " + suma;
    }
    imprimir(mensaje3, "ex6sumatotal");

    return suma;
}


function notaMedia() {
    let suma = sumaTotal();
    let notaMedia = 0;
    if (listaNotas.length > 0) {
        notaMedia = suma / listaNotas.length;
    }

    let mensaje4 = "La nota media es " + notaMedia;
    imprimir(mensaje4, "ex6notamedia");
    return notaMedia;
}

function mostrarNota() {
    let mensaje5;
    let nota = notaMedia();
    if (nota < 5) {
        mensaje5 = " Tu nota final es " + nota + " lo que corresponde a suspenso";
    }
    else {
        mensaje5 = " Tu nota final es " + nota + " lo que corresponde a un aprobado";
    }
    imprimir(mensaje5, "ex6mostrarnota");
}

