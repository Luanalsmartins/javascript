const usuarios = [
    {nome: "Ana", ativo: true},
    {nome: "João", ativo: true},
    {nome: "Maria", ativo: false},
    {nome: "Alice", ativo: false}
]

const primeiroInativo = usuarios.find(usuario => !usuario.ativo)

console.log(primeiroInativo)