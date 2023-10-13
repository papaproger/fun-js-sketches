# Fun JS Sketches

### <a id="0">Contents</a>

- [\[\[Prototype\]\], \_\_proto\_\_, prototype](#1)
- [setTimeout() & toString()](#2)
- [call(), apply(), bind() #1](#3)
- [call(), apply(), bind() #2](#4)
- [valueOf(), toString(), \[Symbol.toPrimitive\]()](#5)

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

[open file][001]<br>
[go to Contents](#0)

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

[open file][002]<br>
[go to Contents](#0)

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

[open file][003]<br>
[go to Contents](#0)

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

[open file][004]<br>
[go to Contents](#0)

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
```

[open file][005]<br>
[go to Contents](#0)

### by

[PapaProger](https://github.com/papaproger)

[001]: https://github.com/papaproger/fun-js-sketches/blob/main/js/001.js
[002]: https://github.com/papaproger/fun-js-sketches/blob/main/js/002.js
[003]: https://github.com/papaproger/fun-js-sketches/blob/main/js/003.js
[004]: https://github.com/papaproger/fun-js-sketches/blob/main/js/004.js
[005]: https://github.com/papaproger/fun-js-sketches/blob/main/js/005.js