export default class Boton {
    // --------------------------
    // --------------------------
    constructor() {

    }

    dibujarBotonJugar(ctx, width, height, texto) {
        // Dibujar el botón "Jugar"
        ctx.fillStyle = '#3EDBF0';
        ctx.fillRect(1080 / 2 - 150, 400, width, height);
        ctx.fillStyle = '#F0EBCC';
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px arial';
        ctx.fillText(texto, 1080 / 2, 460, 200);
    }


}
