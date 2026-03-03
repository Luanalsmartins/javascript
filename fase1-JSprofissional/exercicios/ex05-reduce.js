const pessoas = [
    {nome: "Ana", idade: 17}, 
    {nome: "Carlos", idade: 22}, 
    {nome: "Beatriz", idade: 15}, 
    {nome: "João", idade: 30}
]

const MaioresMenores = pessoas.reduce((acc, n) => {
    acc[n.idade >= 18 ? "maiores" : "menores"].push(n)
    return acc
}, {maiores: [], menores: []})

console.log(MaioresMenores)