let getValueFromLine = (line, index) => {
    var values = line.split(" ");
    
    return parseInt(values[index]);
}

let getArrayFromLine = (line) => {
    return line.split(" ").map(x => parseInt(x));
}

let sortNumbers = (a, b) => {
    return a - b;
}

let isWrapped = (value, start, end) => {
    
}

function processData(input) {
    let lines = input.split("\n");
    let array = getArrayFromLine(lines[1]);
    let index = getValueFromLine(lines[0], 2);
    let length = array.length;
    let queries = [];
    let sorted = [];
    
    for (let i = 2; i < length; i++) {
        let query = getArrayFromLine(lines[i]);
        let start = query[0];
        let end = query[1];
        
        queries = queries.filter(x => !(start <= x[0] && end >= x[1]))
        
        queries.push([start, end]);
    }

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        
        let start_array = array.slice(0, start);
        let sorted_array = array.slice(start, end + 1).sort(sortNumbers);
        let end_array = array.slice(end + 1);
        array = start_array.concat(sorted_array, end_array);
    }
    
    console.log(array[index]);
}

function mergeArrays(arr1, arr2) {
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});