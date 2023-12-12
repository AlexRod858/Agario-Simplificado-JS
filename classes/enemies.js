const ctx = canvas.getContext('2d');
export default class Enemy {
    // --------------------------
    // --------------------------
    constructor(velX, velY) {
        this.position = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
        }
        this.velocidad = {
            x: velX,
            y: velY
        }
        this.radius = Math.random()*50 + 20;
    }
    // --------------------------
    // --------------------------
    dibujar() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
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
    rebote() {
        if (this.position.x > 1080 || this.position.x < 0) {
            this.velocidad.x = -this.velocidad.x
        }
        if (this.position.y > 760 || this.position.y < 0) {
            this.velocidad.y = -this.velocidad.y
        }
    }
    // --------------------------
    // --------------------------
}