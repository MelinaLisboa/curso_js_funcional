/**
 * Os dois tipos...
 * 1. Operadores de Criação
 * 2. Operadores Encadeáveis (Pipeable operators)
 */

//Operador de Criação
const { of } = require('rxjs')

//Pipeable operators
const { last, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'último')
    .pipe(
        last(),
        map(v => v[0]),
        map(letra => `A letra encontrada foi: ${letra}`)
    )
    .subscribe(console.log)