process.stdin.resume();
process.stdin.setEncoding("ascii");
let currentLine = 0;
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n');
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}

class Stack {
    constructor() 
    { 
        this.items = []; 
    } 
    push(element) 
    { 
         this.items.push(element); 
    } 
    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    
    printMaximum() 
    {  
        var max=0;
        for (var i = 0; i < this.items.length; i++) {
            if(this.items[i]>max) {
                max=this.items[i];
            }
        }
        return max;
    }
    
}
function processData(input) {
    const queries = parseInt(readLine(), 10);
    let stack = new Stack();
      for (let i = 0; i < queries; i++) {
        const newQuery = readLine().replace(/\s+$/g, '').split(' ');
        const value = parseInt(newQuery[0], 10);
         
        if(value==1) {
            var item = parseInt(newQuery[1], 10);
            stack.push(item);  
        }
        else if(value==2) {
             stack.pop();  
        }
        else {
            var maximum=stack.printMaximum();
            console.log(maximum);
        }
    }
} 