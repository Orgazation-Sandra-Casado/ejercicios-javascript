//EJERCICIO 1
let precioManzana = 2.5;
let precioPera = 1.5;
let precioPlatano = 1.8;

document.write('<br>Ejercicio 1 <br>');
document.write('1 KG manzana + 1 KG de pera es: ' + (precioManzana + precioPera) + '<br>');
document.write('1 KG platano + 1 KG de pera es: ' + (precioPlatano + precioPera) + '<br>');
document.write('2 KG de peras es: ' + (precioPera * 2) + '<br>');
document.write('3 KG de platanos es: ' + (precioPlatano * 3) + '<br>');
document.write('2 KG de manzanas + 3 KG de peras es: ' + ((precioManzana * 2) + (precioPera * 3)) + '<br>');
document.write('1,5 KG de platano + 2 KG peras + 3 KG manzanas: ' + ((precioPlatano * 1.5) + (precioPera * 2) + (precioManzana * 3)) + '<br>');
document.write('2,5 KG de peras + 3,5 KG platanos es: ' + ((precioPera * 2.5) + (precioPlatano * 3.5)) + '<br>');

document.write('<br>');
document.write('<br>Ejercicio 2 <br>');
let nota1 = 7.5;
let nota2 = 10.5;
let nota3 = 8;
let nota4 = 9.5;
let nota5 = 7;
let notaMediaAlumno = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5);

document.write('Nota media: ' + notaMediaAlumno);

//Area de un cuadrado con lado longitud 5 cm
document.write('<br>');
document.write('<br>Ejercicio 3 <br>');
let ladoCuadrado = 5;
let areaCuadrado = ladoCuadrado * ladoCuadrado;
document.write('El area del cuadrado es: ' + areaCuadrado);

//Area de un rectangulo con largo 8 cm y ancho 6 cm
document.write('<br>');
document.write('<br>Ejercicio 4 <br>');
let largoRectangulo = 8;
let anchoRectangulo = 6;
let areaRectangulo = largoRectangulo * anchoRectangulo;
document.write('El area del cuadrado es: ' + areaRectangulo);

//Area de un triangulo con base 10 metros y altura 8 metros
document.write('<br>');
document.write('<br>Ejercicio 4 <br>');
let baseTriangulo = 10;
let alturaTriangulo = 8;
let areaTriangulo = (0.5 * baseTriangulo * alturaTriangulo);
document.write('El area del triangulo es: ' + areaTriangulo);

//Area de un circulo con radio 4 cm
document.write('<br>');
document.write('<br>Ejercicio 5 <br>');
let radioCirculo = 4;
const PI = 3.14;
let areaCirculo = PI * (radioCirculo * radioCirculo);
document.write('El area del circulo es: ' + areaCirculo);

//Area de un trapecio con bases 6 cm y 10 cm y altura de 8 cm
document.write('<br>');
document.write('<br>Ejercicio 6 <br>');
let baseTrapecio1 = 6;
let baseTrapecio2 = 10;
let alturaTrapecio = 8;
let areaTrapecio = alturaTrapecio * ((baseTrapecio1 + baseTrapecio2) / 2);
document.write('El area del trapecio es: ' + areaTrapecio);

//Area de un rombo con diagonales de longitudes 12 y 16
let diagonal1 = 12;
let diagonal2 = 16;
let areaRombo = (diagonal1 * diagonal2) / 2;
document.write('El area del rombo es ' + areaRombo);

//Area de un pentagono regular con lado 6 cm
let apotemaPentagono = 4.13;
let ladoPentagono = 6;
let areaPentagono;
let perimetroPentagono = (5 * ladoPentagono);

areaPentagono = (perimetroPentagono * apotemaPentagono) / 2;
document.write('El area del pentagono es ' + areaPentagono);
