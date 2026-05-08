/* const numeros = [10, 20, 30]
let soma = 0

for (i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log(soma) */

const numeros = [10, 20, 30]
// forma mais longa: 
/* const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
}, 0) */
// forma mais curta: 
const soma = numeros.reduce((acc, n) => acc + n, 0)

console.log(soma)