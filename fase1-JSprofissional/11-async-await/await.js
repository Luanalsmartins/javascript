/* O await faz o JavaScript "esperar" uma Promise terminar. 
MAS: 
- Só pode ser usado dentro de uma função async
*/

function buscarDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Dados carregados')
        }, 2000)
    })
}

async function carregar() {
    const dados = await buscarDados()

    console.log(dados)
}

carregar()