const numeros = [1, 2, 3, 4, 5]

const resultado = numeros.reduce((acc, n) => {
    if (n % 2 === 0) {
        acc.pares.push(n)
    } else {
        acc.impares.push(n)
    }
    return acc
}, {pares: [], impares: [] })
console.log(resultado)

// pares: [2, 4]
// impares: [1, 3, 5]