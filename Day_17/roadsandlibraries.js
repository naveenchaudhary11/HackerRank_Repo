'use strict';

const fs = require('fs');

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

const util = require('util');
// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {

 if(c_lib <= c_road) {// stupid case lib more costly than road
        return n * c_lib;
    }
    var groups = [];
    var city_gpe = [];
    for(var i=0; i<n; i++) {
        groups[i] = [i];
        city_gpe[i] = i;
    }
    for(var i=0; i<cities.length; i++) {
        var gp0 = city_gpe[cities[i][0]-1];
        var gp1 = city_gpe[cities[i][1]-1];
        if(gp0 != gp1) {
            for(var j=0; j<groups[gp1].length; j++) {
                city_gpe[groups[gp1][j]] = gp0;
            }
            groups[gp0] = groups[gp0].concat(groups[gp1]);
            groups[gp1] = [];
        }
    }
    
    var cost = 0;
    for(var i = 0; i<groups.length; i++) {
        if(groups[i].length > 0) {
            cost += c_lib + c_road*(groups[i].length-1);
        }
    }
    return cost;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nmC_libC_road = readLine().split(' ');

        const n = parseInt(nmC_libC_road[0], 10);

        const m = parseInt(nmC_libC_road[1], 10);

        const c_lib = parseInt(nmC_libC_road[2], 10);

        const c_road = parseInt(nmC_libC_road[3], 10);

        let cities = Array(m);

        for (let i = 0; i < m; i++) {
            cities[i] = readLine().split(' ').map(citiesTemp => parseInt(citiesTemp, 10));
        }

        const result = roadsAndLibraries(n, c_lib, c_road, cities);

        ws.write(result + '\n');
    }

    ws.end();
}