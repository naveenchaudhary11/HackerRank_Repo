'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the pickingNumbers function below.
function pickingNumbers(a) {
    var arr = [];
    for(var i=0; i<100; i++) {
        arr[i]=0;
    }
    
    for(var i=0; i<a.length; i++) {
        arr[a[i]]++;
    }
    
    var max = 0;
    var max2 = 0;
    for(var i=1; i<100; i++) {
        if(arr[i]>max) {
            max2 = max;
            max = i;
        }   
    }
    return arr[max]+arr[max2];


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}s