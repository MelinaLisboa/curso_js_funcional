const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
const dobro2 = (n, i) => n * 2 + i
const dobro3 = (n, i, array) => n * 2 + i + array.length //todos os parâmetros, elemento, indice, array completo (opcional passar um parâmetro, logo, os outros serão ignorados)

console.log(nums.map(dobro))
console.log(nums.map(dobro2))
console.log(nums.map(dobro3))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'] 
const primeiraLetra = texto => texto[0]

console.log(nomes, nomes.map(primeiraLetra))

//Exemplo--------------------------------------------------------------------

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
]

//Criar 2 funções que irão mapear o array acima, na primeira gerar um array só com os nomes dos produtos e na outra função gerar os valores consolidados, multiplicando qtde x preço, só com números

console.log('Map() JS-------------')
const getNome = (item) => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
console.log(carrinho.map(getTotal))

//Exemplo-----Criando nosso próprio MAP()---------------------------------------------------------

Array.prototype.meuMap = function(fn) {
   
    const novoArray = []
    for (let i=0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this)) //passa como parâmetro o elemento atual, índice, array 
    }
    return novoArray
}

console.log('MeuMap()-------------')
const getNome2 = (item) => item.nome
console.log(carrinho.meuMap(getNome2))

const getTotal2 = item => item.qtde * item.preco
console.log(carrinho.meuMap(getTotal2))
