//FUNÇÃO CONSTRUTORA
//Exemplo do uso de função para instanciar objetos

function Produto(nome, preco, desconto = 0.1) {
    this.nome = nome //publico
    this.preco = preco //publico
    this.desconto = desconto

    let privado = 3

    this.precoFinal = function() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('caneta', 10)
console.log(p1.nome)

const p2 = new Produto('geladeira', 3000)
console.log(p2)
console.log(p2.precoFinal())

//console.log(privado) //ReferenceError: privado is not defined