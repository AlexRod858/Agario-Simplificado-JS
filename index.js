const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
import Circulo from "./classes/ellipse.js";
import Enemy from "./classes/enemies.js";

const circulo = new Circulo();
let enemigos = [];
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
    juego();
}
// -----------------------
// -----------------------
function juego() {
    circulo.dibujar();
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
            console.log('COLISIONNNN');
            // Puedes eliminar al enemigo si lo deseas
            enemigos.splice(enemigos.indexOf(enem), 1);
        }
    }
}
draw();
