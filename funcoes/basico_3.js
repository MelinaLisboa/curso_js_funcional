//Arrow Function
//É uma função anônima, é sempre uma function expression
const felizNatal = () => console.log('Feliz Natal!') //Nenhum parâmetro
felizNatal()

const saudacao = nome => `Fala ${nome}, blz!?!` // sem return explicito
console.log(saudacao('Melina'))

//Somar comum
const somar = (numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))

//Somar com o operador rest ... : JS pega todos os parâmetros e os coloca em um array
const somarOpRest = (...numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somarOpRest(1,2,3,4,5,6,7,8,9,10))

//Transformando função do basico_2 em arrow function
const potencia = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}

console.log(potencia(2)(8))

//Enxugando ainda mais a sintaxe
const potenciaNovo = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}

console.log(potenciaNovo(2)(8))

//Enxugando ainda mais a sintaxe!!!
const potenciaEnx = base => exp => Math.pow(base, exp)

console.log(potenciaEnx(2)(8))

//Com mais de um parâmetro, o parênteses é obrigatório
const subtrair = (a, b) => a - b
console.log(subtrair(3, 2))

