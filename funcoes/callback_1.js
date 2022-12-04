function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)

exec(somarNoTerminal, 100, 25)
exec(subtrairNoTerminal, 100, 25)


const fn = () => console.log('Exec...')
setInterval(fn, 1000)

setInterval(() => console.log('Exec2...'), 2000)

setInterval(function () {
    console.log('Exec3...')
}, 3000)