// Closure é quando uma função "lembra" seu escopo léxico, mesmo quando
// a função é executada fora desse escopo léxico. 
// Escopo léxico é o escopo no qual a função foi definida fisicamente dentro do código

const somarXMais3 = require('./closure_escopo')

const x = 1000
console.log(somarXMais3())

