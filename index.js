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
let musicaFase2Reproducida = false;
let juegoTerminado = false;

// -----------------------
// -----------------------
// E N E M I G O S
for (let i = 0; i < 10; i++) {
    const velocidadInicialX = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
    const velocidadInicialY = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
    const enemigo = new Enemy(velocidadInicialX, velocidadInicialY);
    enemigos.push(enemigo);
}
// -----------------------
// -----------------------
function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (fase) {
        case 1:
            fase1.dibujarBotonJugar(ctx);
            fase1.dibujarBotonSalir(ctx);
            break;
        case 2:
            fase2();
            // if (juegoTerminado) {
            //     fase = 3;
            // }
            break;
        case 3:

            break;

    }
}
// -----------------------
// -----------------------
function fase2() {
    canvas.style.backgroundImage = "url('assets/imgs/fondo.jpg')";
    if (!musicaFase2Reproducida) {
        playFase2Sound();
        // Marca la música como reproducida para evitar repeticiones
        musicaFase2Reproducida = true;
    }
    circulo.dibujar();
    // -----------------------
    for (const enem of enemigos) {
        enem.dibujar();
        enem.movimiento();
        enem.rebote();
    }
    // -----------------------
    colission();
}
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
function playFase2Sound() {
    var fase2Sound = new Audio('./assets/sounds/fase2.mp3');
    fase2Sound.play();
}
function playColisionSound() {
    var colisionSound = new Audio('./assets/sounds/pop.mp3');
    colisionSound.play();
}
// -----------------------
// -----------------------
draw();
