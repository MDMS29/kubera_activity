import { pedirCarta, valorCarta, crearCartaHTML } from './';
import { sumarPuntos, restarPuntos } from './puntos';
/**
 * turno de la computadora
 * @param {Number} puntosMinimosJugador puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Array<String>} deck 
 * 
 * 
 */

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);


export const turnoComputadora = (spanPuntuG, puntuacionGlobal, puntosMinimosJugador, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimosJugador) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimosJugador > 36) {
            break;
        }

    } while ((puntosComputadora < puntosMinimosJugador) && (puntosMinimosJugador <= 36));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimosJugador) {
            alert('Nadie gana :(');
        } else if (puntosMinimosJugador > 36) {
            restarPuntos(spanPuntuG, puntuacionGlobal)
            alert('Computadora gana')
        } else if (puntosComputadora > 36) {
                sumarPuntos(spanPuntuG, puntuacionGlobal, puntosMinimosJugador)
            
            var myConfetti = confetti.create(myCanvas, {
                resize: true,
                useWorker: true
              });
              myConfetti({
                particleCount: 1000,
                startVelocity: 30,
                spread: 360,
                origin: {
                    x: Math.random(),
                    // since they fall down, start a bit higher than random
                    y: Math.random() - 0.10
                }
                // any other options from the global
                // confetti function
              });
              setTimeout(() => {
                confetti.reset();
              }, 3000);
        } else {
            restarPuntos(spanPuntuG, puntuacionGlobal)
            alert('Computadora Gana')
        }
    }, 100);
}