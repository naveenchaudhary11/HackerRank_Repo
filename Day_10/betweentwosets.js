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


//FUNCTION WHICH RETURNS GCD OF TWO NUMBERS
function gcd(a, b){ 
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
        var t = b;
        b = a % b;
        a = t;
      }
    return a;
}

function getTotalX(a, b) {
    var gcdB=0;
    //CALCULATING GCD OF ARRAY B
    b.forEach(findGCD);
    function findGCD(item) {
        gcdB = gcd(gcdB, item);
    } 
    //FINDING ALL DIVISORS OF GCD OF B
    var divisors = [];
    for(var i=1; i<=gcdB/2; i++) {
        if(gcdB%i == 0) {
            divisors.push(i);
        }
    }
    divisors.push(gcdB);
    
    var count=0;
    var status;
    //CHECK IF DIVISORS OF GCD IS DIVISIBLE BY ALL ELEMENTS OF ARRAY A OR NOT
    for(var i=0; i<divisors.length; i++) {
        status = true;
        for(var j=0; j<a.length; j++) {
            if(divisors[i] % a[j] != 0) {
                status = false;
            }
        }
        //IF A FACTOR IS DIVISIBLE BY ARRAY A THEN INCREMENT THE COUNTER
        if(status) {
            count++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}