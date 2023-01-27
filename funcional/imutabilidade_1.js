//Funcão Pura, não altera os dados originais passados
function ordenar (array) {
    return [...array].sort((a, b) => a - b) //Uso do operador spread, para pegar todos os elementos do array original e colocar dentro de um novo array
}

//const nums = Object.freeze([3, 1, 7, 9, 1000, 4, 6]) //Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.
const nums = [3, 1, 7, 9, 1000, 4, 6]
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)