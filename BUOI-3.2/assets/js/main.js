
// Khai bao 1 object
// let obj = {
//   name: "Nguyen Van A",
//   age: 18,
//   email: "nguyenvana@gmail.com"
// };

// Cap nhat tuoi
// obj.age = 25;
// Them 1 gia tri moi
// obj.address = "Ha Noi";

// Xoa 1 gia tri trong object
// delete obj.email
// console.log(obj);


// Truy cap vao 1 object
// console.log(obj.name); //Truy cap vao name
// console.log(obj.age); //Truy cap tuoi
// console.log(obj.email); //Truy cap email


/* Phuong thuc huu ich lam viec voi array */
// Phuong thuc map

// let arr = [1,2,3,4,5,6];
// let sum = 0;
// arr.map((value, index) => { //Value: gia tri phan tu cua mang, index: chi so cua mang
//   // console.log(value);
//   // console.log(index);
//   sum += value;
// })

// console.log(sum);


// Phuong thuc filter()
/*
  input: 1 mang gom: [2,3,4,5,6,7]
  output: Hien thi danh sach mang chua toan so le
*/

// let arr = [2,3,4,5,6,7];

// Cach truyen thong.
// let result = [];
// arr.forEach((item, index)=> { //item: gia tri phan tu mang. Index la chi so cua mang
//   // console.log(item);
//   if(item % 2 == 1) {
//     // console.log(item);
//     result.push(item);
//   }
// })
// console.log(result);

// Su dung filter
// let count = arr.filter((e)=>{
//   // console.log(e); //2,3,4,5,6,7
//   return e % 2 == 1;
// })

// console.log(count);


// Phuong thuc reduce()
// let arr = [10,2,38,1,2,3];
// let result = arr.reduce((sum, element)=>{
//   // console.log(sum);
//   // console.log(element);
//   let total = sum + element;
//   return total;
// }, 0 )
// console.log(result); //Tong cua mang

// phuong thuc find()
/*
  -input: 1 mang [1,2,3,4,5,6,7]
  -output: tim ra phan tu dau tien thoa man dieu kien >5
*/

let arr = [1, 2, 3, 4, 5, 6, 7]; //0,1,2,3,4,5,6
let result = arr.findIndex((item) => {
  // console.log(item);
  return item > 5;
})
console.log(result);