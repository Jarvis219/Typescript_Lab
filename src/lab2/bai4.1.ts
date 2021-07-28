enum Role { ADMIN, READ_ONLY, AUTHOR };
const person1: {
    name: string,
    age: number,
    hobbies: string[],
    role: string,
    roletuple: [number, string]
} = {
    name: "typescript",
    age: 20,
    hobbies: ['sport', 'cooking'],
    role: Role.ADMIN, // error role thuộc kiểu string => role: 'string';
    roletuple: [2, 'author']
}

let favoriteActivites: any[];
favoriteActivites = [7, 'sports', true];

if (person1.role === (Role.AUTHOR)) { //errror Role.AUTHOR chưa đc định nghĩa giá trị so sánh=> enum Role{Role.AUTHOR="string"}
    console.log('is author');
}
person1.roletuple.push('admin');
person1.roletuple[1] = 10; //error vị trí index=1 của  person1.roletuple có type là number => erson1.roletuple[1] = '10';
person1.roletuple = [0, 'admin', 'user'];// error khi khai báo gán kiểu tuple sẽ quy định số lượng phần tử của mảng, số lượng khai báo đang là 2 phần tử mà truyền vào 3 phần tử nên lỗi => bỏ phẩn tử thứ 3 truyền vào hoặc sửa lại cấu trúc   roletuple: [number, string]->  roletuple: [number, string, string];