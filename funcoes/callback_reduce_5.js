const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => { //Somatório dos elementos do array
    //console.log(acc, el)
    return acc + el
}

//const somar = (acc, el) => acc + el

const totais = carrinho.map(getTotal)
console.log(totais)

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar) //.reduce(somar, 0) neste caso tanto faz passar valor inicial 0 ou não

console.log(`Total Geral: ${totalGeral}`)

//Implementa reduce
Array.prototype.meuReduce = function(fn, inicial) {//this é o array
    let acc = inicial
    for (let i=0; i < this.length; i++) {
        if(!acc && i === 0) { //se não for passado valor inicial para acumulador
            acc = this[i]
            continue //ir para a próxima repetiçao
        }

        acc = fn(acc, this[i], i, this)
    }

    return acc
}

const totalGeral2 = carrinho
    .map(getTotal)
    .meuReduce(somar) //.reduce(somar, 0) neste caso tanto faz passar valor inicial 0 ou não

console.log(`Total Geral: ${totalGeral2}`)