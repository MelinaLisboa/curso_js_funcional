// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions.

function executar (fn, ...params) { //operador rest
    return function (textoInicial){
        return  `${textoInicial} ${fn(...params)}!` //operador spred
    }
}

function somar (a, b, c) {
    return a + b + c
}

function multi (a, b) {
    return a * b
}

const r1 = executar(somar, 4, 5, 6)('O resultado da soma é')
const r2 = executar(multi, 3, 10)('O resultado da multiplicação é')

console.log(r1)
console.log(r2)