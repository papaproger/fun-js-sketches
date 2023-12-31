# Fun JS Sketches

### <a id="0">Contents</a>

- [\[\[Prototype\]\], \_\_proto\_\_, prototype](#1)
- [setTimeout() & toString()](#2)
- [call(), apply(), bind() #1](#3)
- [call(), apply(), bind() #2](#4)
- [valueOf(), toString(), \[Symbol.toPrimitive\]()](#5)
- [\_\_proto\_\_](#6)
- [data types, typeof](#7)
- [String(), Number(), Boolean()](#8)
- [Numbers](#9)
- [Logical operators](#10)

### <a id="1">\[\[Prototype\]\], \_\_proto\_\_, prototype</a>

```javascript
let car = {
    go() { this.isOnTheGo = true },
    stop() { this.isOnTheGo = false },
    def() { return `${this.brand} is ${this.isOnTheGo ? 'on the go' : 'stopped'}` },
}

let bmw = {
    brand: 'BMW',
    hp: 220,
}

bmw.__proto__ = car

console.log('#1:')
console.log(car.def())
console.log(bmw.def())

bmw.go()

console.log('#2:')
console.log(car.def())
console.log(bmw.def())

function Lotus(hp = 320) {
    this.brand = 'Lotus'
    this.hp = hp
}

Lotus.prototype = car
Lotus.prototype.turn = function() {
    return `${this.brand} has turned`
}

const lotus = new Lotus(250)

console.log('#3:')
console.log(car.def())
console.log(lotus.def())

lotus.go()

console.log('#4:')
console.log(car.def())
console.log(lotus.def())

console.log('#5:')
console.log(car.isOnTheGo)

car.stop()

console.log('#6:')
console.log(car.isOnTheGo)
console.log(bmw.isOnTheGo)
console.log(lotus.isOnTheGo)

console.log('#7:')
console.log(bmw.turn())
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/001.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="2">setTimeout() & toString()</a>

```javascript
function someLog(s) { console.log(s) }

setTimeout("someLog('L1')", 100)

setTimeout(() => {
    someLog('L2-1')
    setTimeout("someLog('L2-2')", 100)
}, 200)

setTimeout({
    n: 777,
    s: 'I am simply the best JS developer',
    toString() { return "someLog('L3')" }
}, 200)

setTimeout({
    toString() {
        setTimeout("someLog('L4-1')", 100)
        return "someLog('L4-2')"
    }
}, 400)

console.log("someLog('L5')")
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/002.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="3">call(), apply(), bind() #1</a>

```javascript
function modifier(key, value) {
    console.log(this[key] += value)
}

let a = {
    number: 10
}

modifier.call(a, 'number', 1)
modifier.apply(a, ['number', 2])

const a_modifier = modifier.bind(a)
a_modifier('number', 3)

a.number = 20

modifier.call(a, 'number', 1)
a_modifier('number', 3)

a = {
    number: 30
}

modifier.apply(a, ['number', 2])
a_modifier('number', 3)
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/003.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="4">call(), apply(), bind() #2</a>

```javascript
let person = {
    study(subject) { console.log(`${this.name} is studying ${subject}`) },
    fallInLoveWith(name) { console.log(`${this.name} is in love with ${name}`) },
}

let james = {
    name: 'James',
    __proto__: person,
}

let dog = {
    eat(food) { console.log(`${this.name} is eating ${food}`) },
    bark() { console.log(`${this.name} is barking`) },
}

let henry = {
    name: 'Henry',
    __proto__: dog,
}

console.log('#1:')

james.study('javascript')
henry.eat('some chicken')
henry.bark()

console.log('#2:')

henry.eat.call(james, 'some salad')
henry.bark.bind(james)()
james.study.apply(henry, ['how to jump'])

console.log('#3:')

let henryLoves = james.fallInLoveWith.bind(henry)
henryLoves('Emma')

let henryLovesAnotherWoman = james.fallInLoveWith.bind(henry, 'Elizabeth')
henryLovesAnotherWoman()

console.log('#4:')

function f() {
    console.log([].pop.call(arguments))
    console.log(arguments.length)
}

f(1, 2, 3, 4, 5)
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/004.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="5">valueOf(), toString(), \[Symbol.toPrimitive\]()</a>

```javascript
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
```

```javascript
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
```

```javascript
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
```

```javascript
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
```

```javascript
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
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/005.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="6">\_\_proto\_\_</a>

```javascript
// "use strict";

let m = 1
function objLog(markNumber) {
    console.log(`#${markNumber}:`)
    for (let prop in this) console.log(this[prop])
}

const a = {
    prop_1_in_a: "a . prop #1",
    prop_2_in_a: "a . prop #2",
}

const b = {
    prop_1_in_b: "b . prop #1",
    prop_2_in_b: "b . prop #2",
}

const c = {
    prop_1_in_c: "c . prop #1",
    prop_2_in_c: "c . prop #2",

    __proto__: a,
}

objLog.call(c, m++)

let d = {
    ...c,
}

objLog.call(d, m++)

d = {
    ...c,

    __proto__: c.__proto__,
}

objLog.call(d, m++)

d = {
    ...c,
}

d.__proto__ = a
d["__proto__"] = b

objLog.call(d, m++)

d = {
    ...c,
}

d.__proto__ = a
Object.defineProperty(d, "__proto__", {
    value: b,
    enumerable: true,
})

objLog.call(d, m++)

console.log(delete d.__proto__)
console.log(delete d["__proto__"])

d.__proto__ = {
    prop_1: "unexpected prop #1",
    prop_2: "unexpected prop #2",
}

objLog.call(d, m++)
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/006.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="7">data types, typeof</a>

```javascript
let mark = 0
function typeofLog(value) {
    console.log(`#${++mark}: ${typeof(value)}`)
}

/*  1 */ typeofLog(Infinity) // -Infinity
/*  2 */ typeofLog(NaN)
/*  3 */ typeofLog(1)
/*  4 */ typeofLog(1n)
/*  5 */ typeofLog("")
/*  6 */ typeofLog(true) // false
/*  7 */ typeofLog(null)
/*  8 */ typeofLog(undefined)
/*  9 */ typeofLog({})
/* 10 */ typeofLog(Symbol())
/* 11 */ typeofLog(() => {})

console.log(NaN ** 0)
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/007.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="8">String(), Number(), Boolean()</a>

```javascript
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
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/008.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="9">Numbers</a>

```javascript
// IEEE-754: | 1 | 11 | 52 |
// [ -(2 ** 53 - 1); (2 ** 53 - 1) ]

console.log(`
#1:
    ${5_555 + 5}
    ${+"5_555"}

    ${+"5e5"}
    ${+"5e-5"}

    ${+"0xFF"}
    ${+"0o77"}
    ${+"0b11"}

#2:
    ${+"255."}
    ${255..toString(16)}
    ${255..toString(8)}
    ${255..toString(2)}
    ${(255).toString(36)}

    ${25.12789.toFixed(2)}
    ${25.12.toFixed(5)}

#3:
    ${NaN === NaN}
    ${isNaN(NaN)}
    ${Object.is(NaN, NaN)}
    ${Object.is(0, -0)}

    ${isNaN("JavaScript")}
    ${Number.isNaN("JavaScript")}

    ${isFinite(NaN)}
    ${isFinite("JavaScript")}
    ${isFinite("123")}
    ${isFinite("")}
    ${Number.isFinite("123")}

#4:
    ${parseInt("22px")}
    ${parseInt("a22")}
    ${parseFloat("10.5em")}
HEX
    ${parseInt("0xff", 16)}
    ${parseInt("0xff")}
    ${parseInt("0xffz")}
    ${parseInt("xffz")}
    ${parseInt("ff", 16)}*
    ${parseInt("ff")}
OCT
    ${parseInt("0o77", 8)}
    ${parseInt("0o77")}
    ${parseInt("77", 8)}*
    ${parseInt("77")}
BIN
    ${parseInt("0b11", 2)}
    ${parseInt("0b11")}
    ${parseInt("11", 2)}*
    ${parseInt("11")}
36
    ${parseInt("4mpdd", 36)}*
    ${parseInt("4mpdd")}
`)
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/009.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### <a id="10">Logical operators</a>

```javascript
console.log(`!; &&; ||, ??;

||:
    ${"" || "return me" || 1 }
    ${false || null || 0}
    ${"" || undefined || NaN}

&&:
    ${"no return" && "" && 0}
    ${1 && true && 2}
    ${[] && {} && 3}

??:
    ${null ?? 1}
    ${undefined ?? 2}
    ${NaN ?? 3}
    ${4 ?? 5}
    ${"6" ?? "7"}

!!:
    ${!!null}
    ${!!8}
`)

1 || console.log("Hi! #1")
0 || console.log("Hi! #2")

1 && console.log("Hi! #3")
0 && console.log("Hi! #4")

console.log("Counters:")

let counter = 1
console.log(--counter || --counter || --counter)

counter = 2
console.log(--counter && --counter && --counter)

let a = ""
let b = "C"
let c = "some string"

console.log(`||=
    ${a ||= "A"}
    ${b ||= "B"}
`)

a = "C"
b = ""

console.log(`&&=
    ${a &&= "A"}
    ${b &&= "B"}
`)

a = null
b = null

console.log(`|| vs. ?? #1
    ${a || b || c || "no string"}
    ${a ?? b ?? c ?? "no string"}
`)

let scores = 0

console.log(`|| vs. ?? #2
    ${scores || 9}
    ${scores ?? 9}
`)

scores = null
scores ??= 10

console.log(`|| vs. ?? #3
    ${scores}
`)
```

<a href="https://github.com/papaproger/fun-js-sketches/blob/main/js/010.js"><img src="https://img.shields.io/badge/open%20file%20&#9658;-242424?style=for-the-badge" alt="open file" /></a>
<a href="#0"><img src="https://img.shields.io/badge/go%20to%20contents%20&#9650;-242424?style=for-the-badge" alt="go to Contents" /></a>

### by

[PapaProger](https://github.com/papaproger)