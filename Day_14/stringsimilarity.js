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
'use strict'

// Construction of Z array keeping the first element equal to length of string
function zArrayHelper(s) {
	s = s.toLowerCase();
	let Z = [s.length];
	let n = s.length;
	let [ L, R ] = [0, 0];
	let k;
	for (let i = 1; i < n; i++) {
		if (i > R) {
			[ L, R ] = [i, i];
			while (R < n && s[R-L] == s[R]) {
				R++;
			}
			Z[i] = R-L;
			R--;
		}
		else {
			k = i-L;
			if(Z[k] < R + 1 - i) {
				Z[i] = Z[k];
			}
			else {
				L = i;
				while (R < n && s[R-L] == s[R]) {
					R++;
				}
				Z[i] = R-L;
				R--;
			}
		}
	}
	return Z;
}

// Returns the sum of length of all the matching longest common prefix
function similarity(string) {
	return zArrayHelper(string).reduce((sum, length) => sum + length, 0);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = similarity(s);

        ws.write(result + "\n");
    }

    ws.end();
}