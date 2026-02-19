document.getElementById('botao').addEventListener('click', function(event) {
    event.preventDefault()
    tabuada()
})

function tabuada() {
    let numeroInput = document.getElementById('num').value
    let resultado = document.getElementById('resultado')

    if (numeroInput === '') {
        alert('[ERRO] Digite um número')
        return
    }
    
    let número = Number(numeroInput)
    let mult = 1
    resultado.innerHTML = ''

    while (mult <= 10) {
        let item = document.createElement('option')
        item.text = `${número} x ${mult} = ${número*mult}`
        resultado.appendChild(item)
        mult ++
    }
}