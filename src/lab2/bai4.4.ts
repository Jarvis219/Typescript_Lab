let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'typescript';
console.log(typeof userInput);
userName = userInput; // error userInput đang k xác định kiểu dữ liệu trong khi userName nhận kiểu string => userName = string or userInput:any|string
userName = <string>userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}