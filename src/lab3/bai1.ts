//bai1.1 
function sum1_1(): number {
    let a: number = 5;
    let b: number = 7;
    return a + b;
}

let sum1_2 = () => {
    let a: number = 5;
    let b: number = 7;
    return a + b;
}
//bai1.2 default value, optional, parameter, rest parameter

let sum1_3 = (num1?: number, num2: number = 0): number => {
    return <number>num1 + num2;
}




const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];
activeHobbies.push(hobbies);

//error hai mảng k thể push cho nhau khi chưa định nghĩa chỉ số index
// giải pháp sử dụng hàm concat() để nối 2 mảng thành 1 hoặc activeHobbies sẽ là 1 chuỗi => hobbies.push(activeHobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log(activeHobbies);
