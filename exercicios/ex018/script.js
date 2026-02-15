document.getElementById('botao').addEventListener('click', function(event) {
    event.preventDefault()
    calcular()
})

function calcular() {
    let numeroInput = document.getElementById('num').value

    if (numeroInput === '') {
        alert('[ERRO] Digite um número')
        return
    }
    if (numeroInput == 0) {
        alert('0 não é um número multiplicável')
    }
    
    let número = Number(numeroInput)
    let mult = 0
    let resultado = document.getElementById('resultado')

    for (tabuada = 1; tabuada <= 10; tabuada++) {
        mult = número * tabuada
        resultado.select.innerHTML = `${numeroInput} x ${tabuada} =  ${mult}`
    }

}