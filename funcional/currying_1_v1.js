//Exemplo 1
//Sem currying
// function soma(a, b, c) {
//     return a + b + c
// }
//console.log(soma(1, 2, 3))

//Com currying - ganho de flexibilidade, reuso
function soma(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(soma(1)(2)(3))

//Exemplo 2

function textoComTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || '').trim().length

  if (tamanho < min || tamanho > max) {
    throw erro
  }
}

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }

textoComTamanhoEntre(4, 255, 'Texto inválido!', p1.nome)
