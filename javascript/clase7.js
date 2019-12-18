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

function imprimirNombreYEdad(persona){

    var { nombre } = persona;/*Esto es lo mismo que
    var nombre = persona.nombre*/
    var { edad } = persona;/*Esto es lo mismo que
    var edad = persona.edad*/
    console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`);
}

imprimirNombreYEdad(sebastian);
imprimirNombreYEdad(pepe);