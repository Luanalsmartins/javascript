const promessa = new Promise((resolve, reject) => {
    
    let login = true

    if(login) {
        resolve('Login realizado')
    } else {
        reject('Senha incorreta')
    }
})

promessa.then((mensagem) => {
    console.log(mensagem)
})