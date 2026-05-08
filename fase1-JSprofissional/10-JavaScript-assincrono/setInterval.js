let contador = 0

const intervalo = setInterval(() => {
    contador++

    console.log(contador)

    if (contador === 5) {
        clearInterval(intervalo)
    }
}, 1000);