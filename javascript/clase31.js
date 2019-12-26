const API_URL = 'https://swapi.co/api/'; /*Conectarnos por asi
decirlo, o acceder a la API por la url*/

const PEOPLE_URL ='people/:id';
const options = {crossDomain: true};

function obtenerPersonaje(id, callback) {
    
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(URL, options, onPeopleResponse = function (character) {
    
        console.log(`Hola, yo soy ${character.name}`);

        if (callback) {
            callback();
        }
    });
}

obtenerPersonaje(1, function () {
    
    obtenerPersonaje(2, function () {
        
        obtenerPersonaje(3);
    });
});