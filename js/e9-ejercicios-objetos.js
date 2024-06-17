//Ejercicio 1
let viaje = {
    destino: 'Italia',
    precio: 1000,
    duracion: 10,
    ciudades: ['Roma', 'Venecia']
}

function mostrarViaje() {
    let mensaje = 'El destino es ' + viaje.destino + ' el precio es ' + viaje.precio + ' la duracion es ' +
        viaje.duracion + ' ciudades a visitar ' + viaje.ciudades;
    imprimir(mensaje, 'ex1resultado');
}

function cambiarpropiedadViaje() {
    let nuevaPropiedad = document.getElementById('propiedadViaje').value;
    let nuevoValor = document.getElementById('nuevoValor').value;
    if (nuevaPropiedad === 'precio' || nuevaPropiedad === 'duracion') {
        viaje[nuevaPropiedad] = parseInt(nuevoValor);

    } else if (nuevaPropiedad === 'ciudades') {
        viaje[nuevaPropiedad] = nuevoValor.split(',');
    } else {
        viaje[nuevaPropiedad] = nuevoValor;
    }
    mostrarViaje();
}