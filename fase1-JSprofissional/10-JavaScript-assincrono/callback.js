/* function saudacao(nome, callback) {
    console.log('Olá', nome)

    callback()
}

function finalizou() {
    console.log('Finalizou')
}

saudacao('Lua', finalizou)
*/

/* setTimeout(() => {
    console.log("Carregou os dados")
}, 2000) */

// Callback Hell

setTimeout(() => {
    console.log('Passo 1')
    setTimeout(() => {
        console.log('Passo 2')
        setTimeout(() => {
            console.log('Passo 3')
        }, 1000);
    }, 1000);
}, 1000);