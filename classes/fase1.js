export default class Fase1 {
    // --------------------------
    musicaFase1Reproducida = false;
    botonJugarPresionado = false;
    // --------------------------
    constructor() {
        canvas.style.backgroundImage = "url('assets/imgs/fondofase1.jpg')";
        canvas.style.backgroundRepeat = "no-repeat";
        canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen

        // Agregado: Manejadores de eventos
        canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
        canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
        this.cambioFase = false;
    }

    dibujarBotonJugar(manuel) {
        // Dibujar el botón "Salir"
        manuel.fillStyle = this.botonJugarPresionado ? '#CCCC22' : '#F8DE22';
        manuel.fillRect(1080 / 2 - 150, 400, 300, 80);
        manuel.fillStyle = '#001122';
        manuel.textAlign = 'center';
        manuel.font = 'bold 48px arial';
        manuel.fillText('JUGAR', 1080 / 2, 460, 200);
    }

    manejarMouseDown(event) {
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;

        // Verificar si el clic está dentro del área del botón "Jugar"
        if (x >= 1080 / 2 - 150 && x <= 1080 / 2 + 150 && y >= 400 && y <= 480) {
            this.botonJugarPresionado = true;
            let clickSound = new Audio('./assets/sounds/boton.mp3');
            clickSound.play();
            this.cambioFase = true;
        }else{
            let clickSound = new Audio('./assets/sounds/click.mp3');
            clickSound.play();
        }
    }

    manejarMouseUp() {
        this.botonJugarPresionado = false;
        this.dibujarBotonJugar(canvas.getContext('2d'));
    }
}
