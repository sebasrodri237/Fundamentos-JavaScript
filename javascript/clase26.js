class Persona{

    constructor(nombre, apellido, altura){

        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    
    saludar(fn) {
    
        // var nombre = this.nombre;
        // var apellido = this.apellido;
        var {nombre, apellido} = this;//Sentencias de arriba en una sola
        
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if(fn){

            fn(nombre, apellido)
        }
    }

    alto(){

        if (this.altura >= 1.8) {
        
            console.log(`Yo mido ${this.altura} mts y al medir mas de 1.8 mts, soy una persona alta`);
        } else {
    
            console.log(`Yo mido ${this.altura} mts y al no medir mas de 1.8 mts, soy una persona baja`);
        }
    }
}

class Desarrollador extends Persona{

    constructor(nombre, apellido, altura) {/*subtipo del prototipo de persona*/ 
        
        super(nombre, apellido, altura);
    }
    saludar(fn) {
        
        var {nombre, apellido} = this;

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if(fn){

            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){

    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){

        console.log(`Ah bueno, no sabia que eras desarrollador`);
    }
}

var sebastian = new Desarrollador('Sebastian', 'Rodriguez', 1.85);
var pepe = new Desarrollador('Pepe', 'Perez', 1.7);
var john = new Persona('John', 'Johnson', 1.9);

sebastian.saludar(responderSaludo);
john.saludar();
pepe.saludar(responderSaludo);