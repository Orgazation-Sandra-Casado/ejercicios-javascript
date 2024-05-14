function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//Ejercicio 1: Nombre, ciudad y año de nacimiento
function wellcome() {
    let nombre = document.getElementById("ej1Nombre").value;
    let ciudad = document.getElementById("ej1Ciudad").value;
    let fechaNacimiento = document.getElementById("ej1Fecha").value;
    let mensaje = "Hola " + nombre + " bienvenida!" + " Vive en " + ciudad + " y ha nacido en " + fechaNacimiento;
    imprimir(mensaje, "respuesta1")
}

//Ejercicio 2
function calcularOperaciones() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultadoSumar = numero1 + numero2;
    let resultadoRestar = numero1 - numero2;
    let resultadoMultiplicar = numero1 * numero2;
    let resultadoDividir = numero1 / numero2;

    //Para cuadro diálogo alert("Suma: " + resultadoSuma + "\nResta: " + resultadoResta + "\nMultiplicación: " + resultadoMultiplicar + "\nresultadoDividir: " + resultadoDividir);
    let mensaje = "La suma: " + resultadoSumar + "\nResta: " + resultadoRestar + "\nMultiplicación: " + resultadoMultiplicar + "\nresultadoDividir: " + resultadoDividir;
    imprimir(mensaje, 'e2resultadOperaciones');
}

//Ejercicio 3
function convertidorMonedas(){
    let moneda = parseFloat(document.getElementById("ex3number").value);
    let dolar = 1.8;
    let euro = 0.86;
    let multiplicar1 = moneda * dolar;
    let multiplicar2 = moneda * euro;
    let mensaje = "La conversión de " + moneda + " Euros " + "equivale a  " + multiplicar1 + " Dólares " + "y " +  multiplicar2 + " Libras. ";
    imprimir(mensaje, "ex3solucion");
}