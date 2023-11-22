

//Truy cap vao phan tu wrap-box
let wrapBox = document.querySelectorAll(".wrap-box");


// Co 1 cach gian tiep, truy cap phan tu
let heading_1 = document.querySelectorAll(".heading-1");
// console.log(heading_1[1]);

let parentHeading = heading_1[0].parentNode;
// console.log(parentHeading);





/* Lam the nao lay duoc noi cua the h2 */
// B1: Truy cap phan tu heading-2

let heading_2 = document.querySelectorAll(".heading-2");
//console.log(heading_2); //Tra ve 1 mang

// B2: Lay noi dung cua no ra
// console.log(heading_2[0].innerText);


heading_2[0].innerHTML = "Hello 500 ae lop WEB38";
heading_2[0].style.color = "red";





/* 
  INPUT: Them 1 the HTML moi vao trong trang HTML
  OUTPUT: Them 1 the <p>Day la the moi them vao!</p> 

*/

// Phuong thuc appenChill();

// B1: Truy cap vao vi tri muon them heading-3
let heading_3 = document.querySelectorAll(".heading-3");
// console.log(heading_3); //Mang

// B2: Tao the muon them
let para = document.createElement("p");
para.innerHTML = "Day la the moi them vao!";

// console.log(para);

// B3: Them the
heading_3[0].prepend(para);


// phuong insertBefore();
// B1: Truy cap phan tu 
let box_3 = document.querySelectorAll(".box-3");

// B2: Tao the muon them
let para_1 = document.createElement("h4");
para_1.innerHTML = "5000 ae web38!";

// B4: Them bang inserBefore
// document.body.insertBefore(): Cu phap

document.body.insertBefore(para_1, box_3[0]);




/* Xoa phan tu trong dom */

// B1: Truy cap vao phan tu
let box_4 = document.querySelectorAll(".box-4"); //mang
let boxChild = document.querySelectorAll(".heading-4");

// console.log(boxChild[1]);

// B2.1: Xoa phan tu
// box_4[0].removeChild(boxChild[1]);

boxChild[1].parentNode.removeChild(boxChild[1]);
// console.log(boxChild[1].parentNode);


/* Thay the phan tu trong DOM */

// B1: Truy cap phan tu
let heading_5 = document.querySelectorAll(".heading-5");
let parentHeading_5 = document.querySelectorAll(".box-5");
// console.log(parentHeading_5);

// B2.1: Tao the moi va gan noi dung
let new_para_5 = document.createElement("p");
new_para_5.innerHTML = "Thay the PT moi";

// B3: Thay the
parentHeading_5[0].replaceChild(new_para_5, heading_5[0]);





/* Sao chep 1 phan tu trong DOM */
// Truy cap phan muon sao chep
let heading_6 = document.querySelectorAll(".heading-6");
// console.log(heading_6);

// sao chep
let coppyTag = heading_6[1].cloneNode(true);
console.log(coppyTag);