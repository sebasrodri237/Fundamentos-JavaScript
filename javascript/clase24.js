function heredaDe(prototipoHijo, prototipoPadre) {

    var fn = function () {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
    
}

function Persona(nombre, apellido, altura){

    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.alto = function () {
    
    if (this.altura >= 1.8) {
        
        console.log(`Yo mido ${this.altura} mts y al medir mas de 1.8 mts, soy una persona alta`);
    } else {

        console.log(`Yo mido ${this.altura} mts y al no medir mas de 1.8 mts, soy una persona baja`);
    }
    
}

function Desarrollador(nombre, apellido) {/*subtipo del prototipo de persona*/ 
    
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function () {
    
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

var sebastian = new Desarrollador('Sebastian', 'Rodriguez', 1.85);
var pepe = new Persona('Pepe', 'Perez', 1.7);
var john = new Persona('John', 'Johnson', 1.9);