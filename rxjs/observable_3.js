/**
 * Criar uma stream de números aleatórios
 * entre min e max com Observable!
 */

const { Observable, noop } = require('rxjs')

function entre(min, max) {
  if (min > max) [min, max] = [max, min]
  return new Observable((subscriber) => {
    const id = setInterval(() => {
      subscriber.next(Math.floor(Math.random() * (max - min + 1)) + min)
    }, 1000)
    setTimeout(() => {
      clearInterval(id)
      subscriber.complete()
    }, 10000) //A execução será finalizada após 10 segundos
  })
}

entre(4, 10).subscribe({
  next: num => console.log(`num = ${num}`),
  error: e => console.error(e),
  complete: () => console.log('Fim!')
})
