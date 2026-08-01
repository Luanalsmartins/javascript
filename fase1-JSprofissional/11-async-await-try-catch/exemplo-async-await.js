function esperar3Segundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Terminou!')
        }, 3000)
    })
}

async function executar() {
    console.log('Carregando...')

    const resposta = await esperar3Segundos()

    console.log (resposta)
}

executar()