//Variables Globales. Estan fuera de la funcion y se pueden usar en cualquier funcion que este en el mismo fichero js
let listaCompra = ['tomates', 'huevos', 'queso', 'fresas', 'zanahorias','atun'];

function imprimir(mensaje, id) {
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

//Ejemplo 1. Crear array y mostrarlo
//Puede tener tanto texto como números
function mostrarLista() {
    mensaje = 'La lista de la compra es ' + listaCompra;
    imprimir(mensaje, 'e1listaresultado');
}

//Ejemplo 2. Mostrar el elemento de la posicion que se elija de la lista
function mostrarInfoLista() {
    let primerProducto = listaCompra[0];
    let longitudLista = listaCompra.length;
    let ultimoProducto = listaCompra[longitudLista - 1];
    let mensaje = 'El primer elemento es ' + primerProducto + ' el ultimo es ' + ultimoProducto + ' y la longitud de la lista es ' + longitudLista;
    imprimir(mensaje, 'e2listainfo');
}

//Ejemplo 3. Modificar array
function modificarLista() {
    let posicionModificar = parseInt(document.getElementById('e3posicion').value);
    let nuevoValor =document.getElementById('e3nuevovalor').value;
    listaCompra[posicionModificar-1] = nuevoValor;
    mostrarLista();
}