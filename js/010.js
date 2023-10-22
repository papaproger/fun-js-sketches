// Logical operators

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