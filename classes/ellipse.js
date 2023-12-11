const ctx = canvas.getContext('2d');
export default class Circulo {
    constructor() {
        this.position = {
            x: 200,
            y: 200
        }
    }
    dibujar() {
        ctx.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        }

}