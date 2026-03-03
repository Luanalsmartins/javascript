const usuarios = [
  { nome: "Ana", idade: 25, ativo: true },
  { nome: "João", idade: 18, ativo: false },
  { nome: "Maria", idade: 30, ativo: true },
  { nome: "Carlos", idade: 17, ativo: false }
]

const Ativos = [...usuarios]
    .filter(usuario => usuario.ativo)
    .sort((a, b) => a.idade - b.idade)
    .map(usuario => usuario.nome)

console.log(Ativos)