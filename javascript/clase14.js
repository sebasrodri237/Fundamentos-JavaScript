var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    edad: 24,
    peso: 80
}

console.log(`Al inicio del año ${sebastian.nombre} pesaba: ${sebastian.peso} kgs`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = sebastian.peso - 5;/*Peso meta*/
var dias = 0;

while (sebastian.peso > META) {
    
    if (comeMucho()) {
        
        aumentarPeso(sebastian);
    }
    if (realizaDeporte()) {
        
        bajarPeso(sebastian);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${sebastian.nombre} adelgazo 5 kgs`);