const canvas = document.getElementById('canvas');
canvas.width = 1080;
canvas.height = 760;
const ctx = canvas.getContext('2d');
import Circulo from "./classes/ellipse.js";
import Enemy from "./classes/enemies.js";
// import Fase1 from "./classes/fase1.js";
// import Fase3 from "./classes/fase3.js";

// const fase1 = new Fase1;
// const fase3 = new Fase3;
const circulo = new Circulo();
let enemigos = [];
let fase = 3;
let tiempo = 0;
let tiempoFinal;
let intervaloTiempo;

// -----------------------
let fase1Sound = new Audio('./assets/sounds/fase1.mp3');
let fase2Sound = new Audio('./assets/sounds/fase2.mp3');
let fase3Sound = new Audio('./assets/sounds/fase3.mp3');
// -----------------------
// -----------------------
// F A S E  1
// -----------------------
// -----------------------
function fase1() {
    // -----------------------
    // requestAnimationFrame(fase1);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.backgroundImage = "url('assets/imgs/fondofase1.jpg')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen
    // -----------------------
    
    dibujarBotonJugar(ctx);
}
// -----------------------
// -----------------------
function dibujarBotonJugar(ctx) {
    // Dibujar el botón "Jugar"
    ctx.fillStyle = '#CCCC22';
    ctx.fillRect(1080 / 2 - 150, 400, 300, 80);
    ctx.fillStyle = '#001122';
    ctx.textAlign = 'center';
    ctx.font = 'bold 48px arial';
    ctx.fillText('JUGAR', 1080 / 2, 460, 200);
}
// -----------------------
// -----------------------
function manejarMouseDown(event) {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    // Verificar si el clic está dentro del área del botón "Jugar"
    if (x >= 1080 / 2 - 150 && x <= 1080 / 2 + 150 && y >= 400 && y <= 480) {
        console.log('Dentro');
        let clickDentro = new Audio('../assets/sounds/clickDentro.mp3')
        clickDentro.play();
        this.botonJugarPresionado = true;
        fase++;
        canvas.removeEventListener('mousedown', manejarMouseDown);
        draw();
    } else {
        console.log('Fuera');
        let clickFuera = new Audio('../assets/sounds/clickFuera.mp3')
        clickFuera.play();
    }
}

// Agregar el event listener para 'mousedown'
canvas.addEventListener('mousedown', manejarMouseDown);

// -----------------------
// -----------------------
// F A S E  2
// -----------------------
// -----------------------
function fase2() {
    requestAnimationFrame(fase2);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.backgroundImage = "url('assets/imgs/fondo.jpg')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen
    circulo.dibujar();
    // -----------------------
    for (const enem of enemigos) {
        enem.dibujar();
        enem.movimiento();
        enem.rebote();
    }
    // -----------------------
    colission();
    dibujarTimer();

}
function dibujarTimer() {
    // const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`Tiempo: ${tiempo}s`, canvas.width - 10, 30);
}
const intervalId = setInterval(() => {
    tiempo++;
    // dibujarTimer();
}, 1000);
// ----------------------------------------
// ---------- E N E M I G O S -------------
for (let i = 0; i < 10; i++) {
    const velocidadInicialX = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
    const velocidadInicialY = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
    const enemigo = new Enemy(velocidadInicialX, velocidadInicialY);
    enemigos.push(enemigo);
}
// -----------------------
// -----------------------


// -----------------------
// -----------------------
function colission() {

    for (const enem of enemigos) {
        const distanciaX = circulo.position.x - enem.position.x;
        const distanciaY = circulo.position.y - enem.position.y;
        const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
        if (distancia < circulo.radius - enem.radius) {
            // Se detectó una colisión, el círculo se "come" al enemigo
            circulo.radius += 5;
            playColisionSound();
            console.log('COLISIONNNN');
            // Eliminar al enemigo
            enemigos.splice(enemigos.indexOf(enem), 1);
            if (enemigos < 1) {
                tiempoFinal = tiempo;
                console.log("FIN");
                fase ++;
                draw();
            }
        }
    }
}
// -----------------------
// -----------------------
function playColisionSound() {
    let colisionSound = new Audio('./assets/sounds/pop.mp3');
    colisionSound.play();
}
// -----------------------
// -----------------------
// F A S E  3
// -----------------------
// -----------------------
let botonJugarPresionado = false;
function faseTres() {
    // -----------------------
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // -----------------------
    canvas.style.backgroundImage = "url('assets/imgs/fondofase3.jpg')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen
    // -----------------------
    // -----------------------
    fase2Sound.pause();
    fase2Sound.currentTime = 0;
    fase1Sound.pause();
    fase1Sound.currentTime = 0;
    // fase3Sound.play();
    // -----------------------
    // -----------------------
    // let tiempo = 0;
    // canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
    // canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
    dibujarBotonInicio(ctx)
    // mostrarTiempo(tiempo)
}
// -----------------------
// -----------------------
function dibujarBotonInicio(ctx) {
    // Dibujar el botón "Salir"
    ctx.fillStyle = botonJugarPresionado ? '#F0EBCC' : '#3EDBF0';
    ctx.fillRect(1080 / 2 - 150, 400, 300, 80);
    ctx.textAlign = 'center';
    ctx.font = 'bold 48px arial';
    ctx.fillText('INICIO', 1080 / 2, 460, 200);
}
// -----------------------
// -----------------------
// function mostrarTiempo(tiempo) {
//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = '#F0EBCC';
//     ctx.font = '76px Arial';
//     ctx.textAlign = 'center';
//     ctx.fillText(`Tiempo: ${tiempo}s`, canvas.width / 2, (canvas.height / 2) - 80);
// }
// -----------------------
// -----------------------











// -----------------------
// -----------------------
// F U N C I O N  P R I N C I P A L
// -----------------------
// -----------------------
function draw() {
    requestAnimationFrame(fase1);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (fase) {
        case 1:
            fase1();
            break;
        case 2:
            fase2();
            tiempo = 0;
            dibujarTimer();
            break;
        case 3:
            faseTres();
            break;
    }
}
draw();
