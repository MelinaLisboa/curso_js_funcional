//Callback Hell
// setTimeout(function() {
//     console.log('Executando callback 1...')    
//     setTimeout(() => {
//         console.log('Executando callback 2...')
//         setTimeout(function() {
//             console.log('Executando callback 3...')
//         }, 1000)  
//     }, 2000)
// }, 2000)

//Usando Promises

function esperarPor(tempo = 1000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor(2000)
    .then(() => esperarPor(2000))
    .then(esperarPor) //passando a referência da função; uso do parâmetro padrão

