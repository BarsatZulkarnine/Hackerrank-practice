'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let count = 0;
    let mid = Math.floor(n/2)
    if(p = 1){
        return 1
    }
    if(p<= mid){
        count = 1
        for(let i = 0; i <= mid; ) {
            count+= 1
            if(i >= p){
                break
            }
        }
        i+=2
    }
    else{
        for(let i = n; i >= mid;) {
            
            if((i == p) || (i-1 == p)){
                break
            }
            count+= 1
            i-=2
        }
    }
    return count

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
