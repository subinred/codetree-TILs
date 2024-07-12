const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n = Number(input[0]);
let array = input.splice(1);
for (let i = 0; i < array.length; i++) {
    if (Number(input[0] % 2 !== 0)) {
        array.pop(i);
    }
}
array.sort((a,b) => b-a);
console.log(array);