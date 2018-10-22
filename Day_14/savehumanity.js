'use strict';

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
 * Complete the virusIndices function below.
 */

function stringDiffThreshold(s1, s2, max = 0, score = 0) {
    var len = s1.length;

    if (s1 !== s2 && len > 1) {
        var len2 = Math.ceil(len / 2);

        score = stringDiffThreshold(s1.substr(0, len2), s2.substr(0, len2), max, score);
        if (score > max) return score;
        score = stringDiffThreshold(s1.substr(len2), s2.substr(len2), max, score);
        if (score > max) return score;

    } else if (s1 !== s2 && len === 1) {
        return score + 1;
    }

    return score;
}

function virusIndices(p, v) {
    var out = [];
    for (var i = 0; i < p.length - v.length+1; i++) {
        if (stringDiffThreshold(p.substr(i, v.length), v, 1) < 2)
            out.push(i);
    }
    if (out.length > 0)
        console.log(out.join(' '));
    else
        console.log('No Match!');
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const pv = readLine().split(' ');

        const p = pv[0];

        const v = pv[1];

        virusIndices(p, v);
    }
}