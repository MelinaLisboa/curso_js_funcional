function gerarNumeros(fn) {
  return {
    iniciar(fn, intervalo = 1000) {
      let num = 0
      const i = setInterval(() => {
        fn(num++)
      }, intervalo)

      return {
        parar() {
          clearInterval(i)
        },
      }
    },
  }
}

const temp1 = gerarNumeros()

const exec11 = temp1.iniciar((numero) => {
  console.log(`#1.1: ${numero * 2}`)
}, 1000)

const exec12 = temp1.iniciar((numero) => {
  console.log(`#1.2: ${numero * 2}`)
}, 500)

const temp2 = gerarNumeros()

const exec2 = temp2.iniciar((a) => {
  console.log(`#2: ${a + 100}`)
}, 2000)

//Parar a execução após 10 segundos
setTimeout(() => {
  exec11.parar()
  exec2.parar()
}, 10000)

//Parar a execução após 12 segundos
setTimeout(() => {
  exec12.parar()
}, 12000)
