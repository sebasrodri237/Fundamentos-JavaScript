const API_URL = 'https://swapi.co/api/'; /*Conectarnos por asi
decirlo, o acceder a la API por la url*/

const PEOPLE_URL ='people/:id';
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const options = {crossDomain: true};

const onPeopleResponse = function (character) {
    
    console.log(`Hola yo soy ${character.name}`);
}

$.get(LUKE_URL, options, onPeopleResponse);
/*El callback se ejecutara solo si el request fue exitoso (logro traer los 
    datos y demas), este callback recibe como parametros, data,
    estado del request e info del request*/