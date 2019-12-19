var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    altura: 1.78
}

var pepe = {

    nombre: 'Pepe',
    apellido: 'Perez',
    altura: 1.45
}

var john = {

    nombre: 'John',
    apellido: 'Johnson',
    altura: 1.82
}

var don = {

    nombre: 'Don',
    apellido: 'Donald',
    altura: 1.74
}

var personas = [sebastian,pepe,john,don];

const esAlta = ({altura}) => altura > 1.75;

const esBaja = ({altura}) => altura <= 1.75;

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);