let lista = []
let todosvalores = document.getElementById('todosvalores')
let resultado = document.getElementById('resultado')

function verificar() {
    let campo = document.getElementById('numero')
    let numero = Number(campo.value)

    if (!numero || numero <= 0 || numero > 100 || lista.includes(numero)) {
        alert ('Valor inválido ou já encontrado na lista.')
        campo.value = ''
        campo.focus()
        return 
    }

    lista.push(numero)

    let item = document.createElement('option')
    item.text = `Valor ${numero} adicionado.`
    todosvalores.appendChild(item)

    resultado.innerHTML = ''

    campo.value = ''
    campo.focus()
}

function finalizar() {
    if (lista.length === 0) {
        alert('Adicione valores antes de finalizar!')
        return
    }

    let maiorvalor = [...lista].sort((a, b) => b - a)
    let menorvalor = [...lista].sort((a, b) => a - b)

    let soma = 0
    for(let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }

    let media = soma / lista.length

    resultado.innerHTML = `<br><p>Ao todo, temos ${lista.length} números cadastrados.</p><br>
    <p>O maior valor informado foi ${maiorvalor[0]}.</p><br>
    <p>O menor valor informado foi ${menorvalor[0]}.</p><br>
    <p>Somando todos os valores, temos ${soma}.</p><br>
    <p>A média dos valores digitados é ${media}.</p>
    `
}

document.getElementById('adicionar').addEventListener('click', verificar)
document.getElementById('finalizar').addEventListener('click', finalizar)