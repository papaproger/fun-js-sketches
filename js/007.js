// data types, typeof

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