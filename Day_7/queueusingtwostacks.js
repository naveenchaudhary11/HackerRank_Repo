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

function processData(input) {
    const testCases=parseInt(readLine(), 10);
    
    var stack1 = [];
    var stack2 = [];
    /*
        (1) When calling the enqueue method, simply push the elements into the stack 1.
        (2) If the dequeue method is called, push all the elements from stack 1 into stack 2,                 which reverses the order of the elements. Now pop from stack 2.
    */
    for(let i=0;i<testCases;i++){
        const nq = readLine().replace(/\s+$/g, '').split(' ');
        var t = parseInt(nq[0]);
        //enqueue
        if(t==1){
            let element = parseInt(nq[1]);  
            stack1.push(element);
        }else{
            if (stack2.length==0) {
                while(stack1.length > 0 ) {
                    stack2.push(stack1.pop());
            } 
          }
        }
         if(t==2){
            //deque(2)
            stack2.pop();
        }else if(t==3){
            //print the element
            console.log(stack2[stack2.length-1]);
        }
    }
}