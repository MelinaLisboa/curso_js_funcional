// functors são objetos que implementam a função MAP
// que também é um "wrapper" de um valor

//ARRAY é um exemplo de FUNCTORS
const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums.map((el) => el + 10).map((el) => el * 2)

console.log(nums)
console.log(novosNums)

function TipoSeguro(valor) {
  return {
    valor,
    invalido() {
      this.valor === null || this.valor === undefined
    },
    map(fn) {
      if (this.invalido()) {
        return TipoSeguro(null)
      } else {
        const novoValor = fn(this.valor)
        return TipoSeguro(novoValor)
      }
    },
  }
}

const textoOriginal = 'Esse é um texto'
const textoAlterado = TipoSeguro(textoOriginal)
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!!`)
  .map((t) => t.split('').join(' '))

console.log(textoOriginal, textoAlterado.valor)