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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    const obj = {}
    // loop over array
    array.forEach(number => {
        // for each number in array,
        // if it doesn't aleady exist as a jet ib the
        // object, create one and set its value to 1
        if(!obj[number]) {
            obj[number] = 1;
        } else{
            //if it already exists as key on the object,
            // increment is corresponding value.
            obj[number] += 1;
        }
    });

    // return object key wih highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity;

  /*  for (let key in obj) {
        const value = obj[key];
        if(value>highestValue){
            highestValue = value;
            highestValueKey = key
        }
    }
    
    */
   let pairs = 0

    for (let key in obj){
        const value = obj[key];
        pairs+= value % 2
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
