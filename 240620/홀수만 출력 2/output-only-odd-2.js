const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
for (let i = a; i >= b; i--) {
    if (i % 2 !==0) {
        process.stdout.write(i + ' ');
    }
}