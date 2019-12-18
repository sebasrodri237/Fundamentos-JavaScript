var sebastian = {

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
    edad: 24
}

var pepe = {

    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 45
}

function birthday(persona){

    return {

        ...persona,
        edad: persona.edad + 1
    }
}
/*Esta funcion creara un nuevo objeto persona pero modificado
mientras que el objeto que pasamos por parametro no cambiara */
