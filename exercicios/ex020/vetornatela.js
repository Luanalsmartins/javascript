let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[7])
console.log(valores[4])
console.log(valores[2])
console.log(valores[9])
*/

/* 
// Primeira forma de mostrar o número em cada posição: 
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Segunda posição de mostrar o número em cada posição: 
for(let pos in valores) {
    console.log(`A  posição ${pos} tem o valor ${valores[pos]}`)
}