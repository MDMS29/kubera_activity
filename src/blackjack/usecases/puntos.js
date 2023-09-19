let suma = 0
export const sumarPuntos = (spanPuntuG, puntuacionGlobal, puntosMinimos = 0) => {
    if (puntosMinimos === 36) {
        suma += 2
    }else{
        suma += 1
    }
    puntuacionGlobal = suma
    spanPuntuG.innerText = suma
}
export const restarPuntos = (spanPuntuG, puntuacionGlobal) => {
    if (suma !== 0) {
        suma -= 1
        spanPuntuG.innerText = suma
    }
    puntuacionGlobal = suma
}