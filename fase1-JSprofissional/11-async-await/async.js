/* A palavra async transforma uma função em assíncrona 
Funções async sempre retornam uma Promise.*/

async function saudacao() {
    return 'Olá'
}

saudacao().then((mensagem) => {
    console.log(mensagem)
})