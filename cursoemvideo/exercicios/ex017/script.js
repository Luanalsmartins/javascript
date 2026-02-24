document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault()
    verificar()
})

function verificar() {
    let inicioInput = document.getElementById('iinicio').value
    let fimInput = document.getElementById('ifim').value
    let passoInput = document.getElementById('ipasso').value
    let resultado = document.getElementById('resultado')

    if (inicioInput === '' || fimInput === '' || passoInput === '') {
        alert('Verifique se todos os campos estão preenchidos!')
        return
    } 
    if (passoInput <= 0) {
        alert('O passo deve ser maior que 0')
        return
    }

    let inicio = Number(inicioInput)
    let fim = Number(fimInput)
    let passo = Number(passoInput)

    resultado.innerHTML = `Contando:<br>`
    
    if (inicio < fim) {
        // Contagem crescente
        while (inicio <= fim) {
        resultado.innerHTML += `${inicio}\u{1F449}`
        inicio+=passo
        }
    } else {
        // Contagem regressiva
        while (inicio >= fim) {
            resultado.innerHTML += `${inicio}\u{1F449}`
            inicio -= passo
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
}