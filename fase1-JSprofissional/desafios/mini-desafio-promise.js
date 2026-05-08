function buscarUsuario() {
    return new Promise((resolve, reject) => {
        
        console.log('Carregando...')

        setTimeout(() => {
            const usuario = {
                nome: 'Maria',
                idade: 2
            }

            resolve(usuario)
        }, 3000);
    })
}

buscarUsuario()
    .then((usuario) => {
        console.log(`Usuário ${usuario.nome} carregado com sucesso`)
    })
    .catch((erro) => {
        console.log(erro)
    })
    .finally(() => {
        console.log('Fim do processo')
    })