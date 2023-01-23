//Uma Função Pura é uma função em que o valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterais observáveis.


//Pura
function soma (a, b) {
    return a + b
}

//mesmo resultado em todas as chamadas
console.log(soma(3, 2))
console.log(soma(3, 2))
console.log(soma(3, 2))

let qtdeExecucoes = 0

//Impura
function soma2 (a, b) {
    qtdeExecucoes++ //Efeito colateral observável, logo, FUNÇÃO IMPURA
    return a + b
}

console.log(qtdeExecucoes)
console.log(soma2(3, 2))
console.log(soma2(3, 2))
console.log(soma2(3, 2))
console.log(qtdeExecucoes)