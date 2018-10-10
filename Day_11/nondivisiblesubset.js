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

// Complete the nonDivisibleSubset function below.
function nonDivisibleSubset(k, S) {
var remArr = [];
    for(var i in S) {
        remArr.push(S[i] % k);
    }
    remArr.sort(function(a,b){return a-b;})
    var map = new Map();
    for(var i=0;i<remArr.length;i++) {
        if(map.get(remArr[i]) == null) {
            map.set(remArr[i],1);
        }
        else {
            var c = map.get(remArr[i]);
            map.set(remArr[i] , c+1);
        }
    }
    var lengthofarr = 0;
    for(var i=1;i<=parseInt(k/2);i++) {
        if(i == 0 || (i==parseInt(k/2) && k%2 ==0)) {
            lengthofarr++;
        }
        else {
            if(map.get(i) == null) {
               map.set(i,0);
            }
            if(map.get(k-i) == null) {
               map.set(k-i,0);
            }
            lengthofarr = lengthofarr + Math.max(map.get(i),map.get(k-i));
        }
    }
    if(map.get(0) != null) {
        lengthofarr++;
    }
    return lengthofarr;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const S = readLine().split(' ').map(STemp => parseInt(STemp, 10));

    let result = nonDivisibleSubset(k, S);

    ws.write(result + "\n");

    ws.end();
}