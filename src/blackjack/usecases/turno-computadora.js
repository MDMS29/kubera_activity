import { pedirCarta, valorCarta, crearCartaHTML } from './';
import { sumarPuntos, restarPuntos } from './puntos';
/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (spanPuntuG, puntuacionGlobal, puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            restarPuntos(spanPuntuG, puntuacionGlobal)
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            if(puntosMinimos === 21){
                sumarPuntos(spanPuntuG, puntuacionGlobal, puntosMinimos)
            }else{
                sumarPuntos(spanPuntuG, puntuacionGlobal, 0)
            }
            alert('Jugador Gana');
        } else {
            restarPuntos(spanPuntuG, puntuacionGlobal)
            alert('Computadora Gana')
        }
    }, 100);
}