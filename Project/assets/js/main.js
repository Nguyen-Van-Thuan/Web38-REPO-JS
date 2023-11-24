// Du lieu tu serve tra ve trang
const data = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: "33.000.000",
    image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: "28.290.0000",
    image: "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg"
  },
  {
    id: 3,
    name: "iPhone 15 Plus",
    price: "25.700.000",
    image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-xanh-thumb-600x600.jpg",
  },
  {
    id: 4,
    name: "iPhone 15",
    price: "21.900.000",
    image: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-den-thumb-600x600.jpg"
  },
  {
    id: 5,
    name: "Samsung Galaxy A05s",
    price: "4.190.000",
    image: "https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg"
  },
  {
    id: 5,
    name: "123",
    price: "4.190.000",
    image: "https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg"
  },
  {
    id: 6,
    name: "3434",
    price: "4.190.000",
    image: "https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galaxy-a05s-sliver-thumb-600x600.jpeg"
  }
];

// B1: Truy cap phan tu
let elementJs = document.querySelector(".element-js");

// B2: Show du lieu tra ve tu serve ra HTML
let HTML = ``;
data.forEach((value) => {
  console.log(value);
  HTML = HTML + `
      <div class="column column-4">
        <div class="content">
          <div class="box-image">
            <img src=${value.image} alt="anh 1">
          </div>
          <div class="box-description">
            <h3 class="name-product">${value.name}</h3>
            <p class="price">${value.price} Vnd</p>
          </div>
        </div>
      </div>
  `
});
// B3: Hien thi
elementJs.innerHTML = HTML;