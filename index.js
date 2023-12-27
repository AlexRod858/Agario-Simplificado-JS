// -----------------------
const start = document.getElementById('start');
const gameover = document.getElementById('gameover');
// -----------------------
let musicaFondo = new Audio('./assets/sounds/fase1.mp3');
musicaFondo.play();
let clickSound = new Audio('./assets/sounds/clickDentro.mp3');
// -----------------------
// -----------------------
// C A M B I O  D E  F A S E
// -----------------------
// -----------------------
const startButton = document.querySelector('#start a');
startButton.addEventListener('click', startGame);
function startGame() {
    clickSound.play();
    start.style.display = 'none';
    canvas.style.display = 'block';
    gameover.style.display = 'none';
}
function gameOver() {
    clickSound.play();
    start.style.display = 'none';
    canvas.style.display = 'none';
    gameover.style.display = 'block';
    const h1 = document.querySelector('#gameover h1');
    h1.innerHTML = 'Tiempo: '+tiempoFinal+'s';
}
// ----------------------------------------------
// ----------------------------------------------
// J U E G O
// ----------------------------------------------
// ----------------------------------------------
const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
import Circulo from "./classes/ellipse.js";
import Enemy from "./classes/enemies.js";
const circulo = new Circulo();
let enemigos = [];
let tiempo = 0;
let tiempoFinal = 0;
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

    canvas.style.backgroundImage = "url('assets/imgs/fondo.jpg')";
    canvas.style.backgroundPosition = 'center center';
    canvas.style.backgroundSize = 'cover';

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
function dibujarTimer() {
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
            if (enemigos < 1) {
                tiempoFinal = tiempo;
                console.log(tiempoFinal);
                console.log("FIN");
                gameOver();
            }
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
draw();