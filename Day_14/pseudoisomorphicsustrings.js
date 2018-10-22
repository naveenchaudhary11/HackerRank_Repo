var pseudoArr=[],startArr=[];
function processData(input) {
    //Enter your code here
    var count=0;
    for(var char=0;char<input.length;char++){
        pseudoArr[char]=getPseudo(input.substring(char,input.length));
        startArr[char]=0;
    }
    for(var line=0;line<input.length;line++){
        for(var let=1;let<line;let++){
            var str=input.substring(0,line);
            var s=input.substring(let,line+1);
            if(str[0].indexOf(s)<0){
                count+=pushArr(s,let,line);
            }
            else
                let=line;
        }
        count++;
        console.log(count);       
    }
} 


function pushArr(s,let,line){
        var p=pseudoArr[let].substring(0,line+1-let);
        for(var index=startArr[let];index<let;index++){
            if(pseudoArr[index].startsWith(p)){
                startArr[let]=index;
                return 0;
            }
        }
        return 1;
}

function getPseudo(a){
    for(var i=0;i<a.length;i++){
        if(isNaN(a[i]))
            a=a.split(a[i]).join(i);    
    }
    return a;
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