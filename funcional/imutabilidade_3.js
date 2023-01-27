const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz'
    }
}

//Boa prática utilizar Object.freeze no objeto
//console.log(pessoa)

//pessoa = {} //Não pode ser feito, por ser constante

//Atribuição por referência
const novaPessoa = pessoa

//Altera também pessoa: 
// novaPessoa.nome = 'João'
// novaPessoa.cidade = 'Fortaleza'

//Altera também pessoa:
//alteraPessoa(pessoa)

//Passagem por referência
function alteraPessoa(novaPessoa){
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
}

//Função impura
function alteraPessoaImut(pessoa) {
    const pessoaImut = { ...pessoa }
    pessoaImut.nome = 'João'
    pessoaImut.cidade = 'Fortaleza'
    pessoaImut.end.rua = 'ABC'

    return pessoaImut
}



const pImut = alteraPessoaImut(pessoa)
console.log(pessoa)
//console.log(novaPessoa)
console.log(pImut)


// Passagem por Valor ---------------------------------------------------------------------------

let a = 3
let b = a //Atribuição por valor (cópia!) 


a++
b--

console.log(a, b)