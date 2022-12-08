//Usando Promise, passar path para um método e receber o conteúdo de um arquivo no then

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function getArquivo(caminho) {
    
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))
        // fs.readFile(caminho, function(_, data) {
        //     resolve(data)
        // })
    })
}


getArquivo(caminho)
    .then(conteudo => console.log(`Tratamento 1: ${conteudo}`))



getArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)

