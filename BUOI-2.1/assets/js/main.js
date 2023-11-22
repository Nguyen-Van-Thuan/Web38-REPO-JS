
/* Khai bao function hello => ES5. Hien thi 1 loi chao: Hello 500 ae lop Web38 */
// function hello() {
//   console.log('Hello 500 ae lop Web38');
// }
// Su dung function hello
// hello();


/* Function phan biet tham so & doi so */
// function hi(name) { //Parameters (Tham so)
//   console.log(`Hi ${name}. Minh la anh lop web38`);
// }
// Thuc thi
// hi("AE WEB 38"); //argument (Doi so)

// Function tinh tong
// function sum(a, b, c) {
//   // let a = 5;
//   // let b = 6;

//   let total = a + b + c;
//   return total; //return -> Tra ve 1 gia tri cua function
// }

// Thuc thi 
// console.log(sum(10, 12, 10));
// let sumTotal = sum(10, 12, 10);
// console.log(sumTotal);


// Function khong co tham so -> Thuc te it dung
// function sayHello(){
//   console.log('Function khong co tham so');
// } 
// sayHello();

// Function co tham so, khong co gia tri tra ve (Thieu return) -> Thuc te it dung
// function sayHello_1(name) {
//   console.log(`Hello ${name}`);
// }
// sayHello_1("Web38");

// Function co tham so va tra ve ket qua -> Su dung nhieu.
// function count(a,b) {
//   return a - b;
// }

// console.log(count(5,3));


// Cau lenh if(neu)
// Dau lon hon: >
// Dau lon hon hoac bang: >=
// Dau be hon: <
// Dau be hon hoac bang: <=
// Dau bang: ==

// let money = 30;
// if(money > 29) {
//   console.log("Du tien mua iphone 15 Pro max roi!");
// }

// Cau lenh if-else
// let hour = 13;

// if (hour < 12) {
//   console.log("Chao buoi sang");
// }else {
//   console.log("chao buoi chieu");
// }

//Cau lenh dieu kien: if - else if - else

// let hour = 20;

// if (hour < 12) {
//   console.log("Xin chao buoi sang");
// }else if(hour >= 12 && hour <= 17) {
//   console.log("Xin chao buoi chieu")
// }else {
//   console.log("Xin chao buoi toi");
// }

// Cau lenh dieu kien: switch - case
// let hour = 6;

// switch (hour) {
//   case 6: {
//     console.log("Day la so 6");
//     break; //Thoat ra ngoai
//   }
//   case 7: {
//     console.log("Day la so 7");
//     break;
//   }
//   case 8: {
//     console.log("Day la so 8");
//     break;
//   }
//   default: {
//     console.log("So khac")
//     break;
//   }
// }

// let money = 10000;

// switch(money) {
//   case 12000: {
//     console.log('ca phe sua');
//     break;
//   } 
//   case 10000: {
//     console.log('ca phe da');
//     break;
//   }
//   case 8000: {
//     console.log('sting dau');
//     break;
//   }
//   case 2000: {
//     console.log('tra da');
//     break;
//   }
// }


// Fist class funtion
// Ham tinh 2 so
// let count = function sum(a,b) {
//   return a + b;
// }
// // Ham tinh tong 3 so a,b,c
// function isSum(count, c) {
//   return count + c;
// }
// console.log(isSum(count(3,4), 5));

// let sum = function (a,b) {
//   return function (c) {
//     return a + b + c
//   }
// }

// let functReturn = sum(3,4);
// console.log(functReturn(5));


// ES5
// function sayHello () {
//   console.log("Hello 500ae ");
// }

// ES6: cu phap viet function

// Khai bao 1 function hien thi loi chao
let sayHello = () => {
  console.log("hello 500ae");
}
sayHello();

// Khai bao 1 function tinh tong
let sum = (a,b,c) => {
  return a + b + c;
}

console.log(sum(2,3,5));