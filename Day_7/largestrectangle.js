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

function largestRectangle(h) {
    var maxArea = 0 ;
    for(var i = 0 ; i < h.length ; i++){
      var before = i - 1;
      var sum = 0;
      while(before >= 0 ){
        if(h[before] >= h[i]){
          sum += h[i];
          before--;
        }else{
          break;
        }
      }
      var after = i ;
      while(after < h.length){
        if(h[after] >= h[i]){
          sum += h[i];
          after++;
        }else{
          break;
        }
      }
      maxArea = Math.max(maxArea , sum);
    }
    return maxArea;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    let result = largestRectangle(h);

    ws.write(result + "\n");

    ws.end();
}