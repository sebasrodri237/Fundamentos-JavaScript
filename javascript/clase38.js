const celeste = document.getElementById('celeste');
        const violeta = document.getElementById('violeta');
        const naranja = document.getElementById('naranja');
        const verde = document.getElementById('verde');
        const btnEmpezar = document.getElementById('btnEmpezar');

        class Juego{

            constructor(){

                this.inicializar();
                this.generarSecuencia();
            }

            inicializar(){

                btnEmpezar.classList.add('hide');/*Aqui le agrego una clase
                al boton de empezar en css, esta clase tiene display:none
                para ocultar el boton*/
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
        }

        function empezarJuego() {
            
            window.juego = new Juego()/*Para poder debuggearla, mirando
            en consola que sucede con esta variable*/
        }