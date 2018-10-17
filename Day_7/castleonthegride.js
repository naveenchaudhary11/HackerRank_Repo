function processData(input) {
    //Enter your code here
    let lines = input.split('\n');
    let n = +lines[0];
    let board = lines.slice(1, n+1);
    let lastLine = lines[n+1].split(' ');
    //console.log("lastline: ", lastLine)
    let start = {x: +lastLine[1], y: +lastLine[0], moves: 0};
    let end = {x: +lastLine[3], y: +lastLine[2]};
    let queue = [start];
    let visited = {};
    let moves = Infinity;
    let i = 0;
    while(queue.length) {
        i++;
        let node = queue.shift();
        const y0 = node.y;
        const x0 = node.x;
        const m0 = node.moves;

        if (x0 === end.x && y0 === end.y) {
            if (m0 < moves) {
                moves = m0;
            }
            continue;
        }
        //console.log(hash, x0, y0, m0);
        
        // Down
        let y = y0;
        while (y+1 < n && board[y+1][x0] === '.') {
            y++;
            let hash = y + x0 * n;
            if (m0+1 >= moves || m0+1 >= visited[hash]) {continue;}
            visited[hash] = m0+1;
            queue.push({x: x0, y, moves: m0+1});
        }
        
        // Up
        y = y0;
        while (y-1 >= 0 && board[y-1][x0] === '.') {
            y--;
            let hash = y + x0 * n;
            if (m0+1 >= moves || m0+1 >= visited[hash]) {continue;}
            visited[hash] = m0+1;
            queue.push({x: x0, y, moves: m0+1});
        }

        // Right
        let x = x0;
        while (x+1 < n && board[y0][x+1] === '.') {
            x++;
            let hash = y0 + x * n;
            if (m0+1 >= moves || m0+1 >= visited[hash]) {continue;}
            visited[hash] = m0+1;
            queue.push({x, y: y0, moves: m0+1});
        }
        
        // Left
        x = x0;
        while (x-1 >= 0 && board[y0][x-1] === '.') {
            x--;
            let hash = y0 + x * n;
            if (m0+1 >= moves || m0+1 >= visited[hash]) {continue;}
            visited[hash] = m0+1;
            queue.push({x, y: y0, moves: m0+1});

        }
    }
    //console.log(board, start, end, queue);
    //console.log(visited);
    console.log(moves);
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