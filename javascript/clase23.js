function Persona(nombre, apellido, altura){

    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.alto = () =>{ /*Esta arrow function no debe utilziarse
    en metodos o POO por el momento hasta saber mas de ella en
    las siguientes clase, este codigo no correra bien es solo explicacion*/
    
    debugger
    return this.altura >= 1.8;
}

var sebastian = new Persona('Sebastian', 'Rodriguez', 1.85);
var pepe = new Persona('Pepe', 'Perez', 1.7);
var john = new Persona('John', 'Johnson', 1.9);