let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é ${num}`) 

num[3] = 4
console.log(`Agora o vetor tem o número 4 na quarta posição ${num}`)

num.push(1)
console.log(`Adicionei o número 1 no vetor ${num}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O número primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(`Agora o vetor está em ordem crescente ${num}`)

let pos = num.indexOf(6)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
