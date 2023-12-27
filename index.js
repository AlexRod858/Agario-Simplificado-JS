// -----------------------
const canvas = document.getElementById('canvas');
const start = document.getElementById('start');
const gameover = document.getElementById('gameover');
// -----------------------
let musicaFondo = new Audio('./assets/sounds/fase1.mp3');
musicaFondo.play();
let clickSound = new Audio('./assets/sounds/clickDentro.mp3');
// -----------------------
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

// -----------------------
// -----------------------
// F U N C I O N  P R I N C I P A L
// -----------------------
// -----------------------
import Fase2 from "./classes/fase2.js";
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
const fase2 = new Fase2();

function canvasScreen() {
    requestAnimationFrame(canvasScreen);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fase2.dibujarFondo();
    fase2.pintarHero();
    fase2.pintarEnemigos();
    // fase2.temporizador();

}
canvasScreen();
