const { Observable, noop } = require('rxjs')

//$ usado por padrão para indicar uso do Observable
const obs$ = Observable.create((subscriber) => {
  // equivalente a usar o new Observable, conforme ex anterior
  subscriber.next('RxJS')
  subscriber.next('é')
  subscriber.next('bem')
  subscriber.next('poderoso!')

  if (Math.random() > 0.5) {
    subscriber.complete() // Finalizei o envio de dados
  } else {
    //gerar erro
    subscriber.error('Erro ao processar.')
  }
})

/**
 * Observable - Chamada do subscrive com Tratamento de Erros
 */
// obs$.subscribe(
//     valor => console.log(`Valor: ${valor}`),
//     erro => console.log(`Erro: ${erro}`),
//     //ou na linha acima usar: noop, caso eu não queira tratar o erro
//     () => console.log('Fim!')
// )

//ou

/**
 * Observable - Chamada do subscrive com Tratamento de Erros  (passando um objeto)
 */
obs$.subscribe({
  next(valor) {
    console.log(`Valor: ${valor}`)
  },
  error(msg) {
    console.log(`Erro: ${msg}`)
  },
  complete() {
    console.log('Fim!')
  },
})
