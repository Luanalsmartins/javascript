const usuarios =[
    {nome: "Ana", idade: 25, ativo: true},
    {nome: "João", idade: 18, ativo: false},
    {nome: "Maria", idade: 30, ativo: false},
    {nome: "Carlos", idade: 17, ativo: true}
]

const Ativos = [...usuarios]
    .filter(usuarios => usuarios.ativo && usuarios.idade > 20)
    .sort((a, b) => b.idade - a.idade )
    .map(usuario => usuario.nome)

console.log(Ativos)

// filter, some, sort, map