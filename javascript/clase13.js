var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    edad: 24,
    peso: 80
}

console.log(`Al inicio del año ${sebastian.nombre} pesaba: ${sebastian.peso} kgs`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++){

    var random = Math.random();

    if(random < 0.25){

        aumentarPeso(sebastian);
    }else if(random < 0.5){

        bajarPeso(sebastian);
    }
}

console.log(`Al final del año ${sebastian.nombre} pesa: ${sebastian.peso.toFixed(1)} kgs`);
