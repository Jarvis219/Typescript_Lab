const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];
activeHobbies.push(hobbies);

//error hai mảng k thể push cho nhau khi chưa định nghĩa chỉ số index
// giải pháp sử dụng hàm concat() để nối 2 mảng thành 1 hoặc activeHobbies sẽ là 1 chuỗi => hobbies.push(activeHobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log(activeHobbies);
