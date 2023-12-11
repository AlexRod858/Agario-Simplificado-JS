const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
import Circulo from "./classes/ellipse.js";
// -----------------
const circulo = new Circulo();

function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circulo.dibujar();
}
draw();