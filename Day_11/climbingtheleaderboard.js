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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    
     var h_rank = 1;
    for(var i=scores.length-1;i>0;i--){
        if(scores[i]<scores[i-1]){
            h_rank++;
        }
    }
    h_rank++;
    var ranks=[];
    var j = scores.length-1;
    for(var i=0;i<alice.length;i++){
        while(alice[i]>=scores[j] ){
            if(h_rank==1){
                break;
            }
            if(scores[j]==scores[j-1]){
                j--;
            }
            else{
                j--;
                h_rank--;
            }
        }
        ranks[i] = h_rank;
    }
    return ranks;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}