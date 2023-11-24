//  Cach 2: Bat su kien trong HTML - Element
let button_2 = document.querySelector(".button-2");
// console.log(button_2);

button_2.onclick = () => {
  alert("day la button 2");
}


// Cach 3: Bat 1 su kien trong HTML - adEventlistener
// Nen dung.

let button_3 = document.querySelector(".button-3");
// console.log(button_3);

button_3.addEventListener("click", () => {
  alert("Day la button 3");
});
button_3.addEventListener("mouseout", ()=> {
  alert("Vua click 2 lan day");
});

