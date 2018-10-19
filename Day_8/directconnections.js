function processData(input) {
  input = input.split('\n');
  var numBlocks = input[0];
  for(var i = 0; i < numBlocks; i++) {
    var cityLocations   = input[i*3 + 2].split(' ').map(function(v) { return parseInt(v) });
    var cityPopulations = input[i*3 + 3].split(' ').map(function(v) { return parseInt(v) });

    console.log(runScenarioEfficient(cityLocations, cityPopulations));
  }
 
} 

function runScenarioEfficient(cityLocations, cityPopulations) {
  var indices = cityLocations.map(function(v, i) { return i }).sort(function(a, b) {
    return cityPopulations[a] - cityPopulations[b];
  });
  cityLocations = cityLocations.map(function(v, i) {
    return cityLocations[indices[i]];
  })
  
  var distances = [];
  var totalCableLength = 0;
  for(var i = 1; i < cityLocations.length; i++) {
    var distance = 0;
    for(var j = 0; j < i; j++) 
      distance += Math.abs(cityLocations[i] - cityLocations[j]); 
    
    if(distance > 1000000007)
      distance %= 1000000007;
    totalCableLength  += distance * cityPopulations[indices[i]];
    if(totalCableLength > 1000000007)
      totalCableLength %= 1000000007
  }
  return totalCableLength;
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