"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

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
  let frontFlip = 0;
  let backFlip = 0;

  if (n != p) {
    frontFlip = Math.floor(p / 2);
    if (p % 2 == 1) {
      backFlip = Math.floor((n - (p - 1)) / 2);
    } else {
      backFlip = Math.floor((n - p) / 2);
    }
    return Math.min(frontFlip, backFlip);
  }
  return 0;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = parseInt(readLine().trim(), 10);

  const result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
