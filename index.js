import Fase2 from "./classes/fase2.js";
// -----------------------
const canvas = document.getElementById('canvas');
const start = document.getElementById('start');
const gameover = document.getElementById('gameover');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
// -----------------------
let musicaFondo = new Audio('./assets/sounds/fase1.mp3');
// -----------------------
const fase2 = new Fase2();
// -----------------------
// -----------------------
function startGame(){
start.style.display = 'none';
canvas.style.display = 'none';
gameover.style.display = 'block';
    // juego();
}



// -----------------------
// -----------------------
// F U N C I O N  P R I N C I P A L
// -----------------------
// -----------------------

// function juego() {
//     requestAnimationFrame(juego);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     fase2.dibujarFondo();
//     fase2.pintarHero();
//     fase2.pintarEnemigos();
//     // fase2.temporizador();

// }
startGame();
