import Boton from "./boton.js";
const boton = new Boton();
// --------------------------
const ctx = canvas.getContext('2d');
// --------------------------
export default class Fase1 {
    // --------------------------
    botonJugarPresionado = false;
    // -------------------------
    constructor() {
    }

    dibujarFondo() {
        canvas.style.backgroundImage = "url('assets/imgs/fondofase1.jpg')";
        canvas.style.backgroundRepeat = "no-repeat";
        canvas.style.backgroundSize = "cover";
        canvas.style.backgroundPosition = "center center";
    }
    // --------------------------
    // --------------------------
    dibujarBoton() {
        boton.dibujarBoton(ctx, 300, 80, 'PEPE');

    }
    // --------------------------
    // --------------------------
    activarClickRaton() {
        canvas.addEventListener('mousedown', this.clickRaton.bind(this));
    }
    // --------------------------
    // --------------------------
    clickRaton(event) {
        // Agregado: Manejadores de eventos

        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        // Verificar si el clic está dentro del área del botón "Jugar"
        if (x >= 1080 / 2 - 150 && x <= 1080 / 2 + 150 && y >= 400 && y <= 480) {
            console.log('Dentro');
            let clickDentro = new Audio('../assets/sounds/clickDentro.mp3')
            clickDentro.play();
            this.botonJugarPresionado = true;
        } else {
            console.log('Fuera');
            let clickFuera = new Audio('../assets/sounds/clickFuera.mp3')
            clickFuera.play();
        }
    }
    // --------------------------
    // --------------------------
}
