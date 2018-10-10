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

// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
 let left = 1;
    let right = n;
    
    let up = 1;
    let down = n;
    
    let leftUp = r_q <= c_q ? 1 : r_q - c_q + 1;
    let rightUp = r_q + c_q > n ?  r_q - (n - c_q) : 1;
    
    let rightDown = r_q <= c_q ? r_q + (n-c_q):n;
    let leftDown = r_q + c_q > n ?n : r_q + c_q - 1 ;
    
    let sum = r_q + c_q;
    let minus = r_q - c_q;
    
    console.log(leftUp, rightUp, rightDown, leftDown);
    obstacles.map(p=>{
        if(p[0] === r_q){
            if(p[1] > left && p[1] < c_q) left = p[1] +1;
            else if(p[1] < right && p[1] > c_q) right = p[1] -1;
        }else if(p[1] === c_q){
            if(p[0] > up && p[0] < r_q) up = p[0]+ 1;
            else if(p[0] < down && p[0] > r_q) down = p[0] -1;
        }else if(p[0] === r_q){
            if(p[0] > left && p[0] < c_q) left = p[0] +1;
            else if(p[0] < right && p[0] > c_q) right = p[0] -1;
        }else if(p[0] - p[1] === minus){
            if(p[0]< r_q && p[0] >leftUp) leftUp = p[0] + 1;
            else if(p[0] > r_q && p[0] < rightDown) rightDown = p[0] - 1;
        }else if(p[0] + p[1] === sum){
            if(p[0]< r_q && p[0] > rightUp) rightUp = p[0] + 1;
            else if(p[0] > r_q && p[0] < leftDown) leftDown = p[0] - 1;
        }
    })
    console.log(rightUp, leftDown);
    console.log(right - left , down - up , rightDown - leftUp , leftDown - rightUp);
    return right - left + down - up + rightDown - leftUp + leftDown - rightUp;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    let result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + "\n");

    ws.end();
}