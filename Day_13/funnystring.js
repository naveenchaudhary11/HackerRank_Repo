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

// Complete the funnyString function below.
function funnyString(s) {
    
    var result ="Funny";
        var input1 = s;
        var input2 = s.split("").reverse().join("");;
        var ascii1 = [s.length];
        var ascii2 = [s.length];
        
        
        for(var i = 0 ; i < input1.length;i++) {
             ascii1[i] = s.charCodeAt(i);
             ascii2[i] = input2.charCodeAt(i);
        }
        
        
        
        for(var i = 0;i<ascii1.length-1;i++) {
            var temp = Math.abs(ascii1[i]-ascii1[i+1]);
            var temp1 = Math.abs(ascii2[i]-ascii2[i+1]);

            if(temp1 != temp){
                result ="Not Funny";
                break;
            }
        }

        return result;


}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
