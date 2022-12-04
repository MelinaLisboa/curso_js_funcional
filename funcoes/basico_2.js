function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa Tarde!')
}

// 1) Passagem de Função como Parâmetro para outra Função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function')
    fn()
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma Função a partir de uma outra Função
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

//ou

const potencia34 = potencia(3)(4)
console.log(potencia34)

