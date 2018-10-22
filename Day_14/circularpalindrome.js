ManachersAlgorithm_getPalindromeList = function(s) {
    if (s==null || s.length==0)
        return "";
    
    var s2 = ManachersAlgorithm_addBoundaries(s.split(''));
    var p = new Array(s2.length); 
    var c = 0, r = 0; // Here the first element in s2 has been processed.
    var m = 0, n = 0; // The walking indices to compare if two elements are the same
    for (var i = 1; i<s2.length; i++) {
        if (i>r) {
            p[i] = 0; m = i-1; n = i+1;
        } else {
            var i2 = c*2-i;
            if (p[i2]<(r-i-1)) {
                p[i] = p[i2];
                m = -1; // This signals bypassing the while loop below. 
            } else {
                p[i] = r-i;
                n = r+1; m = i*2-n;
            }
        }
        while (m>=0 && n<s2.length && s2[m]==s2[n]) {
            p[i]++; m--; n++;
        }
        if ((i+p[i])>r) {
            c = i; r = i+p[i];
        }
    }
    return p;
}

ManachersAlgorithm_addBoundaries = function(cs) {
    if (cs==null || cs.length==0)
        return "||".split('');

    var cs2 = new Array(cs.length*2+1);
    for (var i = 0; i<(cs2.length-1); i = i+2) {
        cs2[i] = '|';
        cs2[i+1] = cs[i/2];
    }
    cs2[cs2.length-1] = '|';
    return cs2;
}

function processData(input) {
    input = input.split('\n');
    var N = input[0];
    var S = input[1];
    
    var P = ManachersAlgorithm_getPalindromeList(S+S);

    var p, k1, k2, k3 = 0;
    var len = 0, j = 0;
    var lastLen = 0, lastPos = 0;

    var pMax = S.length*2+1, pMax2;
    var R = new Array(N);

    for (var i=0; i < 2*N; i += 2 ) {
        pMax2 = pMax+i; k2 = pMax2;
        
        if (lastPos) {
            p = Math.min(P[lastPos], lastPos - i, pMax2 - lastPos - 1);
            
            if (p > lastLen) {
                // 1. new len is longer            
                // then new len must be the new answer; no loop required
                k1 = 0; k2 = 0;
            } else if (p === lastLen) {
                // 2. same length
                k2 = pMax2 - p;
                k1 = k2 - 3;
            } else {
                // 3. shorter
                k2 = pMax2 - p;
                k3 = k2 - 6;            
                k1 = lastPos+1;    
            } 
                
            len = p;
        } else {
            k1 = i+1;
            k2 = pMax2;
            len = 0;
        }

        for (j = k1; j < k2; j++) {
            if (P[j] >= len) {
                p = Math.min(P[j], j - i, pMax2 - j - 1);
            
                if (p > len || (!k3 && p === len)) {
                    len = p; lastPos = j;
                    k2 = Math.min(k2, pMax2 - p);                    
                }
            }
            if (k3) {
                j = k3 - 1; k3 = 0;
            }
        }
        
        lastLen = len; 
        R[i/2] = len;
    }
    output(R.join("\r\n"));
} 
function output(s) {
    process.stdout.write(s + "\r\n");
}
function log(s) {};
function timeStart() {};
function timeEnd() {};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});