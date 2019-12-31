function diasEntreFechas(fecha1, fecha2) {
    
    const unDia = 1000* 60* 60* 24;/*Milisegundos en un dia */
    const diferencia = Math.abs(fecha1 - fecha2);/*Dentro de abs
    para evitar numeros negativos */

    return console.log(Math.floor(diferencia/ unDia));
}

const hoy = new Date()/*Tiene la fecha actual por defecto */
const nacimiento = new Date(1995, 0, 8);/*Año, mes(por defecto enero 
    es 0), dia */

diasEntreFechas(hoy, nacimiento);

