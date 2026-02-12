document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()
    verificar()
})

function verificar() {
    let data = document.querySelector('#nascimento').value
    let resultado = document.querySelector('#resultado')

    if (!data) {
        alert('Preencha a data de nascimento')
        return
    }

    let nascimento = new Date(data)
    let hoje = new Date()

    let ano = nascimento.getFullYear()
    let anoAtual = hoje.getFullYear()

    if (ano < 1900 || ano > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }

    let fsex = document.querySelector('input[name="sexo"]:checked')
    if (!fsex) {
        alert('Selecione o sexo.')
        return
    }
    
    let gênero = '' 
    if (fsex.value === 'Masculino') {
        gênero = 'Homem'
        if (idade >= 1 && idade < 12) {
            // Criança
        } else if (idade < 18) {
            // Adolescente
        } else if (idade < 60) {
            // Adulto
        } else {
            // Idoso
        }
    } else if (fsex.value === 'Feminino') {
        gênero = 'Mulher'
        if (idade >= 1 && idade < 12) {
            // Criança
        } else if (idade < 18) {
            // Adolescente
        } else if (idade < 60) {
            // Adulto
        } else {
            // Idoso
        }
    }

    // Cálculo correto da idade
    let idade = hoje.getFullYear() - nascimento.getFullYear()

    if (hoje.getMonth() < nascimento.getMonth() || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
        idade--
    }

    resultado.style.textAlign = 'center'

    // Se for bebê (menos de 1 ano)
    if (idade === 0) {
        let meses = hoje.getMonth() - nascimento.getMonth()

        if (meses < 0) {
            meses += 12
            // Bebe
        }

        resultado.innerHTML = `Detectamos ${gênero} com ${meses} ${meses === 1 ? 'mês' : 'meses'}`
    } else {
    resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

}