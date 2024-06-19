const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

input.sort();
console.log(input[1]);