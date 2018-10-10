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

// Complete the commonChild function below.
function commonChild(s1, s2) {

    let m = [];
    m[0] = [];
    
    for(let i = 0; i < s1.length; ++i) {
        m[i + 1] = [];
        for(let j = 0; j < s2.length; ++j) {
            
            if(s1[i] == s2[j]) {
                m[i + 1][j + 1] = (m[i][j] || 0) + 1;
            }
            else {
                m[i + 1][j + 1] = Math.max(m[i][j + 1] || 0, m[i + 1][j] || 0);
            }
        }
    }
    
    return m[s1.length][s2.length];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = commonChild(s1, s2);

    ws.write(result + "\n");

    ws.end();
}