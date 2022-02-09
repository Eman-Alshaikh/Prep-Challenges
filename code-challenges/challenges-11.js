 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) 
{
    inputString += inputStdin;
});

process.stdin.on('end', function()
 {
    inputString = inputString.split('\n');

    main();
});

function readLine()
 {
    return inputString[currentLine++];
}

/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    // Write your code here
   let equalize = new Map();
    let theCount = 0;
    arr.forEach((elementInArray) => 
    {
        if (equalize.has(elementInArray))
         {
            let a = equalize.get(elementInArray) + 1;
           equalize .set(elementInArray, a);
            if (a> theCount) {
                theCount = a;
            }
        } else 
        {
           equalize.set(elementInArray, 1);
            if (theCount == 0)
             {
                theCount = 1;
            }
        }
    });
 
    return arr.length - theCount;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = equalizeArray(arr);

    ws.write(result + '\n');

    ws.end();
}


