// valueOf(), toString(), [Symbol.toPrimitive]()

const _1 = {
    valueOf() {
        return 777
    },
    toString() {
        return '888'
    },
    [Symbol.toPrimitive]() {
        return 999
    },
}

console.log('#1:')

console.log(_1)
console.log(_1 + 1)
console.log(_1 + '1')

// - - - - - - - - - - //

const _2 = {
    valueOf: () => {
        return 777
    },
    toString: () => {
        return '888'
    },
    [Symbol.toPrimitive]: () => {
        
    },
}

console.log('#2:')

console.log(_2 + 1)
console.log(_2 + '1')

// - - - - - - - - - - //

const _3 = {
    valueOf: () => {
        return 777
    },
    toString: () => {
        return '888'
    },
    [Symbol.toPrimitive]: null, // undefined,
}

console.log('#3:')

console.log(_3 + 1)
console.log(_3 + '1')

// - - - - - - - - - - //

const _4 = {
    valueOf() {
        return 777
    },
    toString() {
        return "console.log('888')"
    },
}

console.log('#4:')

setTimeout(_4, 0)

_4.toString = function () {
    return "() => console.log(888 + 1)"
}

setTimeout(_4, 0)

_4.toString = function () {
    return () => console.log('888 + 2')
}

setTimeout(_4, 0)

_4.toString = function () {
    return "console.log(888 + 3); console.log(_4 + 4);"
}

setTimeout(_4, 0)

// - - - - - - - - - - //

const _5 = {
    valueOf() {
        return '777'
    },
}

console.log('#5:')

console.log(_5 + 1)

_5.valueOf = null
_5.toString = () => {
    return 888
},

console.log(_5 + 1)