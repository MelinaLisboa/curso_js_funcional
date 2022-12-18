function Produto(nome, preco, desconto = 0.1) {
    this.nome = nome
    this.preco = preco
    this._desconto = desconto

    let privado = 3

    this.precoFinal = function() {
        return this.preco * (1 - this._desconto)
    }
}

//Definir uma propriedade que irá servir para todos os objetos criados
//Tudo o que for criado no protótipo do objeto, tb estará nas instâncias do objeto
Object.defineProperty(Produto.prototype, 'desconto', {
    get: function() {
        return this._desconto
    },
    set: function(novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desconto = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desconto * 100}% de desconto`
    }
})

//Todos os objetos criados terão esta função definida no prototype de Produto
Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

const p1 = new Produto('caneta', 10)
console.log(p1.nome)
p1.log()

const p2 = new Produto('geladeira', 3000)
console.log(p2)
console.log(p2.precoFinal())
p2.desconto = 0.8
console.log(p2.desconto)
console.log(p2.descString)
