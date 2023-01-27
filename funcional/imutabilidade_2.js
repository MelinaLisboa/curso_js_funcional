const nums = [4, 8, 3, 2, 9, 1, 9, 3]

//Programação Funcional
//#3 - Recursividade
function somarArray(array, total = 0) {
    if (array.length === 0) {
        return total
    }
    return somarArray(array.slice(1), total + array[0]) //não há mutabilidade, slice() não altera o array original
}

const total = somarArray(nums)
console.log(total)

//-------------------------------------------------------------

//Programação Funcional - Declarativo (o que tem que ser feito)
//#2 - Reduce
// const somar = (a, b) => a + b
// const total = nums.reduce(somar)
// console.log(total)

//-------------------------------------------------------------

//Imperativo (como tem que ser feito)
//#1 - Dados mutáveis
// let total = 0

// for( let i = 0; i < nums.length; i++) {
//     total += nums[i]
// }

// console.log(total)