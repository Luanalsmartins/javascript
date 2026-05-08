function buscarUsuario() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const usuario = {
                nome: 'Lua',
                idade: 23
            }

            resolve(usuario)

        }, 2000);
    })
}

buscarUsuario()
    .then((usuario) => {
        console.log(usuario.nome)
    })

    .catch((erro) => {
        console.log(erro)
    })

    .finally(() => {
        console.log('Busca finalizada')
    })