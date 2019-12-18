var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    edad: 24
}

var pepe = {

    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 45
}

function imprimirNombreEnMayus({nombre}){/*Esta es una nueva
    forma de pasar el parametro en JavaScript 6, pero existen muchas
    maneras diferentes no es la unica*/

    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayus(sebastian);
imprimirNombreEnMayus(pepe);
imprimirNombreEnMayus({nombre:'Luis'});/*Defino el objeto en
la misma linea*/