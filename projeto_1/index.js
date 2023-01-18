const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
        '.', '?', '-', ',', '"', 
        '♪', '_', '<i>', '</i>', 
        '\r', '[', ']', '(', ')',
        '!'
]

//Composição de funções
fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))//.then(arquivos => fn.elementosTerminadosCom('.srt')(arquivos))
    .then(fn.lerArquivos)//    .then(arquivosSTR => fn.lerArquivos(arquivosSTR))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementosSeVazio)//.then(linhas => fn.removerSeVazio(linhas))
    .then(fn.removerElementosSeContiver('-->')) //.then(linhas => fn.removerElementosSeContiver('-->')(linhas))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
    .then(console.log)