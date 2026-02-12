document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()
    verificar()
})

function verificar() {
    const data = document.querySelector('#nascimento').value
    const resultado = document.querySelector('#resultado')
    const fsex = document.querySelector('input[name="sexo"]:checked')

    //validações iniciais
    if (!data) {
        alert('Preencha a data de nascimento')
        return
    }
    if (!fsex) {
        alert('Selecione o sexo.')
        return
    }

    const nascimento = new Date(data)
    const hoje = new Date()
    const ano = nascimento.getFullYear()
    const anoAtual = hoje.getFullYear()

    if (ano < 1900 || ano > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        return
    }

    // Cálculo correto da idade
    let idade = hoje.getFullYear() - nascimento.getFullYear()

    if (hoje.getMonth() < nascimento.getMonth() || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
        idade--
    }

    // Definição do gênero 
    const genero = fsex.value === 'Masculino' ? 'Homem' : 'Mulher'
    
    //Limpando o resultado antes de adicionar novo conteúdo
    resultado.innerHTML = ''
    resultado.style.textAlign = 'center'

    // Criação da imagem
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')

    // Se for bebê (menos de 1 ano)
    if (idade === 0) {
        let meses = hoje.getMonth() - nascimento.getMonth()
        if (meses < 0) meses += 12

            img.setAttribute('src', genero === 'Homem' ? './imagens/bebe-m.png' : './imagens/bebe-f.png')

        resultado.innerHTML = `Detectamos ${genero} com ${meses} ${meses === 1 ? 'mês' : 'meses'}`
    } 

    // Criança / Adolescente / Adulto / Idoso
    else {
        if (idade < 12) {
            img.setAttribute('src', genero === 'Homem' ? './imagens/crianca-m.png' : './imagens/crianca-f.png')
        } else if (idade < 18) {
            img.setAttribute('src', genero === 'Homem' ? './imagens/adolescente-m.png' : './imagens/adolescente-f.png')
        } else if (idade < 60) {
            img.setAttribute('src', genero === 'Homem' ? './imagens/adulto-m.png' : './imagens/adulto-f.png')
        } else {
            img.setAttribute('src', genero === 'Homem' ? './imagens/idoso-m.png' : './imagens/idoso-f.png')
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

    resultado.appendChild(img)
}