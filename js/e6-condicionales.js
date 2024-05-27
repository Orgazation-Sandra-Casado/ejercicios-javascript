function imprimir(mensaje, idElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerText = mensaje;
}

//Ejemplo 1. Numero mayor que 5
// === son iguales
// !== no son iguales
function numeroEsCinco() {
    let numero = parseFloat(document.getElementById('ej1numero').value);
    let mensaje = '';

    if (numero === 5) {
        mensaje = 'El numero introducido es  igual a 5';
    }
    else {
        mensaje = 'El numero introducido no es 5';
    }

    imprimir(mensaje, "ej1resultado");
}

//Ejemplo 2. Comparar numeros
//Mayor o igual >=
//Mayor estricto >
//Menor o igual <=
//Menor estrictor <
function numeroMayorCinco() {
    let numero = parseFloat(document.getElementById('ej2numero').value);
    let mensaje = '';
    if (numero > 5) {
        mensaje = 'El numero es mayor a 5';
    }
    else {
        mensaje = 'El numero no es mayor que 5';
    }
    imprimir(mensaje, 'ej2resultado')
}

//Ejemplo 3. Comparar textos
//Si añadimos toUpperCase() para comparar textos nos ayudara si está escrito tanto con mayusculas como con minusculas
function ciudadEsZaragoza() {
    let ciudad = document.getElementById('ej3texto').value;
    let ciudadZaragoza = 'Zaragoza';
    let mensaje = '';
    if (ciudad.toUpperCase() !== ciudadZaragoza.toUpperCase()) {
        mensaje = 'La ciudad no es Zaragoza';
    }
    else {
        mensaje = 'La ciudad es Zaragoza';
    }
    imprimir(mensaje, 'ej3resultado')
}

//Ejemplo 4. Mostrar ejemplo error si formulario es invalido
function mostrarNombreDelAnimal() {
    let formulario = document.getElementById("ejemplo4Condicionales");
    let mensaje = "";
    if (formulario.checkValidity()) {
        let nombreAnimal = document.getElementById("e4animal").value;
        mensaje = "El animal introducido es " + nombreAnimal;
    }
    else {
        mensaje = "ERROR, CORRIJA LOS ERRORES DEL FORMULARIO";
    }
    imprimir(mensaje, "ej4resultado");
}

//Ejemplo 5. Multiples resultados
function mostrarPrecio() {
    let producto = document.getElementById('ej5productos').value;
    let mensaje = '';
    if (producto === 'camiseta') {
        mensaje = 'El precio de la camiseta es 10 euros';
    }
    else if (producto === 'pantalon') {
        mensaje = 'El precio del pantalon es 20';
    }
    else if (producto === 'chaqueta') {
        mensaje = 'El precio de la chaqueta son 30';
    }
    else {
        mensaje = 'El producto elegido no esta registrado';
    }
    imprimir(mensaje, 'ej5resultado');
}

//Ejemplo 6. Anidados
function mostrarPrecioViaje() {
    let viaje = document.getElementById('ej6destino').value;
    let numeroDias = parseInt(document.getElementById('e6numerodias').value);
    let precioViaje;
    let precioTotal;
    let mensaje = '';
    let descuento = 0;

    if (viaje === 'paris') {
        precioViaje = 10;
        if (numeroDias > 10) {
            descuento = 100;
        } else {
            descuento = 0;
        }
    }
    else if (viaje === 'irlanda') {
        precioViaje = 20;
    }
    else if (viaje === 'escocia') {
        precioViaje = 30;
    }
    else if (viaje === 'finlandia') {
        precioViaje = 40;
    }
    else {
        precioViaje = 0;
    }

    precioTotal = (precioViaje * numeroDias) - descuento;
    mensaje = 'El precio del viaje a ' + viaje + ' es de ' + precioTotal;

    imprimir(mensaje, 'ej6resultado');
}