"use strict";
function Addandhandle(x, y, cb) {
    const result = x + y;
    //callback lg ra result
    cb(result);
}
Addandhandle(9, 7, (result) => {
    console.log(result);
});
