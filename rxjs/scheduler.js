/**
 * Via de regra o comportamento padrão dos operadores é feito de forma SÍNCRONA
 */

const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Antes... ')

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe(observeOn(asyncScheduler)) //Insere o comportamento ASSÍNCRONO
    .subscribe(console.log)

console.log('Depois... ')