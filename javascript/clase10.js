var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    edad: 24,
    ingeniero: false,
    cocinero: false,
    dibujante: false,
    estudiante: true
}

function imprimirProfesiones(persona){

    console.log(`${persona.nombre} es: `);

    if(persona.ingeniero){
        console.log('Ingeniero');
    }else{
        console.log('aspirante a Ingeniero');
    }
    if(persona.cocinero){
        console.log('Cocinero');
    }
    if(persona.dibujante){
        console.log('Dibujante');
    }
    if(persona.estudiante){
        console.log('Estudiante');
    }
    
}

function imprimirEsMayorEdad(persona){

    console.log(`${persona.nombre} es: `);
    if(persona.edad >= 18){
        console.log('Mayor de edad');
    }else{
        console.log('Menor de edad');
    }
}

imprimirProfesiones(sebastian);
imprimirEsMayorEdad(sebastian);