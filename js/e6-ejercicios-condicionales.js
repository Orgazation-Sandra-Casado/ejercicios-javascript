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
function notaExamen(){
    let nota = parseFloat(document.getElementById('ej3nota').value);
    let mensaje = '';

    if(nota >= 5){
        mensaje ='APROBADO';
    }else{
        mensaje ='SUSPENDIDO';
    }
    imprimir(mensaje,'ejer3resultado');
}

//Ejercicio 4: Comprobar longitud de un nombre si es largo o corto
function nombreCortoLargo(){
    let nombre = document.getElementById('ejercicio4nombre').value;
    let mensaje = '';

    if(nombre.length >= 10){
        mensaje = 'Largo';
    }else{
        mensaje = 'Corto';
    }
    imprimir(mensaje,'ejercicio4resultado')
}

//Ejercicio 5: Ver la estacion del año
function mesEstacion(){
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



