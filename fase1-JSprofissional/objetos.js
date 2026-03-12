// CRIANDO E ACESSANDO OBJETOS 
/*let pessoa = {
    nome: "Lua",
    idade: 23,
    cidade: "São Paulo"
}
console.log(pessoa.nome)
console.log(pessoa["idade"])*/

// MODIFICAR VALORES, ALTERAR, ADICIONAR E REMOVER PROPRIEDADES 
/*let pessoa = {
    nome: "Lua",
    idade: 23,
    cidade: "São Paulo"
}
pessoa.idade = 22
pessoa.profissao = "Programadora"
delete pessoa.cidade
console.log(pessoa)*/

// MÉTODOS DENTRO DE OBJETOS 
/*let pessoa = {
    nome: "Lua",
    idade: "22",

    falar: function() {
        console.log("Olá!")
    }
}
pessoa.falar()*/

/*let pessoa = {
    nome: "Lua",
    idade: "22",

    falar() {
        console.log("Olá!")
    }
}
pessoa.falar()*/

// this
/*let pessoa = {
    nome: "Lua",
    idade: "22",

    apresentar() {
        console.log("Meu nome é " + this.nome)
    }
}
pessoa.apresentar()*/

// DESTRUCTURING e renomeando variáveis
/*let pessoa = {
    nome: "Lua",
    idade: 23,
    cidade: "São Paulo"
}
let {nome, idade} = pessoa
console.log(nome)
console.log(idade)

let {nome: nomePessoa} = pessoa
console.log(nomePessoa)*/

// Spread Operator 
/*let pessoa = {
    nome: "Lua",
    idade: 22
}
let copia = {...pessoa}
console.log(copia)
// Adicionar propriedades
let pessoaCompleta = {
    ...pessoa,
    Cidade: "São Paulo"
}
console.log(pessoaCompleta)*/
