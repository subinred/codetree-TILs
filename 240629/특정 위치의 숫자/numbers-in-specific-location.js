const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let result = Number(input[2]) + Number(input[4]) + Number(input[9]);

console.log(result);