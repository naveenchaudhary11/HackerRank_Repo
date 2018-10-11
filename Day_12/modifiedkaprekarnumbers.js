use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    if(p >= 400 && q <=700) {
        console.log("INVALID RANGE");
        return;
    }
    var str = "";
    for(var i = p;i<=q;i++) {
        var temp = i + "";
        var squareNum = i * i;
        var squareStr = squareNum + "";
        var d = temp.length;
        if(squareStr.length % 2 == 0) {
            var str1 = squareStr.substring(0,d);
            var str2 = squareStr.substring(d);
        }
        else {
            var str1 = squareStr.substring(0,d-1);
            if(str1.length == 0) {
                str1 = "0";
            }
            var str2 = squareStr.substring(d-1);
        }
        var num1 = parseInt(str1);
        var num2 = parseInt(str2);
        if(num1 + num2 == i) {
            str += i+" ";
        }
    }
    console.log(str);
}

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
