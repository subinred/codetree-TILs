const fs = require('fs');
let a = fs.readFileSync(0).toString().split('\n');
const first = a[0].split(' ');
const second = a[1].split(' ');
if (Number((first[0]) >= 19 && first[1] === 'M')) {
    console.log(1);
} else if (Number(second[0]) >= 19 && second[1] === 'M') {
    console.log(1);
} else {
    console.log(0);
}