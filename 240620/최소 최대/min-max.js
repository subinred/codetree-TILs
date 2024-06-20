const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n = Number(input[0]);
let array = input[1].split(' ');
array = array.map(Number);
array.sort();
console.log(array[0] + ' ' + array[n-1]);