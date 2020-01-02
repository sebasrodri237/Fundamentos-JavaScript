const sebas ={

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    edad: 24
}

// const cumpleanos = persona => persona.edad++;
const cumpleanosInmutable = persona => ({

    ...persona,
    edad: persona.edad +1
})

const sebas25 = cumpleanosInmutable(sebas);
const sebas26 = cumpleanosInmutable(sebas25);

console.log(sebas);
console.log(sebas25);
console.log(sebas26);