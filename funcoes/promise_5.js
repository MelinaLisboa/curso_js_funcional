//Tratamento de erros dentro do contexto de Promise

//Algumas vezes a função vai retornar o valor e outras vezes ela vai dar erro, de acordo com parâmetro recebido em chanceErro
function funcionarOUNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            //con.log('temp') //para simular erro
            if(Math.random() < chanceErro){//gerar erro
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOUNao('Teste ok!', 0.5)
    .then(v => `Valor: ${v}`)
    .then(v => console.log(v),
          //err => console.log(`Erro Especifico: ${err}`) //Tratamento caso linha acima gere erro (v => cons.log(v),)
    )
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim')) //é possível colocar um then após, o catch, mas via de regra o catch é o último a ser colocado, pois depois do catch nenhum valor será obtido.