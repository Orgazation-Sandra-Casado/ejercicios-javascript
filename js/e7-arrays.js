//Variables Globales. Estan fuera de la funcion y se pueden usar en cualquier funcion que este en el mismo fichero js
let listaCompra = ['tomates', 'huevos', 'queso', 'fresas', 'zanahorias', 'atun'];

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
//Modifica el elemento de la posicion elegida
function modificarLista() {
    let posicionModificar = parseInt(document.getElementById('e3posicion').value);
    let nuevoValor = document.getElementById('e3nuevovalor').value;
    listaCompra[posicionModificar - 1] = nuevoValor;
    mostrarLista();
}

//Ejemplo 4. Agregar elementos al final
function agregarAlista() {
    let nuevoProducto = document.getElementById('e4elementonuevolista').value;
    listaCompra.push(nuevoProducto);
    mostrarLista();
}

//Ejemplo 5. Eliminar elementos
//pop elemina el ultimo elemento
//shift eliminar el primero
function eliminarUltimoElemento() {
    let elementoEliminado = listaCompra.pop();
    let mensaje = 'El elemento eliminado es ' + elementoEliminado;
    imprimir(mensaje, 'e5elementoEliminado');
    mostrarLista();
}

//Ejemplo 6. Eliminar una posicion concreta
//slice(posicion, numero de elementos a eliminar) recordar que la posicion empieza en 0
function eliminarPosicionElegida() {
    let posicion = parseInt(document.getElementById('e6posicion').value);
    listaCompra.splice(posicion - 1, 1);
    mostrarLista();
}

//Ejemplo 7. Ordenar lista alfabeticamente
//Importante que esten todas en mayusculas o minusculas
//.sort() de la a a la z y .sort().reverse() de z a la a
//arr.sort((a,b) => a -b); Ordenar de forma ascendente un array de numeros. Descendente arr.sort((a,b) => b - a);
function ordenarLista() {
    listaCompra.sort();
    mostrarLista();
}

//Ejemplo 8. Obtener posicion de un elemento de la lista
function verPosicionElemento() {
    let elemento = document.getElementById('e8elementoabuscar').value;
    let posicionElemento = listaCompra.indexOf(elemento);
    let mensaje = '';
    if (posicionElemento !== -1) {
        mensaje = 'El elemento ' + elemento + ' esta en la posicion ' + posicionElemento;
    } else {
        mensaje = 'No se encuentra en la lista';
    }
    imprimir(mensaje, 'e8resultado');
}