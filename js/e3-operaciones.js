//SUMAR DOS NUMEROS
let precioTomates = 2.5;
let precioManzanas = 1.5;
let precioTotal = precioTomates + precioManzanas;

document.write('Total = ' + precioTotal);
document.write('<br>')

//RESTAR DOS NUMEROS
let descuento = 1;
let precioTomatesDescuento = precioTomates - descuento;
document.write('Total = ' + precioTomatesDescuento);
document.write('<br>')

//MULTIPLICAR DOS NUMEROS
let kilosManzanas = 5;
let precioMultiplicacionManzanas = kilosManzanas * precioManzanas;
document.write('Total = ' + precioMultiplicacionManzanas);
document.write('<br>')

//DIVIDIR DOS NUMEROS
//Calcular la mitad del precio de las manzanas

let mitad = 2;
let mitadPrecio = precioManzanas / mitad;
document.write('Total = ' + mitadPrecio);
document.write('<br>')

//COMBINAR VARIAS OPERACIONES
//Usar parentesis en las operaciones que se quieren hacer primero
let notaExamen1 = 5.6;
let notaExamen2 = 8.2;
let notaExamen3 = 6.5;
let totalExamenes = 3;
let notaMedia;

notaMedia = (notaExamen1 + notaExamen2 + notaExamen3) / totalExamenes;
document.write('Total = ' + notaMedia);
document.write('<br>')

//OPERADORES INCREMENTO Y DECREMENTO
let numeroIntentos = 5;
document.write('El numero de intentos es ' + numeroIntentos);
document.write('<br>')
numeroIntentos++;
document.write('El numero de intentos incrementado es ' + numeroIntentos);
document.write('<br>')
numeroIntentos--;
numeroIntentos--;
document.write('El numero de intentos decrementado es ' + numeroIntentos);




