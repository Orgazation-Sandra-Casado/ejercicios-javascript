let listaAlumnos = ["Pedro", "Juan", "Antonia", "Clara", "Susana", "Lara", "Marcos", "Iván", "Daniel", "Paco"];

//EJERCICIO 1
function mostrarListado() {
    mensaje = 'Los alumons son ' + listaAlumnos;
    imprimir(mensaje, 'listado1alumnos');
}

//Ejercicio 2
function posicionLista() {
    let posicion = parseInt(document.getElementById('ej2posicion').value);
    let alumnoElegido = listaAlumnos[posicion - 1];
    let mensaje = 'El alumno seleccionado es ' + alumnoElegido;
    imprimir(mensaje, 'ej2resultado');
}

//Ejercicio 3
function alumnosOrdenados() {
    listaAlumnos.sort();
    mostrarListado();
}

//Ejercicio 4
function agregarAlumno() {
    let nuevoAlumno = document.getElementById('ej4nombre').value;
    listaAlumnos.push(nuevoAlumno);
    mostrarListado();
}

//Ejercicio 5
function elegirEliminarPosicion() {
    let posicion = parseInt(document.getElementById('e5posicionelegida').value);
    let posicionLista = posicion - 1;
    mensaje = '';
    if (posicion < 1 || posicion > listaAlumnos.length) {
        mensaje = 'Error, la posicion introducida es mayor a la longitud de la lista';
    } else {
        listaAlumnos.splice(posicionLista, 1);
        mensaje = 'Alumno eliminado';
    }
    mostrarListado();
}

//Ejercicio 6
function buscarAlumno() {
    let alumnoLista = document.getElementById("buscar").value;
    let indice = listaAlumnos.indexOf(alumnoLista);

    let mensaje = "";

    if (indice !== -1) {
        mensaje = "El alumno  " + alumnoLista + " está en la lista con los nombres: " + listaAlumnos[indice] + " en la posicion " + indice;
    }
    else {
        mensaje = "El alumno no está en la lista";
    }
    imprimir(mensaje, "ex6resultado");
}
