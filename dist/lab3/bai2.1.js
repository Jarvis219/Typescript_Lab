"use strict";
let sums = (x = 5, y) => {
    return x + y;
};
let speech = (output) => {
    console.log(`result: ${output}`);
};
speech(sum(5, 12));
console.log(speech(sum(7, 9)));
