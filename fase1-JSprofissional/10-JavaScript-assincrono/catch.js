const promessa = new Promise((resolve, reject) => {

    let sucesso = false

    if (sucesso) {
        resolve('Funcionou')
    } else {
        reject('Erro na operação')
    }
})

promessa
    .then((resultado) => {
        console.log(resultado)
    })

    .catch((erro) => {
        console.log(erro)
    })