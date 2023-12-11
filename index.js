const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
import Circulo from "./classes/ellipse.js";
import Enemy from "./classes/enemies.js";
// -----------------
const circulo = new Circulo();
const enemy = new Enemy(4,4);
function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fase2();
}
draw();

function fase2(){
    circulo.dibujar();
    enemy.dibujar();
    enemy.movimiento();
}