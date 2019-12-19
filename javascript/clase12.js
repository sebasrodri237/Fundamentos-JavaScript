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

const mayorEdad = ({edad}) => edad >= MAYORIA_EDAD;
const menorEdad = ({edad}) => edad < MAYORIA_EDAD;

function imprimirEsMayorEdad(persona){

    console.log(`${persona.nombre} es: `);
    if(mayorEdad(persona)){
        console.log('Mayor de edad');
    }else{
        console.log('Menor de edad');
    }
}

function permitirAcceso(persona){

    if(menorEdad(persona)){

        console.log('ACCESO DENEGADO');
    }else{

        console.log('ACCESO PERMITIDO');
    }
}

imprimirEsMayorEdad(sebastian);
permitirAcceso(sebastian);
imprimirEsMayorEdad(pepe);
permitirAcceso(pepe);

