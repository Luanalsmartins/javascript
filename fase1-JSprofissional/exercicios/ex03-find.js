const produtos = [
    {nome: "Notebook", preco: 3000}, 
    {nome: "Mouse", preco: 80},
    {nome: "Teclado", preco: 200}
]

const maiorQue1000 = produtos.find(produto => produto.preco > 1000)

console.log(maiorQue1000)