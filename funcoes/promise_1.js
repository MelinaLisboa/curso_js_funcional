//Exemplo 1--------------------------------------------------------------------
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

console.log(typeof p)

// p.then(function(valor) {
//     console.log(valor)
// })

//Arrow function
p.then(valor => console.log(valor))

//Exemplo 2--------------------------------------------------------------------
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Melina', 'Gustavo', 'Luna', 'Alberto'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    //.then(v => console.log(v))
    .then(console.log) //vai imprimir no console o valor recebido por parâmetro, igual código acima
    
