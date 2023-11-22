// Doi mau phan tu HTML tieu de 1
/* B1: Truy cap phan  theo ID
    Tra ve cho minh duy nhat 1 phan tu
   B2: Doi mau phan tu: style la cu phap

 */
let heading_1 = document.getElementById('heading-1');
// console.log(heading_1);

heading_1.style.color = 'red';

// Doi mau phan tu HTML tieu de 2
/* B1: Truy cap phan tu theo CLASS
    Tra ve 1 list danh sach cac tieu de co trong CLASS
   B2: 
 */

let heading_2 = document.getElementsByClassName('heading-2');
// console.log(heading_2);

for(let i = 0; i < heading_2.length; i++){
//   console.log(i); //chi so cua mang  
//  console.log(heading_2[i]); // lay tung phan tu mang
  heading_2[i].style.color = "blue";
  heading_2[i].style.fontSize = '40px';
}



// Truy cap phan tu theo TAG
/* B1: Truy cap phan tu theo TAG: Tra ve cho minh danh sach cac the: ARRAY
   B2: Doi mau
 */
let headingTag = document.getElementsByTagName('h3');
console.log(headingTag);
for(let e = 0; e < headingTag.length; e++){
  // console.log(e);
  headingTag[e].style.color = 'green';
}


/* Bai toan 4: sdung querySelector & querySelectorAll
 */

let heading_4 = document.querySelector('#heading-4');
console.log(heading_4);

let heading_5 = document.querySelectorAll('.heading-5');
console.log(heading_5);






















