let tarefas = [
    {texto: "Adicione sua primeira tarefa", concluída: false}
]
const adicionar = document.getElementById("adicionarBtn")
let lista = document.getElementById("lista")

if (!lista.value) {
    renderizarTarefas(tarefas)
}

function renderizarTarefas(tarefas) {
    //limpar a lista
    lista.innerHTML = ""

    for (let tarefa of tarefas) {
        let li = document.createElement("li")
        li.innerHTML = tarefa.texto

        lista.appendChild(li)

        li.addEventListener("click", function() {
        li.classList.toggle("concluida")
    })
    }
}

adicionar.addEventListener("click", function() {
    let tarefaInput = document.getElementById("tarefaInput").value

    tarefas.push({texto: tarefaInput, concluída: false})
    renderizarTarefas(tarefas)
})
