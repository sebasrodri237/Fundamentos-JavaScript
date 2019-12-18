var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    edad: 24,
    ingeniero: false,
    cocinero: false,
    dibujante: false,
    estudiante: true
}
var pepe = {

    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 15
}

const MAYORIA_EDAD = 18;

function mayorEdad(persona){

    return persona.edad >= MAYORIA_EDAD;
}

function imprimirEsMayorEdad(persona){

    console.log(`${persona.nombre} es: `);
    if(mayorEdad(persona)){
        console.log('Mayor de edad');
    }else{
        console.log('Menor de edad');
    }
}

imprimirEsMayorEdad(sebastian);
imprimirEsMayorEdad(pepe);