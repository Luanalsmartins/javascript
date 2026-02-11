function carregar() {
    let mensagem = window.document.querySelector('#mensagem')
    let img = window.document.querySelector('#foto')
    let data = new Date()
    let hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#ffd988'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#b45540'
    } else {
        //BOA NOITE
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#0c2a4c'

    }
}