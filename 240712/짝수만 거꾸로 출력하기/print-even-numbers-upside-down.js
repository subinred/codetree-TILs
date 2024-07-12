const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n = Number(input[0]);
let array = input.splice(1)[0].split(' ');
for (let i = n-1; i >= 0; i--) {
    if (Number(array[i] % 2 === 0)) {
        process.stdout.write(array[i] + ' ');
    }
}