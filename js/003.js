// call(), apply(), bind() #1

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