//JAVASCRIPT DOM. OBTENER ELEMENTOS DE LA PAGINA POR SU ID
//Obtener el elemento html con id ejemplo
let parrafoEjemplo = document.getElementById('ejemplo');
//Modificar el texto del elemento html con id ejemplo
parrafoEjemplo.innerText = 'Hola soy Sandra';

//Obtener el elemento html con id ejemploTitulo
let tituloEjemplo = document.getElementById('ejemploTitulo');
let miNombre = 'Sandra';
let miEdad = 31;
tituloEjemplo.innerText = 'Hola me llamo ' + miNombre + ' y mi edad es ' + miEdad;

//Obtener el elemento html con id ejemplo2 y agregar un texto con etiquetas html
let ejemplo2 = document.getElementById('ejemplo2');
ejemplo2.innerHTML = '<b>Ejemplo 2 en negrita</b>';

//Crear un nuevo parrafo dentro del div con id contenido
let divContenido = document.getElementById('contenido');
let nuevoTitulo = document.createElement('h3');
nuevoTitulo.innerText = 'Ejemplo crear elementos desde Javascript';
divContenido.appendChild(nuevoTitulo);

let nuevoParrafo = document.createElement('p');
nuevoParrafo.innerText = 'Nuevo parrafo creado';
divContenido.appendChild(nuevoParrafo);

//Obtener el atributo del elemento a con id ejemplo3 y agregarle un url
let ejemplo3 = document.getElementById('ejemplo3');
let paginaWeb = 'https://google.es';
ejemplo3.href = paginaWeb;

//Obtener el elemento html con id ejemplo4 y cambiar su color a rojo
let ejemplo4 = document.getElementById('ejemplo4');
let newColor = 'red';
ejemplo4.style.color = newColor;

//CADENAS EN JAVASCRIPT
//Escapar caracteres especiales en una cadena
let cadenaEjemplo = 'Hola mi nombre es \'Ramses\' que tal estas';
let ejemplo5 = document.getElementById('ejemplo5');
ejemplo5.innerText = cadenaEjemplo;

//Contar caracteres de una cadena
let ejemploContar = 'Bienvenidos';
let totalLetrasCadenaEjemplo = ejemploContar.length;
let ejemplo6 = document.getElementById('ejemplo6');
ejemplo6.innerText = 'La cadena ' + ejemploContar + ' tiene un total de ' + totalLetrasCadenaEjemplo;
//Obtener primera letra
let primeraLetra = ejemploContar[0]; //la primera siempre empieza en 0
let ultimaLetra = ejemploContar[ejemploContar.length - 1]; //el total de letras de la cadena, menos uno porque empieza en 0
let ejemplo7 = document.getElementById('ejemplo7');
ejemplo7.innerText = 'La primera letra de la palabra ' + ejemploContar + ' es ' + primeraLetra + ' y la ultima es ' + ultimaLetra;

//Cambiar todo a mayusculas o minusculas
let cadenaMayusculas = ejemploContar.toUpperCase();
let cadenaMinusculas = ejemploContar.toLocaleLowerCase();
let ejemplo8 = document.getElementById('ejemplo8');
ejemplo8.innerText = 'La cadena ' + ejemploContar + 'mayusculas ' + cadenaMayusculas + ' minusculas ' + cadenaMinusculas;

//Sustituir texto de una cadena
let nuevaCadena = ejemploContar.replace('Bienvenidos', 'Mi web');
let ejemplo9 = document.getElementById('ejemplo9');
ejemplo9.innerText = 'Antes de reemplazar: ' + ejemploContar + ' Despues de reemplazar: ' + nuevaCadena;
//Sustituir una palabra por una variable
let mensajeBienvenida = 'Bienvenido estudiante';
let nombreEstudiante = 'Ramses';
let nuevoMensajeBienvenida = mensajeBienvenida.replace('estudiante', nombreEstudiante);
let ejemplo10 = document.getElementById('ejemplo10');
ejemplo10.innerText = 'Antes de reemplazar: ' + mensajeBienvenida + ' Despues de reemplazar: ' + nuevoMensajeBienvenida;

