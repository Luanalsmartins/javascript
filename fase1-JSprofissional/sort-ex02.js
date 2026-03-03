const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 18 },
  { nome: "Maria", idade: 30 }
]

const IdadeCrescente = [...usuarios].sort((a, b) => a.idade - b.idade)
const IdadeDecrescente = [...usuarios].sort((a, b) => b.idade - a.idade)

console.log(IdadeCrescente, IdadeDecrescente)