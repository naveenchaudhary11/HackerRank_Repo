process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function mst(n, edges) {
   
    var listOfEdges = [];
    var mapOfMaps = {};
    var edgeCount = 0;
    for (var i = 1 ; i <= n; i++) {
        mapOfMaps[i] = {};
        mapOfMaps[i][i] = true;
    }
    for (i = 0; i < edges.length; i++) {
        var edge = edges[i];
        listOfEdges.push({
            u: edge[0],
            v: edge[1],
            r: edge[2]
        });
    }
    listOfEdges.sort(function(a, b) {
       if (a.r === b.r) return (a.u + a.r + a.v) - (b.u + b.r + b.v);
        return a.r - b.r;
    });
    function findMapId(edge) {
        for (var id in mapOfMaps) {
            if (mapOfMaps[id][edge]) return id;
        }
    }
    function mergeMaps(a, b) {
        var smallerId, biggerId;
        if (Object.keys(mapOfMaps[a]).length < Object.keys(mapOfMaps[b]).length) {
            smallerId = a;
            biggerId = b;
        } else {
            smallerId = b;
            biggerId = a;
        }
        var smaller = mapOfMaps[smallerId];
        var bigger = mapOfMaps[biggerId];
        for (var key in smaller) {
            bigger[key] = true;
        }
        delete mapOfMaps[smallerId];
    }
    while(listOfEdges.length > 0) {
        edge = listOfEdges.shift();
        var x = findMapId(edge.u);
        var y = findMapId(edge.v);
        if (x === y) continue;
        else {
            mergeMaps(x, y);
            edgeCount += edge.r;
        }
    }
    return edgeCount;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var edges = [];
    for(edges_i = 0; edges_i < m; edges_i++){
       edges[edges_i] = readLine().split(' ');
       edges[edges_i] = edges[edges_i].map(Number);
    }
    var result = mst(n, edges);
    process.stdout.write("" + result + "\n");

}