promessa 
    .then((resultado) => {
        console.log(resultado)
    })

    .catch((erro) => {
        console.log(erro)
    })

    .finally(() => {
        console.log('Fim da operação')
    })
    