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
function convertidorMonedas() {
    let moneda = parseFloat(document.getElementById("ex3number").value);
    let dolar = 1.8;
    let euro = 0.86;
    let multiplicar1 = moneda * dolar;
    let multiplicar2 = moneda * euro;
    let mensaje = "La conversión de " + moneda + " Euros " + "equivale a  " + multiplicar1 + " Dólares " + "y " + multiplicar2 + " Libras. ";
    imprimir(mensaje, "ex3solucion");
}

//Ejercicio 4
function precioTotal() {
    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let cantidadProducto = document.getElementById('cantidadProducto').value;

    let resultado = cantidadProducto * precioProducto;
    let mensaje = 'El producto ' + nombreProducto + ' tiene un precio total de ' + resultado;
    imprimir(mensaje, 'precioTotal');
}

//Ejercicio 5
function datosCamiseta() {
    let tallaCamiseta = document.getElementById('eje5TallaCamiseta').value;
    let colorCamiseta = document.getElementById('eje5ColorCamiseta').value;

    let mensaje = 'La camiseta es ' + tallaCamiseta + ' y color ' + colorCamiseta;
    imprimir(mensaje, 'eje5FormulariosResultado');
}

//Ejercicio 6: Formulario para mostrar la edad en dias, horas y minutos
function calcularEdad() {
    let edad = parseInt(document.getElementById('ej46Edad').value);
    const diasAnyo = 365;
    const horasDia = 24;
    const minutosHora = 60;
    const segundosHora = 60;

    let dias = edad * diasAnyo;
    let min = dias * horasDia * minutosHora;
    let seg = min * segundosHora;
    let mensaje = 'Si tienes ' + edad + ' son Dias: ' + dias + ' Minutos: ' + min + ' Segundos: ' + seg;
    imprimir(mensaje, 'ex6resultado');
}