var nombre = 'Sebastian';
var apellido = 'Rodriguez';
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`; /*Interpolar cadenas*/

var nombreMayusculas = nombre.toUpperCase();
var apellidoMinusculas = apellido.toLowerCase();

var primeraLetraNombre = nombre.charAt(0);
var numeroLetrasNombre = nombre.length;

var str = nombre.substr(2,5);

console.log(`La ultima letra de tu nombre ${nombre} es ${nombre.charAt((nombre.length)-1)} `);