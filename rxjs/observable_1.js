const { Observable } = require('rxjs')
/**
 * Uso de Promise
 */
const promise = new Promise (resolve => {
    resolve('Promise é bem legal!')
})

promise.then(console.log)

/**
 * Comparando com o uso do Observable, abaixo estamos gerando um stream de dados
 */

const obs = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é')
    subscriber.next('bem')
    setTimeout(() => {
        subscriber.next('legal!')
        subscriber.complete() //sinaliza fim,  que não há mais nada para enviar a partir deste observable
    }, 1000)
})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))