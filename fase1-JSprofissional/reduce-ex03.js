const numeros = [1, 2, 3, 4, 5]

const resultado = numeros.reduce((acc, n) => {
    acc[n % 2 === 0 ? "pares" : "impares"].push(n)
    return acc
}, {pares: [], impares: [] })
console.log(resultado)