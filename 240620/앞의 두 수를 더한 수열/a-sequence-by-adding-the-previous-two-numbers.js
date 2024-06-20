const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());
let array = [0, 1];
for (let i = 2; i <= n; i++) {
    array.push(array[i-2] + array[i-1]);
}
console.log(array[n]);