const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
for (let i = Number(input[0]); i <= Number(input[1]); i++) {
    if (i % 2 !== 0) {
        process.stdout.write(i + ' ');
    }
}