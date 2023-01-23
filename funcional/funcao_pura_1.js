//Uma Função Pura é uma função em que o valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterais observáveis.

const PI = 3.14

//Impura: PI é um valor externo a função
function areaCirc(raio) {
    return raio * raio * PI //Impura mesmo se usar Math.PI (estável)
}

console.log(areaCirc(10))


//Pura - nada externo altera o resultado, a função tem o controle absoluto na resposta
function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI)) // ??? Fiquei com dúvida com relação a este