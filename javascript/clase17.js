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

var john = {

    nombre: 'John',
    apellido: 'Johnson',
    edad: 33
}

var don = {

    nombre: 'Don',
    apellido: 'Donald',
    edad: 52
}

var personas = [sebastian,pepe,john,don];

for (var i = 0; i < personas.length; i++) {
    
    var persona = personas[i]
    console.log(`${persona.nombre} tiene ${persona.edad} años`)
}