// String(), Number(), Boolean()

console.log(String((x, y) => { return x + y }))
console.log(Number(value))
console.log(Boolean("0"))
console.log(Boolean(""))
console.log(Boolean({}))

const obj = {
    [Symbol.toPrimitive]() {
        return false
    }
}

console.log(obj && true)