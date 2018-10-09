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
 * Complete the equalStacks function below.
 */
function equalStacks(stack1,stack2, stack3) {
    
    var stack1Length = stack1.length;
    var stack2Length = stack2.length;
    var stack3Length = stack3.length;
    
    var sum1 = stack1.reduce((previousValuesTotal, currentValue, index, array)=>{
        return parseInt(previousValuesTotal) + parseInt(currentValue);
    });
    
    var sum2 = stack2.reduce((previousValuesTotal, currentValue, index, array)=>{
        return parseInt(previousValuesTotal) + parseInt(currentValue);
    });
    
    var sum3 = stack3.reduce((previousValuesTotal, currentValue, index, array)=>{
        return parseInt(previousValuesTotal) + parseInt(currentValue);
    });
    
    
    var top1 = 0;
    var top2 = 0;
    var top3 =0;
    
    while(1){
        
      //IF ANY OF THREE STACK IS EMPTY
      if (top1 == stack1Length || top2 == stack2Length || top3 == stack3Length) 
         return 0; 
       //IF TOTAL SUM OF ALL THREE STACKS ARE EQUAL 
      if (sum1 == sum2 && sum2 == sum3) 
             return sum1;
    
     /* Finding the stack with maximum sum and  
       removing its top element. */
      if (sum1 >= sum2 && sum1 >= sum3){
         sum1 =sum1 - stack1[top1++]; 
      }
      else if (sum2 >= sum3 && sum2 >= sum3) {
         sum2 =sum2 - stack2[top2++]; 
      }
      else if (sum3 >= sum2 && sum3 >= sum1){ 
         sum3 =sum3 - stack3[top3++];
      }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}