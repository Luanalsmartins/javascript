async function buscarCEP() {
    const resposta = await fetch("https://viacep.com.br/ws/999999999/json/")
    const dados = await resposta.json()

    if (dados.erro) {
        console.log("CEP não encontrado")
    } else {
        console.log(dados)
    }
}