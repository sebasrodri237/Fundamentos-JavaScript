const API_URL = 'https://swapi.co/api/'; /*Conectarnos por asi
decirlo, o acceder a la API por la url*/

const PEOPLE_URL ='people/:id';
const options = {crossDomain: true};
var people;

function obtenerPersonaje(id) {
    
    return new Promise((resolve, reject) => {
        
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $.
            get(URL, options, function (data) {
                
                resolve(data);
            })
            .fail(() => reject(id))
    })
    
}
function onError(id) {
    
    console.log(`Sucedio un error al obtener el personaje de id ${id}`);
}

obtenerPersonaje(1)

    .then(function (personaje) {

        console.log(`El personaje 1 es ${personaje.name}`);
    })
    .catch(onError);