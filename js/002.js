// setTimeout() & toString()

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