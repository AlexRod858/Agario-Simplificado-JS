const ctx = canvas.getContext('2d');
export default class Circulo {
    // --------------------------
    // --------------------------
    constructor() {
        this.position = {
            x: 200,
            y: 200
        }
        // Agregar el event listener para el teclado
        document.addEventListener('keydown', (event) => this.keyHandler(event));
        // document.addEventListener('keyup', (event) => this.keyHandler(event));
        this.radius = 40;
    }
    // --------------------------
    // --------------------------
    dibujar() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }
    // --------------------------
    // --------------------------
    keyHandler(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.position.y -= 10;
                console.log('arriba');
                break;
            case 'ArrowDown':
                this.position.y += 10;
                console.log('abajo');
                break;
            case 'ArrowLeft':
                this.position.x -= 10;
                console.log('izquierda');
                break;
            case 'ArrowRight':
                this.position.x += 10;
                console.log('derecha');
                break;
        }
    }
    // --------------------------
    // --------------------------
}