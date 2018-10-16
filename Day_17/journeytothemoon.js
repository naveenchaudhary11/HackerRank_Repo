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

// Complete the journeyToMoon function below.
function journeyToMoon(n, astronaut) {
const components = []
    let componentSize = 0
    const graph = []
    const visited = Array(n).fill(false)

    function dfs (node) {
      if (!visited[node]) {
        visited[node] = true
        componentSize++
        graph[node].forEach(dfs)
      }
    }
    
    // Initialize graph
    for (let i = 0; i < n; i++) {
        graph[i] = []
    }

    // Initialize adjacency list
    astronaut.forEach(([a, b]) => {
        graph[a].push(b)
        graph[b].push(a)
    })
    
    // Find connected components and their lengths
    for (let i = visited.indexOf(false); i >= 0; i = visited.indexOf(false, i)) {
      componentSize = 0
      dfs(i)
      components.push(componentSize)
    }
    //console.log(components)
    
    let sum = 0
    //for (let i = 0; i < components.length - 1; i++) {
    //    for (let j = i + 1; j < components.length; j++) {
    //        sum += components[i] * components[j]
    //    }
    //}
    //return sum
    let result = 0
    components.forEach(c => {
       result += sum*c;
       sum += c;    
    })
    return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const np = readLine().split(' ');

    const n = parseInt(np[0], 10);

    const p = parseInt(np[1], 10);

    let astronaut = Array(p);

    for (let i = 0; i < p; i++) {
        astronaut[i] = readLine().split(' ').map(astronautTemp => parseInt(astronautTemp, 10));
    }

    let result = journeyToMoon(n, astronaut);

    ws.write(result + "\n");

    ws.end();
}