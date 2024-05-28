function imprimir(mensaje, id) {
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

//Ejemplo 1. Crear array y mostrarlo
//Puede tener tanto texto como números
function mostrarLista() {
    let listaCompra = ['tomates', 'huevos', 'queso', 'fresas', 'zanahorias'];
    mensaje = 'La lista de la compra es ' + listaCompra;
    imprimir(mensaje, 'e1listaresultado');
}

//Ejemplo 2. Mostrar el elemento de la posicion que se elija de la lista
function mostrarInfoLista() {
    let listaCompra = ['tomates', 'huevos', 'queso', 'fresas', 'zanahorias'];
    let primerProducto = listaCompra[0];
    let longitudLista = listaCompra.length;
    let ultimoProducto = listaCompra[longitudLista - 1];
    let mensaje = 'La lista de la compra es ' + listaCompra + ' el primer elemento es ' + primerProducto
        + ' el ultimo es ' + ultimoProducto + ' y la longitud de la lista es ' + longitudLista;
    imprimir(mensaje, 'e2listainfo');
}