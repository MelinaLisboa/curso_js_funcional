const fs = require("fs");
const path = require("path");

function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        //se sim, acc é uma Promise
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho)
      const arquivosCompletos = arquivos.map(arquivo => {
        return path.join(caminho, arquivo)
      })
      resolve(arquivosCompletos)
    } catch (e) {
      reject(e)
    }
  })
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }

    // fs.readFile(caminho, (err, conteudo) => {

    // })
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho))); //Só fará a chamada do método 'then' depois que resolver todas as Promises
}

// function elementosTerminadosCom(array, padraoTextual) {
//    return array.filter(el => el.endsWith(padraoTextual))
// //    return array.filter(function (el) {
// //     return el.endsWith(padrao)
// //    })
// }

function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual))
  }
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosSeContiver(padraoTextual) {
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual));
  };
}

function removerElementosSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim()); //Se número parseInt retorna o inteiro, caso contrário retorna NAN
    return num !== num; //NAN é estritamente diferente de NAN (convenção da linguagem JS)
    //return !(num !=0 && !!num) //tb funciona
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map(el => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join('')
      }, el)
      // let textoSemSimbolos =  el
      // simbolos.forEach(simbolo => {
      //   textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
      // })
      // return textoSemSimbolos
    })
  }
}

function mesclarElementos (array) {
  return array.join(' ')
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo)
  }
}

function agruparElementos(palavras) {
  return Object.values(palavras.reduce((acc, palavra) => {
       const p = palavra.toLowerCase()
       const qtde = acc[p] ? acc[p].qtde + 1 : 1
       acc[p] = { elemento: p, qtde }
       return acc
  }, {}))
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr]
    const desc = (o1, o2) => o2[attr] - o1[attr]
    return [...array].sort(ordem === 'asc' ? asc : desc) //operador spred (cria-se um clone do array recebido)
  }
}

module.exports = {
  composicao,
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeContiver,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtribNumerico
};
