function Addandhandle(x: number, y: number, cb: (num: number) => void) {
    const result = x + y;
    //callback lg ra result
    cb(result);
}
Addandhandle(9, 7, (result) => {
    console.log(result);
})