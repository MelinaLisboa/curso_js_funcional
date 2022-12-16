function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            //console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 3000) //função vai retornar valor 10 após 3 segundos
    })
}

async function executar() {

    let valor = await retornaValor() //Parece Sincrono (mas não é), espera por 3 Segundos a Promise ser resolvida
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor}....`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}....`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}....`)

    return valor + 3
}

// const v = await executar() //NÃO FUNCIONA: Node não permite chamar await diretamente
executar().then(console.log)
console.log('teste')

//OU

// async function executar2() {
//     const valor = await executar()
//     console.log(valor)
// }

// executar2()
//--------------------------------------------------------------------------------------
