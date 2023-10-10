// call(), apply(), bind() #2

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