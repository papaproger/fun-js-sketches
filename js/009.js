// Numbers

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