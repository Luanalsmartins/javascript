async function buscar() {
    try {  // tenta executar
        const resposta = await fetch('url')

        console.log('Sucesso')
    } catch (erro) {  // captura o erro
        console.log('Erro encontrado')
    }
}