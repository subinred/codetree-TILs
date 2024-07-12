const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
process.stdout.write(a + ' ' + b + ' ');
for (let i = 2; i < 10; i++) {
    newEl = Number(input[i-1]) + (2 * Number(input[i-2]));
    input.push(newEl);
    process.stdout.write(newEl + ' ');
}