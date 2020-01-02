const sebas ={

    nombre: 'Sebastian',
    apellido: 'Rodriguez',
}

var pepe = {

    nombre: 'Pepe',
    apellido: 'Perez',
}

function saludar() {
    
    console.log(`Hola mi nombre es ${this.nombre}`);
    /*Aqui el this hace referencia a window */
}

const saludarASebas = saludar.bind(sebas);
/*Primer forma de cambiar el contexto.
Aqui lo que se hace es devolver la funcion atando 
el parametro pasado al bind como el this en esta funcion 
pero no ejecuta la funcion. El segundo parametro son los
parametros de la funcion principal*/

saludar.call(sebas);
/*Segunda forma de cambiar el contexto. Aqui el this es el primer parametro
que pasamos al call pero ademas, ejecuta la funcion El segundo parametro 
son los parametros de la funcion principal
 */

saludar.apply(sebas);
/*Tercera forma de cambiar el contexto. Muy similar al call.
Pero el segundo parametro es un arreglo con los parametros de 
la funcion principal

 */
