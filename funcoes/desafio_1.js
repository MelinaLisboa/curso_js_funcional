//Desafios -------------------------------------------------
//Desafio 1
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const soma = somar(3)(4)(5)
console.log(soma)

//ou
const somaAB = somar(3)(4)
console.log(somaAB(5))

//Desafio 2
function calcular(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b)
        }
    }
}

const somar2 = function (x, y) {
    return x + y
}

const subtrair = function (x, y) {
    return x - y
}

const multiplicar = function (x, y) {
    return x * y
}

function dividir (x, y) {
    return x / y
}

let resultado = calcular(10)(5)(somar2)
console.log(`Soma: ${resultado}`)

resultado = calcular(10)(5)(subtrair)
console.log(`Subtração: ${resultado}`)

resultado = calcular(10)(5)(multiplicar)
console.log(`Multiplicação: ${resultado}`)

resultado = calcular(10)(5)(dividir)
console.log(`Divisão: ${resultado}`)