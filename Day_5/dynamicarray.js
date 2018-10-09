'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    var lastAnswer = 0;
    let lastArray = new Array();
    let arr = new Array(); 
    var k=0;
    var seq;
    
    for(var i=0; i<n; i++){
       arr[i] = [];   
    }
    
    for(var i=0; i<queries.length; i++){
        if(queries[i][0] == 1){
            seq = ((queries[i][1]^lastAnswer)%n);
            arr[seq][arr[seq].length] = queries[i][2]; 
        }
        if(queries[i][0] == 2){
            seq = ((queries[i][1]^lastAnswer)%n);
            lastAnswer = arr[seq][queries[i][2] % arr[seq].length];
            lastArray[k++] = lastAnswer;
        }
    }
    //console.log(arr);
    return lastArray;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries); 

    ws.write(result.join('\n') + '\n'); 

    ws.end();
}