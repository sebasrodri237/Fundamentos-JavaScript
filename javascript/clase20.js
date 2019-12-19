var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    altura: 1.78,
    cantidadDeLibros: 100
}

var pepe = {

    nombre: 'Pepe',
    apellido: 'Perez',
    altura: 1.45,
    cantidadDeLibros: 20
}

var john = {

    nombre: 'John',
    apellido: 'Johnson',
    altura: 1.82,
    cantidadDeLibros: 15
}

var don = {

    nombre: 'Don',
    apellido: 'Donald',
    altura: 1.74,
    cantidadDeLibros: 60
}

var personas = [sebastian,pepe,john,don];

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`Entre todos tienen un total de ${totalDeLibros} libros`);