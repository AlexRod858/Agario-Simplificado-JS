// export default class Fase1 {
//     // --------------------------
//     botonJugarPresionado;
//     // --------------------------
//     constructor() {
//         canvas.style.backgroundImage = "url('assets/imgs/fondofase1.jpg')";
//         canvas.style.backgroundRepeat = "no-repeat";
//         canvas.style.backgroundSize = "cover"; // Opcional: para cubrir todo el fondo sin distorsionar la imagen

//         // Agregado: Manejadores de eventos
//         canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
//     }

//     dibujarBotonJugar(ctx) {
//         // Dibujar el botón "Jugar"
//         ctx.fillStyle = '#CCCC22';
//         ctx.fillRect(1080 / 2 - 150, 400, 300, 80);
//         ctx.fillStyle = '#001122';
//         ctx.textAlign = 'center';
//         ctx.font = 'bold 48px arial';
//         ctx.fillText('JUGAR', 1080 / 2, 460, 200);
//     }

//     manejarMouseDown(event) {
//         const x = event.clientX - canvas.getBoundingClientRect().left;
//         const y = event.clientY - canvas.getBoundingClientRect().top;

//         // Verificar si el clic está dentro del área del botón "Jugar"
//         if (x >= 1080 / 2 - 150 && x <= 1080 / 2 + 150 && y >= 400 && y <= 480) {
//             console.log('Dentro');
//             let clickDentro = new Audio('../assets/sounds/clickDentro.mp3')
//             clickDentro.play();
//             this.botonJugarPresionado = true;
//         } else {
//             console.log('Fuera');
//             let clickFuera = new Audio('../assets/sounds/clickFuera.mp3')
//             clickFuera.play();
//         }
//     }
// }
