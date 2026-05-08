const numeros = [1, 2, 3, 4]

const resultado = numeros
    .filter(n => n > 2)
    .map(n => n * 10)

console.log(resultado)