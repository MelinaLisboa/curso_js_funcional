const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

//1. Apenas elementos que tem fragil = true

const getNome = item => item.nome
const getFrageis = item => item.fragil
const produtosFrageis = carrinho.filter(getFrageis)
console.log(produtosFrageis)
//const produtosFrageis = carrinho.filter(getFrageis).map(getNome)
//console.log(`Produtos frágeis: ${produtosFrageis}.`)


//2. Qtde * preço -> Total de cada elemento

const getTotalM = item => item.qtde * item.preco
const valoresTotaisFrageis = produtosFrageis.map(getTotalM)
console.log(valoresTotaisFrageis)

//3. Gerar a média de todos os totais de cada um dos elementos e calcular a média dentro da função (dos produtos frágeis)

const getMediaM = (acc, el, index, array) => {
    let res = acc + el
    
    if(index === array.length - 1)
        res = res/array.length

    return res
}

const mediaFinal = valoresTotaisFrageis.reduce(getMediaM)
console.log(`Média valor produtos frágeis: ${mediaFinal.toFixed(2)}`)

//Solução do professor

const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
   // console.log(acc, el)
    return {
        qtde: novaQtde, 
        total: novoTotal, 
        media: novoTotal / novaQtde
    }
}

const mediaInicial = {qtde: 0, total: 0, media: 0}

const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)//linha com valores iniciais passados
    //.media

console.log('Média professor obj: ', media)
console.log(`Média professor: ${media.media.toFixed(2)}`)