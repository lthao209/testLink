const products = [
  {
    id: 1,
    image: "img/bg-img/1.jpg",
    name: "Modern Chair",
    price: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 2,
    image: "img/bg-img/2.jpg",
    name: "Minimalistic Plant Pot",
    price: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 3,
    image: "img/bg-img/3.jpg",
    name: "Modern Chair",
    price: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 4,
    image: "img/bg-img/4.jpg",
    name: "Night Stand",
    price: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 5,
    image: "img/bg-img/5.jpg",
    name: "Plant Pot",
    price: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 6,
    image: "img/bg-img/6.jpg",
    name: "Small Table",
    price: 320,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 7,
    image: "img/bg-img/7.jpg",
    name: "Metallic Chair",
    price: 318,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 8,
    image: "img/bg-img/8.jpg",
    name: "Modern Rocking Chair",
    price: 318,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
  {
    id: 9,
    image: "img/bg-img/9.jpg",
    name: "Home Deco",
    price: 318,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
  },
];

const getItem = (data) => `<div class="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src="${data.image}" alt="">
                        <!-- Hover Content -->
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>${data.price}</p>
                            <h4>${data.name}</h4>
                        </div>
                    </a>
                </div>`;

function show(data) {
  let tab = "";
  data.forEach((item) => {
    tab += getItem(item);
  });
  console.log(data);
  console.log(tab);
  // Setting innerHTML as tab variable
  document.getElementById("products").innerHTML = tab;
}

show(products);
