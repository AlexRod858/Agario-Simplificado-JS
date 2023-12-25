import Boton from "./classes/boton.js";
const ctx = canvas.getContext('2d');
import Circulo from "./classes/ellipse.js";
import Enemy from "./classes/enemies.js";

const boton = new Boton();
let enemigos = [];
let tiempo = 0;
let tiempoFinal;
let intervaloTiempo;

export default class Fase2 {
    // --------------------------
    botonJugarPresionado;
    // --------------------------
    constructor() {
        canvas.style.backgroundImage = "url('assets/imgs/fondofase1.jpg')";
        canvas.style.backgroundRepeat = "no-repeat";
        canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen

        // Agregado: Manejadores de eventos
        canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
        boton.dibujarBotonJugar(ctx, 300, 80, 'PEPE');


        const intervalId = setInterval(() => {
            tiempo++;
            // dibujarTimer();
        }, 1000);
    }



    fase2() {
        requestAnimationFrame(fase2);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundImage = "url('assets/imgs/fondo.jpg')";
        canvas.style.backgroundRepeat = "no-repeat";
        canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen
        circulo.dibujar();
        // -----------------------
        for (const enem of enemigos) {
            enem.dibujar();
            enem.movimiento();
            enem.rebote();
        }
        // -----------------------
        colission();
        dibujarTimer();
    }
    dibujarTimer() {
        // const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '24px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(`Tiempo: ${tiempo}s`, canvas.width - 10, 30);
    }
    // ----------------------------------------
    // ---------- E N E M I G O S -------------
    creoEnemies() {
        for (let i = 0; i < 10; i++) {
            const velocidadInicialX = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
            const velocidadInicialY = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
            const enemigo = new Enemy(velocidadInicialX, velocidadInicialY);
            enemigos.push(enemigo);
            return enemigos;
        }
    }
    // -----------------------
    // -----------------------
    colission() {
        for (const enem of enemigos) {
            const distanciaX = circulo.position.x - enem.position.x;
            const distanciaY = circulo.position.y - enem.position.y;
            const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
            if (distancia < circulo.radius - enem.radius) {
                // Se detectó una colisión, el círculo se "come" al enemigo
                circulo.radius += 5;
                playColisionSound();
                console.log('COLISIONNNN');
                // Eliminar al enemigo
                enemigos.splice(enemigos.indexOf(enem), 1);
                if (enemigos < 1) {
                    tiempoFinal = tiempo;
                    console.log("FIN");
                    fase++;
                    draw();
                }
            }
        }
    }
    // -----------------------
    // -----------------------
    playColisionSound() {
        let colisionSound = new Audio('./assets/sounds/pop.mp3');
        colisionSound.play();
    }
}
