const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n = Number(input[0]);
let array = input[1].split(' ');
array.sort();
process.stdout.write(array[0]+ ' ');
process.stdout.write(array[n-1]);