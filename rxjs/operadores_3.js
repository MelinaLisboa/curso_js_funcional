const { Observable } = require('rxjs')

/**
 * Criando um operador de criação que gera elementos a partir de determinado intervalo
 */
function elementosComDelay(tempo, ...elementos) {
  return Observable.create((subscriber) => {
    (elementos || []).forEach((el, i) => {
      setTimeout(() => {
        subscriber.next(el)
        if (elementos.length === i + 1) {
          subscriber.complete()
        }
      }, tempo * (i + 1))
    })
  })
}

elementosComDelay(1000, 1, 'Bia', 3, 4, [1, 2, 3], false)
    .subscribe(console.log)
