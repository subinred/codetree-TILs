const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let sum = 1;
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let arr = [];
for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) % 2 != 0) {
        arr.push(Number(input[i]));
    }
}
if (arr.length === 0) {
    console.log(a * b * c);
} else if (arr.length === 1) {
    console.log(arr[0]);
} else {
    for (let i = 0; i < arr.length; i++) {
        sum = sum * arr[i];
    }
    console.log(sum);
}