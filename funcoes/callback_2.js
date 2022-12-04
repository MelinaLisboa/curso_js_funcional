//bibliotecas node
const fs = require('fs') //file system
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//function exibirConteudo(err, conteudo)
function exibirConteudo(_, conteudo) {// JS _: não importa o primeiro parâmetro
    console.log(conteudo.toString())
}

//Não espera a execução da leitura, Assincrono: a função callback é chamada depois que o arquivo for lido
console.log('Inicio...')
//fs.readFile(caminho, {}, exibirConteudo)
//fs.readFile(caminho, exibirConteudo) //JS permite suprimir o parâmetros
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

//Para ler de forma síncrona, vai ficar esperando o código de leitura do arquivo
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')