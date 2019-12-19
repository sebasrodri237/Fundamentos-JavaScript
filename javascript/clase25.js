class Persona{

    constructor(nombre, apellido, altura){

        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    
    saludar() {
    
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
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
    saludar() {
    
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

var sebastian = new Desarrollador('Sebastian', 'Rodriguez', 1.85);
var pepe = new Persona('Pepe', 'Perez', 1.7);
var john = new Persona('John', 'Johnson', 1.9);