import Fase1 from "./classes/fase1";
import Fase2 from "./classes/fase2";
import Fase3 from "./classes/fase3";
// -----------------------
const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
// -----------------------
let musicaFondo = new Audio('./assets/sounds/fase1.mp3');
// -----------------------
const fase1 = new Fase1();
const fase2 = new Fase2();
const fase3 = new Fase3();
// -----------------------
let fase = 1;
// -----------------------
// -----------------------
// F U N C I O N  P R I N C I P A L
// -----------------------
// -----------------------
function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (fase) {
        case 1:
            fase1.dibujarFondo();
            fase1.dibujarBoton();
            fase1.clickRaton();
            break;
        case 2:
            fase2.dibujarFondo();
            fase2.pintarEnemigos();
            fase2.pintarHero();
            fase2.temporizador();
            break;
        case 3:
            fase3.dibujarBoton();
            fase3.dibujarFondo();
            fase3.clickRaton();
            break;
    }
}
draw();
