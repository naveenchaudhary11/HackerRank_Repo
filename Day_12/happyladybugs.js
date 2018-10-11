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

// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    var arr = [];
    var flag = 1;
    var executed = 0;
    var count = 1;
    arr = b.split("").sort();
    if(!b.includes("_")) {
        for(var i=0;i<b.length-1;i++) {
            if(b[i] == b[i+1]) {
                count++;
            }
            else {
                if(count < 2) {
                    flag = 0;
                    break;
                }
                count = 1;
            }
            executed = 1;
        }
        if(flag && executed && count != 1) {
            return "YES";
        }
        else {
            return "NO";
        }
    }
    var flag = 1;
    var count = 1;
    for(var i=0;i<arr.length;i++) {
        if(arr[0] == '_') {
            return "YES";
        }
        else if(arr[i] == '_') {
            break;
        }
        else {
            if(arr[i] == arr[i+1] && i!=arr.length-1) {
                count++;
            }
            else {
                if(count < 2) {
                    flag = 0;
                    break;
                }
                count = 1;
            }
        }
    }
    if(flag) {
        return "YES";
    }
    else {
        return "NO";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const b = readLine();

        let result = happyLadybugs(b);

        ws.write(result + "\n");
    }

    ws.end();
}