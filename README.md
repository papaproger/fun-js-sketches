# Fun JS Sketches

### <a id="0">Contents</a>

- [\[\[Prototype\]\], \_\_proto\_\_, prototype](#1)
- [setTimeout() & toString()](#2)
- [call(), apply(), bind() #1](#3)

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

[001.js][001]<br>
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

[002.js][002]<br>
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

[003.js][003]<br>
[go to Contents](#0)

### by

[PapaProger](https://github.com/papaproger)

[001]: https://github.com/papaproger/fun-js-sketches/blob/main/001.js
[002]: https://github.com/papaproger/fun-js-sketches/blob/main/002.js
[003]: https://github.com/papaproger/fun-js-sketches/blob/main/003.js