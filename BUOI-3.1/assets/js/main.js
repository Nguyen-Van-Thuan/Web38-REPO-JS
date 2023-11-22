// Khai bao 1 mang
// let arr_1 = [1,2,3,"web38"]; //0,1,2,3

// Truy cap phan tu mang
// console.log(arr_1[3]);

// Values type
// let a = 1;
// let b = a;
// b = b + 2;
// console.log(a);
// console.log(b);

// Kieu tham chieu
// let a = [1,2,3,4];
// let b = a; //[1,2,3,4]

// Cap nhat 1 gia tri moi len array
// b.push(5); //[1,2,3,4,5]
// console.log(b);
// console.log(a);

// Duyet mang voi vong lap for()

// let arr = [1,2,3,4];

// Tao bien luu tru tong. Ban dau minh de bang 0.
// let sum = 0;
// let sumOdd = 0;
// for(let i = 0; i < arr.length; i++ ){ //i dong vai tro chi so cua mang
//   // Hien thi phan tu mang
//   // console.log(arr[i]);

//   // Tinh tong array
//   sum += arr[i];
//   // Tinh tong cua cac so le trong array
//   if(arr[i] % 2 != 0) {
//     // console.log(arr[i]);
//     sumOdd += arr[i]
//   }
// }
// console.log("Tong cac phan tu trong mang",sum);
// console.log("Tong cac so le trong mang:", sumOdd);

// 0,1,2,3,4,5
// vong 1: sum = sum + arr[0] (arr[0] phan tu dau tien: 1) ===> Bang 1
// vong 2: sum(Hien tai bang 1) = 1 + arr[1] (arr[1] phan tu thu 2: 2) ===> 1+2 Bang 3
//Vong 3: sum(Hien tai bang 3) = 3 + arr[2] (arr[2] ....: 3) ====> 3+3 bang 6
//Vong: sum (Hien tai bang 6) = 6 + arr[3] (arr[3] ....: 4) ====> 6 + 4 => 10



// Vong lap forEach()

let arr = [11,12,13,14,15,16];

arr.forEach((value, index) => {
  // value, index: Dat ten gi cung duoc
  // Trong truong hop 1 cai -> value
  
  // Value: Phan tu
  // Index: chi so
  // console.log(value, "day la phan tu");
  console.log(index, "chi so cua mang");

})