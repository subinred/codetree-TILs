const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = Number(input[0]);
let b = input[1].split(' ');
let c = Number(b[1]);
let d = Number(b[2]);
let e = Number(b[3]);
b = Number(b[0]);

if (a > b) {
    console.log(1)
} else {
    console.log(0);
}

if (a > c) {
    console.log(1)
} else {
    console.log(0);
}

if (a > d) {
    console.log(1)
} else {
    console.log(0);
}

if (a > e) {
    console.log(1)
} else {
    console.log(0);
}