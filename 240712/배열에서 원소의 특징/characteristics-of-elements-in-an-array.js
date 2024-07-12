const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) % 3 === 0) {
        console.log(input[i-1]);
        break;
    }
}