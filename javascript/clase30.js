const API_URL = 'https://swapi.co/api/'; /*Conectarnos por asi
decirlo, o acceder a la API por la url*/

const PEOPLE_URL ='people/:id';
const options = {crossDomain: true};

const onPeopleResponse = function (character) {
    
    console.log(`Hola, yo soy ${character.name}`);
}

function obtenerPersonaje(id) {
    
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(URL, options, onPeopleResponse);
}

function printPersonaje() {
    
    for (let i = 1; i <= 11; i++) {
        
        obtenerPersonaje(i);
    }
}
printPersonaje();

