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
    var rank = 1;
    var scoresRank = [];
    scoresRank[0] = 1;
    var aliceRank = [];
    var flag = true;
    
    // set rank for each element in scores into a new scoresRank array
    for(var i=1; i<scores.length; i++) {
        if(scores[i]<scores[i-1]){
            rank++;
        }
        scoresRank[i]=rank;
    }
    
    //finding suitable pos for alice's scores
    for(var j=0; j<alice.length; j++) {
        flag = true;
        for(var i=scores.length; i>-1; i--) {
            if(alice[j]<=scores[i]){
                if(alice[j]==scores[i]) {
                    flag = false;
                    aliceRank[j] = scoresRank[i];
                    break;
                }else {
                    flag = false;
                    aliceRank[j] = scoresRank[i]+1;
                    break;
                }
            }
        }
        if(flag==true){
            aliceRank[j]=1;
        }
    }
    return aliceRank;

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
