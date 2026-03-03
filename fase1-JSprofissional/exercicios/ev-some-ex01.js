const usuarios = [
    {nome: "Ana", ativo: true},
    {nome: "João", ativo: true},
    {nome: "Maria", ativo: false}
]

const todosAtivos = usuarios.every(usuario => usuario.ativo) 
const algumInativo = usuarios.some(usuario => !usuario.ativo)

console.log(todosAtivos, algumInativo)
