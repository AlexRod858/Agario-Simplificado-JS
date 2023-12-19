export default class Fase1 {
    // --------------------------
    // --------------------------
    constructor() {
        this.fondo = "url('assets/imgs/fondo-fase1.jpg')";
    }

    dibujarBotonJugar(pepe) {
        // Dibujar el botón "Jugar"
        pepe.fillStyle = 'green';
        pepe.fillRect(1080/2 - 150, 280, 300, 80);
    }

    dibujarBotonSalir(manuel) {
        // Dibujar el botón "Salir"
        manuel.fillStyle = 'pink';
        manuel.fillRect(1080/2 - 150, 400, 300, 80);
    }

    clickBotonJugar() {
        // Lógica para cuando se hace clic en el botón "Jugar"
        console.log('Hiciste clic en Jugar desde la fase 1');
        // Puedes cambiar de fase u realizar otras acciones aquí
    }

    clickBotonSalir() {
        // Lógica para cuando se hace clic en el botón "Salir"
        console.log('Hiciste clic en Salir desde la fase 1');
        // Puedes salir del juego o realizar otras acciones aquí
    }
}