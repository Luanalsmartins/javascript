/* console.log('Início')

setTimeout(() => {
    console.log('Executou depois')
}, 2000)

console.log('Fim')
*/

/* 
setTimeout(() => {
    console.log('Olá depois de 3 segundos')
}, 3000)

// Com função normal 
function mensagem() {
    console.log("Tempo acabou")
}

setTimeout(mensagem, 2000)
*/ 

const timer = setTimeout(() => {
    console.log("Executou")
}, 3000)

clearTimeout(timer)
