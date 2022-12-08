//Exemplo de quando precisar várias Promises ao mesmo tempo, e quero só chamar o Then quando todas as Promises forem resolvidas.

function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

//Executa as funções abaixo em Paralelo e quando todas estiverem resolvidas, aí o Then é chamado com todos os valores de retorno de uma só vez
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,3000),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,1500),
    ])
}

console.time('Tempo de execucao de todas as funcoes com promise')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))//.then(console.log)
    .then(() => {
        console.timeEnd('Tempo de execucao de todas as funcoes com promise')
    }) 