const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());
let array = [];
for (let i = 1; i <= n; i++) {
    process.stdout.write(i + ' ');
}