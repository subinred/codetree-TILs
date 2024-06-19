const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let array = [];
array.push(a);
array.push(b);
array.push(c);

array.sort();
console.log(array[1]);