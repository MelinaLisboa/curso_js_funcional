const rxjs = require('rxjs')

//Interval é um operador de criação
const { interval } = rxjs //destructuring

const gerarNumeros = interval(500)

/*
   subscribe é usado para registrar no Observable 
   gerarNumeros vai retornar um Observable

 */
const sub1 = gerarNumeros.subscribe(num => {
    console.log(Math.pow(2, num))
})

const sub2 = gerarNumeros.subscribe(console.log)

/* 
    unsubscribe após 8 segundos
*/
setTimeout(() => {
    sub1.unsubscribe()
}, 8000)

setTimeout(() => {
    sub2.unsubscribe()
}, 6000)
