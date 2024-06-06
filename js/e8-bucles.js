function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//Ejemplo 1. Repetir la misma frase 10 veces
function mostrarFrase() {
    let mensaje = 'Hello world ';
    let mensajeFinal = '';
    let repeticiones = 10;

    for (let i = 0; i < repeticiones; i++) {
        mensajeFinal += mensaje;
    }
    imprimir(mensajeFinal, 'e1solucion');
}

//Ejemplo 2
function mostrarDobleNumeros() {
    let repeticiones = 10;
    let mensaje = '';

    for (let i = 0; i < repeticiones; i++) {
        let doble = i * 2;
        mensaje += 'Numero inicial: ' + i + ' Doble: ' + doble + '\n';
    }
    imprimir(mensaje, 'e2solucion');
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById('e2tablamultiplicar').value);
    let repeticiones = 11;
    let mensaje = '';
    for (let i = 0; i < repeticiones; i++) {
        let resultado = numero * i;
        mensaje += 'Tabla de multiplicar ' + numero + ' x ' + i + ' = ' + resultado + '\n';
    }
    imprimir(mensaje, 'e2solucionTabla');
}