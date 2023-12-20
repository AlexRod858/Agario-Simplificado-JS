const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
import Circulo from "./classes/ellipse.js";
import Enemy from "./classes/enemies.js";
import Fase1 from "./fase1.js";

const fase1 = new Fase1;
const circulo = new Circulo();
let enemigos = [];
let fase = 1;
let juegoTerminado = false;
let tiempo = 0;
let intervaloTiempo;

// -----------------------
// -----------------------
// E N E M I G O S
// -----------------------
// -----------------------
for (let i = 0; i < 10; i++) {
    const velocidadInicialX = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
    const velocidadInicialY = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
    const enemigo = new Enemy(velocidadInicialX, velocidadInicialY);
    enemigos.push(enemigo);
}
// -----------------------
let fase1Sound = new Audio('./assets/sounds/fase1.mp3');
let fase2Sound = new Audio('./assets/sounds/fase2.mp3');
let fase3Sound = new Audio('./assets/sounds/fase3.mp3');
// -----------------------
// -----------------------
// D R A W
// -----------------------
// -----------------------
function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (fase) {
        case 1:
            fase2Sound.pause();
            fase2Sound.currentTime = 0;
            fase3Sound.pause();
            fase3Sound.currentTime = 0;
            console.log("Ejecutando músicaJuego")
            // fase1Sound.play();
            fase1.dibujarBotonJugar(ctx);
            // Delay boton jugar
            if (fase1.cambioFase) {
                setTimeout(() => {
                    fase = 2;
                }, 800); // 500 milisegundos (medio segundo)
            }
            break;
        case 2:
            fase1Sound.pause();
            fase1Sound.currentTime = 0;
            fase3Sound.pause();
            fase3Sound.currentTime = 0;
            // fase2Sound.play();
            fase2();

            break;
        case 3:
            fase1Sound.pause();
            fase1Sound.currentTime = 0;
            fase2Sound.pause();
            fase2Sound.currentTime = 0;
            // fase3Sound.play();
            break;

    }

}
// -----------------------
// -----------------------
// F A S E  2
// -----------------------
// -----------------------
function fase2() {
    canvas.style.backgroundImage = "url('assets/imgs/fondo.jpg')";
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
// -----------------------
// -----------------------

function dibujarTimer(){
    // const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`Tiempo: ${tiempo}s`, canvas.width - 10, 30);
}
const intervalId = setInterval(() => {
    tiempo++;
    dibujarTimer();
}, 1000);
// -----------------------
// -----------------------
function colission() {

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
        }
    }
}
// -----------------------
// -----------------------
function playColisionSound() {
    let colisionSound = new Audio('./assets/sounds/pop.mp3');
    colisionSound.play();
}
// -----------------------
// -----------------------
// musicaJuego();
draw();
