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
 * Complete the buildString function below.
 */
function buildString(a, b, s) {
    /*
     * Write your code here.
     */
     let cost = a;
    let result = s[0];
    
    const findSlice = (index, res) => {
        let remain = res.length  < s.length - index ? res.length  : s.length - index;        
        //
        let j = 2;
        let prevSlice = undefined;
     
        for(; j < remain + 1 ; j++ ){
            let slice = s.slice(index, index + j );            
            
            if ( res.indexOf(slice) === -1 ) {
                break;                
            }
            prevSlice = slice;
        }
        return prevSlice;        
        //return undefined;
     }
    
    const addString = ( word ) => {
        cost += a;
        result += word;
      
    }
    
    const copyString = ( string ) => {
        cost += b;
        result += string;  
      
        return string.length - 1;
    }
    
    
   
    let map = [];    
    
    
   const plus = ( index, res, cost, callstack ) => {
        let slice = findSlice(index, res);
        if ( undefined !== slice) {      
            return { index: index + slice.length, res: res + slice, cost: cost + b};
        } else {
            return { index: index + 1, res: res + s[index], cost: cost + a};
        }
        
    }


    
   
    let minimum = Infinity;
    let resultCost = Infinity;
    const calcCost = (index, res, cost, callstack, loop = false) => {  
 
       
 
         for(; index < s.length && cost < resultCost ; ) {  
                          
             
             let slice = findSlice(index, res);
             if (undefined !== slice) {
                 let newWay1 = { index: index + slice.length, res: res + slice, cost: cost + b };
                 let newWay2 = { index: index + 1, res: res + s[index], cost: cost + a };
                 while (newWay1.index !== newWay2.index) {
                     if (newWay1.index < newWay2.index) {

                         newWay1 = plus(newWay1.index, newWay1.res, newWay1.cost);
                     } else {
                        
                         newWay2 = plus(newWay2.index, newWay2.res, newWay2.cost);
                     }
                 }
                 if (newWay1.cost < newWay2.cost) {
                   

                     index = newWay1.index;
                     res = newWay1.res;
                     cost = newWay1.cost;
                 } else {
                    
                     index = newWay2.index;
                     res = newWay2.res;
                     cost = newWay2.cost;
                 }
                              
 
             } else {
               
                     res = res + s[index];
                     index++;
                     cost = cost + a; 
               
             }
         }
         if ( cost < resultCost) {
             
             resultCost = cost;
         } else if( cost > resultCost) {
             return {index: s.length, res, cost: Infinity};
         }
         return {index, res, cost};
          
     }
   
    
    
    let re = calcCost(1, result, cost);
   
    return re.cost;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nab = readLine().split(' ');

        const n = parseInt(nab[0], 10);

        const a = parseInt(nab[1], 10);

        const b = parseInt(nab[2], 10);

        const s = readLine();

        let result = buildString(a, b, s);
        ws.write(result + '\n');
    }

    ws.end();
}