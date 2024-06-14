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


