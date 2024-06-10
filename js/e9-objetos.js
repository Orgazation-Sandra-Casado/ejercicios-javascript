let mascota = {
    nombre: 'Atenea',
    tipo: 'Gato',
    edad: 4,
    ciudadesDondeHaVivido: ['Calatayud', 'Borja', 'Zaragoza']
}

//Lista de mascotas
let mascotas = [];

//Imprimir
function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//Ejemplo 1: Crear un objeto y mostrar sus propiedades
function mostrarMascota() {
    let mensaje = 'El nombre de la mascota es ' + mascota.nombre + ' es un ' + mascota.tipo + ' su edad es ' + mascota.edad
        + ' Ha vivido en ' + mascota.ciudadesDondeHaVivido + ' y su propietario es ' + mascota.propietario;
    imprimir(mensaje, 'e1objetos');
}

//Ejemplo2. Mostrar info elegida
function mostrarPropiedadMascota() {
    let propiedadAMostrar = document.getElementById('e2infomascota').value;
    let mensaje = propiedadAMostrar + ': ' + mascota[propiedadAMostrar];
    imprimir(mensaje, 'e2objetos');
}

//Ejemplo3. Cambiar propiedades de un objeto
function cambiarNombreMascota() {
    let nuevoNombre = document.getElementById('e3nombremascota').value;
    mascota.nombre = nuevoNombre;
    mostrarMascota();
}

//Ejemplo4. Agregar nuevas propiedades a un objeto
function agregarPropietario() {
    let nombrePropietario = document.getElementById('e4nuevoPropietario').value;
    mascota['propietario'] = nombrePropietario;
    mostrarMascota();
}

//imprimir un array de objetos
function imprimirListaMascotas() {
    let mensaje = "";
    for (i = 0; i < mascotas.length; i++) {
        mensaje += "Mascota numero" + i;
        mensaje += " Nombre:" + mascotas[i].nombre;
        mensaje += "Edad: " + mascotas[i].edad;
        mensaje += "Tipo: " + mascotas[i].tipo;
    }
    imprimir(mensaje, "e5objetos");
}


//agregar una nueva mascota a la lista
function agregarNuevaMascota() {
    let miMascota = {};
    miMascota.nombre = document.getElementById("e5nombremascota").value;
    miMascota.edad = parseInt(document.getElementById("e5edadmascota").value);
    miMascota.tipo = document.getElementById("e5tipomascota").value;

    mascotas.push(miMascota);
    imprimirListaMascotas();
}