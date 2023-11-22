// /*PHUOMG THUC SOME*/
// let arr = [1,2,3,4,5];
//  let result = arr.some((value)=>{
//   // console.log(value);
//   // if(value > 4){
//   //   return value
//   // }
//   return value > 4
// })
// console.log(result);




// /* Phuong thuc every */
// let arr_1 = [10,22,23,24,25];
// let result_1 = arr_1.every((item) =>{
//   console.log(item);
//   return item > 10;
// })
// console.log(result_1);


// phuong thuc object
let persion = {
  name: "nguyen van a",
  age: 20,
  email: "abc@gmail.com",
  address: "Ha Noi"
}
// Truy cap phan tu object
// console.log(persion.name);


// Lay danh sach cac key cua mang
// Object.key(): cu phap lay key cua obj
let keyArr = Object.keys(persion);
// console.log(keyArr);

// C1:Lay tung phan tu cua key trong obj
keyArr.forEach((value,index)=>{
  // console.log(value);
})

// C2: for . . . in
for(let key in persion){
  console.log(key);
  console.log(persion[key]);
}





// Lay danh sach value cua mang
// Object.values(): cu phap lay value cuar obj
let valueArr = Object.values(persion);
// console.log(valueArr);












