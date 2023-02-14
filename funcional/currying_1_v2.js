
function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        //Lazy Evaluation
        const tamanho = (texto || '').trim().length

        if (tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  }
}

//Currying com Arrow Function
// const textoComTamanhoEntreArrow = min => max => erro => {
//   return texto => {
//     const tamanho = (texto || '').trim().length

//     if (tamanho < min || tamanho > max) {
//       throw erro
//     }
//   }
// }

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!')


forcarNomeProdutoValido(p1.nome) //REUSO de parte das funções
//forcarTamanhoPadrao('Nome inválido!')(p1.nome)

//textoComTamanhoEntre(4)(255)('Texto inválido!')(p1.nome)
//textoComTamanhoEntreArrow(4)(255)('Texto inválido!')(p1.nome)
