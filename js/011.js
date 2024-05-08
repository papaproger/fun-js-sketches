// Lexical Scope, LexicalEnvironment, Closure

let sum_1 = x => y => x + y
console.log(sum_1(1)(2))

let a = 1
let sum_a = sum_1(a)
console.log(sum_a(2))

a = 2
console.log(sum_a(2))

let sum_2 = () => y => a + y
sum_a = sum_2()
a = 5
console.log(sum_a(5))

let sum_3 = () => {
    let a = 3
    return y => a + y
}
sum_a = sum_3()
console.log(sum_a(5))

let sum_4 = () => {
    let a = 3
    let func = y => a + y
    console.log(func(100))
    a = 4
    return func
}
sum_a = sum_4()
console.log(sum_a(5))

{
    let str = 'hello'
    setTimeout(() => console.log(`timer: ${str}`), 0)
    Promise.resolve(str).then(result => console.log(`then: ${result}`))
    str = 'bye'
}

{
    let str = 'hello'
    let func_1 = () => console.log(`timer: ${str}`)
    setTimeout(func_1)
    let func_2 = result => console.log(`then: ${result}`)
    Promise.resolve(str).then(func_2)
    str = 'bye'
}

let x = 7
let f = () => x
console.log(f())