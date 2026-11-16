// การประกาศตัวแปรใน javascript  es6
// var, let, const

// var เป็นการประกาศตัวแปรแบบเก่า
var firstName = "John";
console.log(firstName);

// let เป็นการประกาศตัวแปรแบบใหม่
let fullName = "Jany Doe";
fullName = "Jany Smith";
console.log(fullName);

// const เป็นการประกาศค่าคงที่ ไม่สามารถเปลี่ยนค่าได้
const age = 32;
// age = 35; // ตรงนี้จะเกิด error เพราะ const ไม่สามารถเปลี่ยนค่าได้
console.log(age);

// การสร้างฟังก์ชันแบบเดิม
// function greet(name) {
//     return "Hello " + name;
// }

// การเรียกใช้งานฟังก์ชันแบบเดิม
// console.log(greet("John"));

// การสร้างฟังก์ชันแบบใหม่ arrow function
// const greet = (name) => {
//     return "Hello " + name;
// }

// const greet = name => "Hello " + name;

// console.log(greet("John"));

const greet = () => "Hello World";

// การเรียกใช้งานฟังก์ชันแบบใหม่
console.log(greet());

// Template literals
const message1 = "My name is " + fullName + " and I am " + age + " years old.";

const message2 = `My name is ${fullName} and I am ${age} years old.`;

console.log(message1);
console.log(message2);