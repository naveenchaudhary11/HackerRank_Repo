function processData(input) {
  var array = input.split('\n');
  var caseCount = +array.shift();
  
  for (var i=0; i<caseCount && array.length;i++){
    var ladderCount = +array[0];
    var ladders = array.slice(1, ladderCount+1);
    var snakeCount = +array[ladderCount+1];
    var snakes = array.slice(ladderCount+1+1, ladderCount+1+snakeCount+1);
    array = array.slice(ladderCount+1+snakeCount+1);
    solveCase(ladders.map(splitOnSpace), snakes.map(splitOnSpace));
  }
} 

function solveCase(ladders, snakes) {
  var field = initArray();
  insertLadders(ladders,field);
  insertSnakes(snakes,field);
  
  var goal = 100;
  var reached = [1];
  var doneFields = [];
  var steps = 0;
  while(reached.indexOf(goal) === -1) {
    if (doneFields.length == reached.length) {
      steps = -1;
      break;
    }
    for (var i=reached.length-1; i>=0; i--) {
      if(doneFields.indexOf(reached[i]) == -1) {
        doneFields.push(reached[i]);
        for (var j=1; j<7; j++) {
          var f = field[reached[i]+j];
          if (reached.indexOf(f) === -1) {
            reached.push(f);
          }
        }
      }
    }
    steps++;
  }
  console.log(steps);
}

function insertLadders(ladders, field) {
  for (var i=0; i<ladders.length; i++) {
    field[ladders[i][0]] = ladders[i][1];
  }
}

function insertSnakes(snakes, field) {
  for (var i=0; i<snakes.length; i++) {
    field[snakes[i][0]] = snakes[i][1];
  }
}

function initArray() {
  var field = [];
  for (var i=0; i<101;i++) {
    field.push(i);
  }
  return field;
}

function splitOnSpace(arr) {
  return arr.split(' ').map(Number);
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