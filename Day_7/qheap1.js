const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
   processData(inputString);
});
function readLine() {
    return inputString[currentLine++];
}
function processData(input) {
    //Enter your code here
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    var arr=[];
    for(let i=0;i<n;i++) {
        var query = readLine().split(' ');
        var number=parseInt(query[0], 10);
        if(number==1) {
            var data=parseInt(query[1], 10);
            arr.push(data);
        }
        else if(number==2) {
             var data=parseInt(query[1], 10);
            arr.splice(arr.indexOf(data),1);
        }
        else {
            var minimum = Math.min.apply(null,arr);
            ws.write(minimum+"\n");
        }
    }
} 