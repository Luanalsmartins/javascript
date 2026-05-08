const promessa = new Promise((resolve, reject) => {

    let sucesso = true

    if (sucesso) {
        resolve('Compra aprovada')
    } else {
        reject('Compra recusada')
    }
})

promessa
    .then((resultado) => {
        console.log(resultado)
    })

    .catch((erro) => {
        console.log(erro)
    })