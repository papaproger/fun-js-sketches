// [[Prototype]], __proto__, prototype

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