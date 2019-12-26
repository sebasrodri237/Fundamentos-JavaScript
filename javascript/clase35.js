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

var ids = [1, 2, 3, 4, 5];

var promesas = ids.map(id => obtenerPersonaje(id));

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError);