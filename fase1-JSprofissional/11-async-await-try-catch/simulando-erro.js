function gerarErro() {
    return new Promise((resolve, reject) => {
        reject('Algo deu errado')
    })
}

async function executar() {
    try {
        const resultado = await gerarErro()

        console.log(resultado)
    } catch (erro) {
        console.log('Erro:', erro)
    }
}

executar()