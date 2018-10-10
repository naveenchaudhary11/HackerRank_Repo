'use strict';

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
const bigFactorial = n => {
      const bigNumber = require('bignumber.js');
      let result = new bigNumber(1);
      for (let i = 1; i <= n; i++) {
        result = result.multipliedBy(i);
      }
      return result.toFixed();
    }
    console.log(bigFactorial(n));

}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}