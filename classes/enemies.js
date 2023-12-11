const ctx = canvas.getContext('2d');
export default class Enemy {
    // --------------------------
    // --------------------------
    constructor(velX, velY) {
        this.position = {
            x: 400,
            y: 300
        }
        this.velocidad = {
            x: velX,
            y: velY
        }
    }
    // --------------------------
    // --------------------------
    dibujar() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
    // --------------------------
    // --------------------------
    movimiento() {
        this.position.x += this.velocidad.x;
        this.position.y += this.velocidad.y;
    }
    // --------------------------
    // --------------------------
}