function imprimir(mensaje, idElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerText = mensaje;
}

//Ejercicio 1
function calcularEdad() {
    let numero = parseInt(document.getElementById("ex1number").value);
    let mensaje = "";

    if (numero >= 18) {
        mensaje = "Es mayor de edad";
    }
    else {
        mensaje = "Es menor de edad";
    }
    imprimir(mensaje, "ex1resultado");
}

//Ejercicio 2. Mayor de dos numeros
function cualMayor() {
    let num1 = parseInt(document.getElementById('ej2Numero').value);
    let num2 = parseInt(document.getElementById('ej2Numer').value);
    let mensaje = '';

    if (num1 > num2) {
        mensaje = 'Es mayor ' + num1;
    } else if (num1 === num2) {
        mensaje = 'Tienen el mismo valor';
    } else {
        mensaje = 'Es mayor ' + num2;

    }
    imprimir(mensaje, 'ej2Mayor');
}

//Ejercicio 3: Formulario para ver si el alumno esta aprobado o no
function notaExamen() {
    let nota = parseFloat(document.getElementById('ej3nota').value);
    let mensaje = '';

    if (nota >= 5) {
        mensaje = 'APROBADO';
    } else {
        mensaje = 'SUSPENDIDO';
    }
    imprimir(mensaje, 'ejer3resultado');
}

//Ejercicio 4: Comprobar longitud de un nombre si es largo o corto
function nombreCortoLargo() {
    let nombre = document.getElementById('ejercicio4nombre').value;
    let mensaje = '';

    if (nombre.length >= 10) {
        mensaje = 'Largo';
    } else {
        mensaje = 'Corto';
    }
    imprimir(mensaje, 'ejercicio4resultado')
}

//Ejercicio 5: Ver la estacion del año
function mesEstacion() {
    let mes = document.getElementById("ex5").value;
    let mensaje = "";
    if (mes === "Diciembre" || mes === "Febrero" || mes === "Enero") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Invierno";
    }
    else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Primavera";
    }
    else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Verano";
    }
    else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
        mensaje = "El mes seleccionado es " + mes + " por tanto estamos en Otoño";
    }
    imprimir(mensaje, "ex5resultado");
}

//Ejercicio 6: Calculadora
function calculadoraNumeros() {
    let numero1 = parseFloat(document.getElementById("e6calculadora").value);
    let numero2 = parseFloat(document.getElementById("e6calculadora2").value);
    let operacion = document.getElementById("e6operacion").value;
    let resultado = 0;
    let mensaje = "";

    if (operacion === "sumar") {
        resultado = numero1 + numero2;
        mensaje = "La suma de " + numero1 + " mas " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "restar") {
        resultado = numero1 - numero2;
        mensaje = "La resta de " + numero1 + " menos " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "multiplicar") {
        resultado = numero1 * numero2;
        mensaje = "La multiplicación de " + numero1 + " por " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "dividir") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            mensaje = "La división de " + numero1 + " entre " + numero2 + " es igual a: " + resultado;
        }
        else {
            mensaje = "No se puede dividir entre 0";
        }
    }
    else {
        mensaje = "Operacion no permitida";
    }


    imprimir(mensaje, "e6calculadoraresultado");
}

// Mismo ejemplo con SWITCH
//VERSION EJERCICIO 6 CON SWITCH
function calculadoraNumerosSwitch() {
    let numero1 = parseFloat(document.getElementById("e6calculadora").value);
    let numero2 = parseFloat(document.getElementById("e6calculadora2").value);
    let operacion = document.getElementById("e6operacion").value;
    let resultado = 0;
    let mensaje = "";

    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            mensaje = mensaje = "La suma de " + numero1 + " más " + numero2 + " es igual a: " + resultado;
            break;
        case "restar":
            resultado = numero1 - numero2;
            mensaje = "La resta de " + numero1 + " menos " + numero2 + " es igual a: " + resultado;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            mensaje = "La multiplicación de " + numero1 + " por " + numero2 + " es igual a: " + resultado;
            break;
        case "dividir":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                mensaje = "La división de " + numero1 + " entre " + numero2 + " es igual a: " + resultado;
            }
            else {
                mensaje = "No se puede dividir entre 0";
            }
            break;
        default:
            mensaje = "Operacion no permitida";
    }
    imprimir(mensaje, "e6calculadoraresultado");

}

//Ejercicio 7
function calcularPrecioFinal() {
    let producto = document.getElementById('producto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let precio = 0;
    let mensaje = '';
    let precioProducto = 0;

    if (producto === 'camiseta') {
        precioProducto = 10;
    } else if (producto === 'sudadera') {
        precioProducto = 20;
    } else if (producto === 'bufanda') {
        precioProducto = 5;
    }
    precio = precioProducto * cantidad;
    mensaje = 'El precio del producto es ' + precio;
    imprimir(mensaje, 'ex7Resultado');
}

//Ejercicio 8
function cuantasNoches() {
    let habitacion = document.getElementById('ejer8habitacion').value;
    let numeroNoches = parseInt(document.getElementById('ejer8cantidadNoches').value);
    let precioNoche = 0;
    let precioFinal = 0;
    let mensaje = '';

    if (habitacion === 'suite') {
        precioNoche = 100;
    } else if (habitacion === 'doble') {
        precioNoche = 70;
    } else if (habitacion === 'individual') {
        precioNoche = 50;
    }

    precioFinal = precioNoche * numeroNoches;

    if (numeroNoches > 5) {
        precioFinal = precioFinal * 0.8;
    }
    mensaje = 'El precio final es ' + precioFinal;
    imprimir(mensaje, 'ejer8resultadonoches');
}