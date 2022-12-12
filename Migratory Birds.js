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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
   
    // count the amoun tof occurences of each number

    // create object
    const obj = {}
    // loop over array
    arr.forEach(number => {
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

    for (let key in obj) {
        const value = obj[key];
        if(value>highestValue){
            highestValue = value;
            highestValueKey = key
        }
    }
    // convert key back to number
    return Number(highestValueKey)


}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
