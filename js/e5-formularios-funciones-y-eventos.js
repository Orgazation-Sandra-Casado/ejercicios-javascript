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

    let divFunciones = document.getElementById('contenidoFunciones');
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = 'El resultado de la suma de ' + num1 + ' mas ' + num2 + ' es igual a ' + resultado;
    divFunciones.appendChild(parrafoNuevo);
}
//Llama a la funcion suma
suma(2, 3);
suma(3, 4);

//Funcion con argumentos 2
function agregarNuevoParrafo(mensaje) {
    let divFunciones = document.getElementById('contenidoFunciones');
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = mensaje;
    divFunciones.appendChild(parrafoNuevo);
}
//llamamos a la funcion
mensaje = 'Hola que tal';
agregarNuevoParrafo(mensaje);
let nombre = 'Sandra';
agregarNuevoParrafo(mensaje + ' ' + nombre);

//Obtener valores de un formulario y llamar a la funcion
function saludar() {
    let parrafo = document.getElementById('funcionesEjemplo2');
    parrafo.innerText = 'Hola que tal como estas';
}

//Obtener informacion de un formulario y ejecutar una funcion con el evento onclick
//Ejemplo que podemos usar de referencia para hacer la historia mensaje de bienvenida
function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function restar() {
    //Obtener valores del forumario
    let num1 = document.getElementById('e3numero1').value;
    let num2 = document.getElementById('e3numero2').value;
    let resta = num1 - num2;
    let mensaje = 'La resta de los numeros es igual a ' + resta;
    imprimir(mensaje, 'funcionesEjemplo3');
}

//Obtener elemento de un select
function mostrarUbicacion() {
    //1. Obtenemos la opcion seleccionada
    let ciudadSeleccionada = document.getElementById("e4ciudades").value;
    let mensaje = "Te encuentras en la ciudad " + ciudadSeleccionada;
    imprimir(mensaje, "e4solucion");
}

