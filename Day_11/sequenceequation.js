/*'use strict';
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
// Complete the permutationEquation function below.
function permutationEquation(p) {
    var temp;
    var a = [];
    for(var i = 0; i <= p.length; i++) {
        temp = p[i];
        for(var j = 0; j < p.length; j++){
            if(temp == p[p[j-1]]) {
                   a.push(j+1); 
               }
        }
    }
    return a;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));
    let result = permutationEquation(p);
    ws.write(result.join("\n") + "\n");
    ws.end();
}
*/

function processData(input) {
    var lines = input.split("\n");
    var data = lines[1].split(' ').map(Number);
    var all = {};
    for(var i=0;i<data.length;i++){
        all[data[i]] = i+1;
    }
    for(var i=1;i<=data.length;i++){
        console.log(all[all[i]]);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});