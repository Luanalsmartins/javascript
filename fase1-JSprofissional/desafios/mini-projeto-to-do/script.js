let tarefas = []
const adicionar = document.getElementById("adicionarBtn")
const lista = document.getElementById("lista")
const contador = document.getElementById("contador")
let contadorTarefas = 0

renderizarTarefas(tarefas)

function renderizarTarefas(tarefas) {
    //limpar a lista, limpar input, foco
    lista.innerHTML = ""
    tarefaInput.value = ""
    tarefaInput.focus()

    if (tarefas.length === 0) {
        lista.innerHTML = "<li>Adicione sua primeira tarefa</li>"
    }

    for (let index in tarefas) {
        const tarefa = tarefas[index]
        const li = document.createElement("li")
        const deletar = document.createElement("button")

        li.innerHTML = tarefa.texto

        if (tarefa.concluída) {
            li.classList.add("concluida")
        }

        deletar.className = "deletar"

        lista.appendChild(li)
        li.appendChild(deletar)

        li.addEventListener("click", function() {
            tarefa.concluída = !tarefa.concluída

            renderizarTarefas(tarefas)
        })

        deletar.addEventListener("click", function(event) {
            event.stopPropagation()

            deletarTarefa(index)
        })

    }
    contador.innerText = `Você tem ${contadorTarefas} tarefas`
}

function deletarTarefa(index) {
    tarefas.splice(index, 1)
    contadorTarefas--

    renderizarTarefas(tarefas)
}

function mostrarConcluidas() {
    let tarefasConcluidas = tarefas.filter(function(tarefa) {
        return tarefa.concluída === true
    })

    renderizarTarefas(tarefasConcluidas)
}

adicionar.addEventListener("click", function() {
    let tarefaInput = document.getElementById("tarefaInput").value

    if (tarefaInput.length === 0) {
        alert("Digite a tarefa para adicionar à lista!")
        return
    }

    tarefas.push({texto: tarefaInput, concluída: false})

    contadorTarefas++

    renderizarTarefas(tarefas)
})
document.getElementById("mostrarConcluidas").addEventListener("click", function() {
    mostrarConcluidas()
})