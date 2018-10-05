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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var hour = s.substr(0,2);
    var min = s.substr(3,2);
    var sec = s.substr(6,2);
    var tod = s.substr(8,2);
    
    if(tod=="PM") {
        if(hour!=12) {
            hour = parseInt(hour)+12;
        }
    }
    else{
        if(hour=="12") {
            hour ="00";
        }
    }
    
    var final = hour+":"+min+":"+sec;
    return final;
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}