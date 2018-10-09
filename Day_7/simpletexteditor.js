function processData(input) {
    var lines = input.split('\n');
    var string = '';
    var previous = [];
    
    for (var i = 1; i < lines.length; i++) {
        var line = lines[i];
        var query = line.split(' ');
        var command = query[0];
        var option = query[1];
        
        switch(command) {
            case '1':
                previous.push(string);
                string += option;
                break;
            case '2':
                previous.push(string);
                string = string.substring(0 , string.length  - Number(option));
                break;
            case '3':
                console.log(string.charAt([Number(option) - 1]));
                break;
            case '4':
                string = previous.pop();
                break;
            default:
                break;
        }  
    }
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