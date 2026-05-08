// FUNÇÕES DECLARADAS
/*function saudacao() {
    console.log("Olá!")
}

saudacao()*/


// FUNÇÕES ANÔNIMAS
/*const saudacao = function() {
    console.log("Olá")
}

saudacao()*/

// PARÂMETROS
/*function saudacao(nome) {
    console.log("Olá " + nome)
}

saudacao("Lua")*/

// Exemplo com dois parâmetros
/*function soma(a, b) {
    console.log(a + b)
}

soma(5, 4)*/

// RETURN
/*function soma(a, b) {
    return a + b
}

const resultado = soma(4, 6)
console.log(resultado)*/

// ARROW FUNCTIONS (=>)
/*const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))*/

// PARÂMETROS PADRÃO
/*function saudacao(nome = "visitante") {
    console.log("Olá " + nome)
}

saudacao()*/

// REST PARAMETERS (...)
/*function soma(...numeros) {
    let total = 0

    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(soma(2, 3, 4))*/

// CALLBACKS
/*function executar(funcao) {
    funcao()
}

executar(function() {
    console.log("Executando callback")
})*/
/*const numeros = [1, 2, 3]

numeros.forEach(function(n) {
    console.log(n)
})*/

// FUNÇÕES DENTRO DE FUNÇÕES
/*function externa() {
    function interna() {
        console.log("Função interna")
    }
    interna()
}
externa()*/

// CLOSURES
/*function contador() {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}
const contar = contador()
contar()
contar()
contar()
*/
