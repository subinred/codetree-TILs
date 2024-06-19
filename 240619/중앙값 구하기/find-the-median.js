const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if ((a > b && a < c) || (a > c && a < b)) {
    console.log(a);
} else if ((b > a && b < c) || (b > c && b < a)) {
    console.log(b);
} else {
    console.log(c);
}