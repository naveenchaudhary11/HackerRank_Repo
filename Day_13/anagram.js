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

// Complete the anagram function below.
function anagram(s){
    if(s.length%2!=0){
        return -1;
    }
    else{
        var arr= s.split("");
        var startIndex= arr.length/2;
        var obj1 =new Object();
        var obj2= new Object();
        var mySet1= new Set();
        var mySet= new Set();
        
        for(var i=0; i<startIndex; i++){
            mySet1.add(arr[i]);
        }
        for(var i=startIndex; i<arr.length; i++){
            mySet.add(arr[i]);
        }
        for(var item of mySet1){
            var freq=0;
            for(var i=0; i<startIndex; i++){
                if(item == arr[i]){
                    freq++;
                }
            }
           obj1[item]= freq;   
        }
        for(var item of mySet){
            var freq=0;
            for(var i=startIndex; i<arr.length; i++){
                if(item == arr[i]){
                    freq++;
                }
            }
           obj2[item]= freq;   
        }
    
        var res=0;
        for(var prop in obj2){
            if(obj1.hasOwnProperty(prop)){
                var diff= obj2[prop]-obj1[prop];
                if(diff>0){
                    res= res + (diff);                   
                }
                
            }
            else{
                res= res + obj2[prop];
            }
            
        }
        
     return res;   
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}