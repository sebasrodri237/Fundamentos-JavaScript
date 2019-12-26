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

    .then(personaje1 => {

        console.log(`El personaje 1 es ${personaje1.name}`);
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {

        console.log(`El personaje 2 es ${personaje2.name}`);
        return obtenerPersonaje(3)
    })
    .then(personaje3 => {

        console.log(`El personaje 3 es ${personaje3.name}`);
        return obtenerPersonaje(4)
    })
    .then(personaje4 => {

        console.log(`El personaje 4 es ${personaje4.name}`);
        return obtenerPersonaje(5)
    })
    .then(personaje5 => {

        console.log(`El personaje 5 es ${personaje5.name}`);
    })
    .catch(onError);