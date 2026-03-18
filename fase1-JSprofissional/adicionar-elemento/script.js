// criar elemento
var elemento = document.createElement("div")

elemento.classList = "div-criada"

console.log(elemento)

var container = document.querySelector("#container")

// inserindo elemento filho 
container.appendChild(elemento)

// insertBefore - insere antes

var elemento2 = document.createElement("div")

elemento2.classList = "div-before"

var elemento3 = document.querySelector("#container .div-criada")

console.log(elemento3)

container.insertBefore(elemento2, elemento3) // (elemento que vai antes, elemento referência)