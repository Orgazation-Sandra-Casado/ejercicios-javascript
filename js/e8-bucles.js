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

//Ejemplo 3. Mostrar los elementos de una lista en minusculas
function mostrarListaMinusculas() {
    let listaNombres = ['Maria', 'ana', 'Juan', 'PEDRO', 'Pepe'];
    let longitudLista = listaNombres.length;
    let mensaje = '';
    for (let i = 0; i < longitudLista; i++) {
        if (listaNombres[i] === 'Maria') {
            listaNombres[i] = listaNombres[i].toUpperCase();
        } else {
            listaNombres[i] = listaNombres[i].toLowerCase();

        }
    }

    mensaje = 'La lista en minusculas es : ' + listaNombres;
    imprimir(mensaje, 'e3solucion');
}

//Otra forma de hacerlo seria asi
/*function mostrarListaMinusculas() {
    let listaNombres = ['Maria', 'ana', 'Juan', 'PEDRO', 'Pepe'];
    let longitudLista = listaNombres.length;
    let mensaje = '';

    for(let nombre of listaNombres){
        if(nombre === 'Maria'){
            nombre = nombre.toUpperCase();

        }else{
            nombre = nombre.toLowerCase();
        }
    }
    mensaje = 'La lista en minusculas es : ' + listaNombres;
    imprimir(mensaje, 'e3solucion');
}*/

//Ejemplo 4. Mostrar el resultado de sumar todos los elementos de una lista. Si el elemento es menor a 5, no se incluye
let listaNumeros = [];

function imprimirLista() {
    let mensaje = 'La lista de numeros es ' + listaNumeros;
    imprimir(mensaje, 'e4solucion');
}

function agregarNumero() {
    let numero = document.getElementById('e4numerolista').value;
    listaNumeros.push(numero);
    imprimirLista();
}

function sumarMayoresA5() {
    let sumaTotal = 0;
    for (let numero of listaNumeros) {
        numero = parseInt(numero);
        if (numero > 5) {
            sumaTotal = sumaTotal + numero;
        }
    }
    let mensaje = 'La suma total de la lista es ' + sumaTotal;
    imprimir(mensaje, 'e4suma');
}

//Ejemplo 5. Bucle While
function buscarEnLista() {
    let numeroABuscar = 5;
    let mensaje = '';
    let i = 0;
    while (listaNumeros[i] != numeroABuscar && i < listaNumeros.length) {
        mensaje += 'El numero ' + numeroABuscar + ' no se encuentra en la posicion ' + i;
        i++;
    }
    if (i < listaNumeros.length) {
        mensaje = 'El numero ' + numeroABuscar + ' se encuentra en la posicion ' + (i + 1);
    } else {
        mensaje = 'El numero no se encuentra en la lista';
    }
    imprimir(mensaje, 'e5solucion');
}