const celeste = document.getElementById('celeste');
        const violeta = document.getElementById('violeta');
        const naranja = document.getElementById('naranja');
        const verde = document.getElementById('verde');
        const btnEmpezar = document.getElementById('btnEmpezar');

        class Juego{

            constructor(){

                this.inicializar();
                this.generarSecuencia();
                this.siguienteNivel();
            }

            inicializar(){

                btnEmpezar.classList.add('hide');/*Aqui le agrego una clase
                al boton de empezar en css, esta clase tiene display:none
                para ocultar el boton*/
                this.elegirColor = this.elegirColor.bind(this)/*Se agrega el bind para que el metodo elegirColor 
                tenga a this atado como nuestra instancia u objeto juego y no al boton que seleccionamos como
                estaba ocurriendo*/
                this.nivel = 1;
                this.colores = {

                    celeste,
                    violeta,
                    naranja,
                    verde
                }/*Puedo colocarlos asi sin clave, ya que en JavaScript
                si la clave y el valor son el mismo lo puedo dejar asi*/
            }

            generarSecuencia(){

                this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4));
                /*Otra forma de crear un array, rellenarlo y modificarlo*/
            }

            siguienteNivel(){

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

            elegirColor(ev){

                console.log(this);
            }
        }

        function empezarJuego() {
            
            window.juego = new Juego()/*Para poder debuggearla, mirando
            en consola que sucede con esta variable*/
        }