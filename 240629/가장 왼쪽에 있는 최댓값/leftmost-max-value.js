const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ');
let max = 0;
let maxIndex = [];

testF(n);
function testF(inputLength)  {
    if (inputLength == 0) {
        console.log(1);
        return;
    } else {
        for (let i = 0; i < inputLength; i++) {
        if (max < Number(arr[i])) {
            max = Number(arr[i]);
            maxIndex.push(i+1);
        }
    }
    }
    process.stdout.write(maxIndex[maxIndex.length-1] + ' ');
    if(maxIndex[maxIndex.length-1] != 1) {
        max = 0;
        testF(Number(maxIndex[maxIndex.length-1])-2);
    }
}