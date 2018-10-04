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

// Complete the plusMinus function below.

function plusMinus(arr) {
    var counter_p=0, counter_n=0, counter_z=0, i;
    for(i=0; i<arr.length; i++) {
        if(arr[i]>0) {
            counter_p++;
        }
        else if(arr[i]<0){
            counter_n++;
        }
        else {
            counter_z++;
        }
    }
    counter_p = (counter_p/arr.length).toFixed(6);
    counter_n = (counter_n/arr.length).toFixed(6);
    counter_z = (counter_z/arr.length).toFixed(6);
    console.log(counter_p);
    console.log(counter_n);
    console.log(counter_z);
    return; 
  
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}