// type Combinable = number | string;
// function combine(input1: Combinable, input2: number | string, resultConversion: 'as-number' | 'as-text') {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//         result = parseFloat(input1) + parseFloat(input2);
//         //error do parseFloat() chỉ nhận tham số string truyền vào nhưng input1 và input2 truyền vào có thể là number or string nên lỗi
//         // giải pháp định nghĩa lại kiểu truyền vào function input1:string & input2:string
//     } else {
//         result = input1.toString() + input2.toString();

//     } return result;
// }

// const combineNumber = combine(21, 21, 'as-number');
// console.log(combineNumber);

// const combineStringNumber = combine('21', '7', 'as-number')
// console.log(combineStringNumber);

// const combineText = combine('Typescript', 'java', 'as-text');
// console.log(combineText);