const { of, Obsevable, Observable } = require('rxjs')

function terminadoCom(parteFinal) {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        // next(valor) {
        //     if(valor.endsWith(parteFinal)){
        //         subscriber.next(valor)
        //     }
        // },
        // error(e) {
        //     subscriber.error(e)
        // },
        // complete() {
        //     subscriber.complete()
        // }
        next: (valor) => {
          if (Array.isArray(valor)) {
            subscriber.next(valor.filter((el) => el.endsWith(parteFinal)))
          } else {
            if (valor.endsWith(parteFinal)) {
              subscriber.next(valor)
            }
          }
        },
        error: (e) => {
          subscriber.error(e)
        },
        complete: () => {
          subscriber.complete()
        },
      })
    })
  }
}

//Passando Array como parâmetro
of(['Ana Silva', 'Maria Silva', 'Pedro Assis'])
  .pipe(terminadoCom('Silva'))
  .subscribe(console.log)

  //Passando Strings como parâmetro
of('Ana Silva', 'Maria Silva', 'Pedro Assis')
.pipe(terminadoCom('Silva'))
.subscribe(console.log)
