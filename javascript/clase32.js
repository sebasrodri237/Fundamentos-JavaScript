const API_URL = 'https://swapi.co/api/'; /*Conectarnos por asi
decirlo, o acceder a la API por la url*/

const PEOPLE_URL ='people/:id';
const options = {crossDomain: true};
var people;

function obtenerPersonaje(id, callback) {
    
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.
        get(URL, options, callback)
        .fail(() => {
            console.log(`Sucedio un error. No se puedo obtener el personaje ${id}`);    
        })
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
    
    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);    
        
        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`);
            people=personaje;
        });
    });
});