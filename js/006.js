// __proto__

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