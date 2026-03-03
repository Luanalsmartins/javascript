const numeros = [1, 2, 3, 4, 5]

const resultado = numeros.reduce((acc, n) => {
    if (n % 2 === 0) {
    acc.push(n)
    }
    return acc
}, [])
console.log(resultado)