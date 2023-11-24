// B1: Truy cap phan tu
let iconMess = document.querySelector(".icon-mess");
let contentMess = document.querySelector(".content-mess");
let closeMess = document.querySelector(".close-mess");

console.log(closeMess);


// console.log(contentMess);
// B2: Bat su kien nguoi dung bam vao cai nut
iconMess.addEventListener("click", () => {
  contentMess.style.bottom = '120px';

});

closeMess.addEventListener("click", () => {
  contentMess.style.bottom = '-600px';
});