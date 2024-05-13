//Declarar la funcion
//Funcion sin argumentos. No lleva nada entre los parentesis
function decirHola() {
    let saludo = 'Hola mundo';
    let parrafo = document.getElementById('funcionesEjemplo1');
    parrafo.innerText = saludo;
}
//Llamar a la funcion
decirHola();

//Funcion con argumentos. Recibe parametros entre los parentesis
function suma(num1, num2) {

    let resultado = num1 + num2;

    let divFunciones = document.getElementById('funcionesEjemplo1');
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = 'El resultado de la suma de ' + num1 + ' mas ' + num2 + ' es igual a ' + resultado;
    divFunciones.appendChild(parrafoNuevo);
}
//Llama a la funcion suma
suma(2, 3);
suma(3, 4);

//Funcion con argumentos 2
function agregarNuevoParrafo(mensaje) {
    let divFunciones = document.getElementById('funcionesEjemplo1');
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = mensaje;
    divFunciones.appendChild(parrafoNuevo);
}
//llamamos a la funcion
mensaje = 'Hola que tal';
agregarNuevoParrafo(mensaje);
let nombre = 'Sandra';
agregarNuevoParrafo(mensaje + ' ' + nombre);