export default class Fase3 {
    // --------------------------
    // --------------------------
    constructor() {
        // canvas.style.backgroundImage = "url('assets/imgs/fondofase3.jpg')";
        canvas.style.backgroundRepeat = "no-repeat";
        canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen

    }

    mostrarTiempo(tiempo) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '76px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Tiempo: ${tiempo}s`, canvas.width /2 , (canvas.height /2)-80);
    }
}