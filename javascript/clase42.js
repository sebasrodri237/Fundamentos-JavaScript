        const celeste = document.getElementById('celeste');
        const violeta = document.getElementById('violeta');
        const naranja = document.getElementById('naranja');
        const verde = document.getElementById('verde');
        const btnEmpezar = document.getElementById('btnEmpezar');
        const ULTIMO_NIVEL = 10;

        class Juego{

            constructor(){

                this.inicializar = this.inicializar.bind(this);
                this.inicializar();
                this.generarSecuencia();
                setTimeout(this.siguienteNivel, 500);
            }

            inicializar(){

                this.toggleBtnEmpezar();/*Aqui le agrego una clase al boton de empezar en css, esta 
                clase tiene display:none para ocultar el boton, como es un toggle sera como un switch agregando y quitando
                la clase segun lo necesitemos*/
                this.elegirColor = this.elegirColor.bind(this)/*Se agrega el bind para que el metodo elegirColor 
                tenga a this atado como nuestra instancia u objeto al juego y no al boton que seleccionamos como
                estaba ocurriendo*/
                this.siguienteNivel = this.siguienteNivel.bind(this);/*Se agrega el bind para que el metodo siguienteNivel 
                tenga a this atado como nuestra instancia u objeto al juego y no a window, que se da debido a utilizar setTimeout*/
                this.nivel = 1;
                this.colores = {

                    celeste,
                    violeta,
                    naranja,
                    verde
                }/*Puedo colocarlos asi sin clave, ya que en JavaScript
                si la clave y el valor son el mismo lo puedo dejar asi*/
            }

            toggleBtnEmpezar(){

                if (btnEmpezar.classList.contains('hide')) {
                    
                    btnEmpezar.classList.remove('hide');
                } else {
                    
                    btnEmpezar.classList.add('hide');
                }
            }

            generarSecuencia(){

                this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4));
                /*Otra forma de crear un array, rellenarlo y modificarlo*/
            }

            siguienteNivel(){

                this.subnivel = 0;
                this.iluminarSecuencia();
                this.agregarEventosClick();
            }

            transformarNumeroAColor(numero){

                switch (numero) {
                    case 0:
                        return 'celeste'
                    case 1:
                        return 'violeta'
                    case 2:
                        return 'naranja'
                    case 3:
                        return 'verde'            

                }
            }

            transformarColorANumero(color){

                switch (color) {
                    case 'celeste':
                        return 0
                    case 'violeta':
                        return 1
                    case 'naranja':
                        return 2
                    case 'verde':
                        return 3            

                }
            }

            iluminarSecuencia(){

                for(let i = 0; i < this.nivel; i++ ){

                    const color = this.transformarNumeroAColor(this.secuencia[i]);
                    setTimeout(() => this.iluminarColor(color), 1000*i);
                }
            }

            iluminarColor(color){

                this.colores[color].classList.add('light');
                setTimeout(() => this.apagarColor(color), 350);
            }

            apagarColor(color){

                this.colores[color].classList.remove('light');
            }

            agregarEventosClick(){

                this.colores.celeste.addEventListener('click', this.elegirColor);
                this.colores.violeta.addEventListener('click', this.elegirColor);
                this.colores.naranja.addEventListener('click', this.elegirColor);
                this.colores.verde.addEventListener('click', this.elegirColor);
            }

            eliminarEventosClick(){

                this.colores.celeste.removeEventListener('click', this.elegirColor);
                this.colores.violeta.removeEventListener('click', this.elegirColor);
                this.colores.naranja.removeEventListener('click', this.elegirColor);
                this.colores.verde.removeEventListener('click', this.elegirColor);
            }

            elegirColor(ev){

                const nombreColor = ev.target.dataset.color;
                const numeroColor = this.transformarColorANumero(nombreColor);
                
                this.iluminarColor(nombreColor);

                if (numeroColor === this.secuencia[this.subnivel]) {
                    
                    this.subnivel++;
                    if (this.subnivel === this.nivel) {
                        
                        this.nivel++;
                        this.eliminarEventosClick()
                        if (this.nivel === (ULTIMO_NIVEL + 1)) {

                            this.ganoElJuego();
                        }else{

                            setTimeout(this.siguienteNivel, 1500);
                        }
                    }
                }else{

                    this.perdioElJuego();
                }
                
            }
        ganoElJuego(){

            swal('Platzi Game','Felicitaciones Ganaste!!!', 'success')
                .then(this.inicializar);
        }
        perdioElJuego(){

            swal('Platzi Game','Lo lamento has perdido :(', 'error')
                .then(() =>{

                    this.eliminarEventosClick()
                    this.inicializar();
                })
        }
        }

        function empezarJuego() {
            
            window.juego = new Juego()/*Para poder debuggearla, mirando
            en consola que sucede con esta variable*/
        }