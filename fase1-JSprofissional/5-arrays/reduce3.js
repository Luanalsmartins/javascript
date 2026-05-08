const numeros = [1, 2, 3]

const resultado = numeros.reduce((acc, n) => {
    acc.push(n * 2)
    return acc
}, [])

console.log(resultado)