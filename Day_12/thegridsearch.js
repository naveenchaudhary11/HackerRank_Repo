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

// Complete the gridSearch function below.
function gridSearch(G, P) {
    var final = 0;
    for(var i=0;i<G.length;i++) {
        for(var j=0;j<G[i].length;j++) {
            if(G[i].charAt(j) == P[0].charAt(0)) {
                var flag = 1;
                if(G.length - i >= P.length) { 
                    for(var l=0;l<P.length;l++) {
                        if(flag == 0) {
                            break;
                        } 
                        for(var m=0;m<P[l].length;m++) { 
                            if(G[i+l].charAt(j+m) == P[l].charAt(m)) {
                                flag = 1;
                                if(l == P.length -1 && m == P[l].length - 1) {
                                    final = 1;
                                    break;
                                }
                            }
                            else {
                                flag = 0;
                                break;
                            }
                        }
                    }
               }
            }
        }
    }
    if(final) {
        return "YES";
    }
    else {
        return "NO";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        ws.write(result + "\n");
    }

    ws.end();
}