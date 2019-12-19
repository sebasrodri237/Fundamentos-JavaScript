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

const pasarAlturaACms = persona => ({/*Creo un nuevo objeto con la persona desglozada
pisando el atributo altura*/ 
    
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);