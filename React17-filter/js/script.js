let allProduct = [
  {
    id: 1,
    name: "Computer",
    price: 10000,
  },
  {
    id: 2,
    name: "Car",
    price: 10000000,
  },
  {
    id: 3,
    name: "Book Story",
    price: 10,
  },
  {
    id: 4,
    name: "Door",
    price: 100,
  },
  {
    id: 5,
    name: "Phone",
    price: 500,
  },
];

let bigPrice = allProduct.filter(function (price) {
  return price.price > 100;
});

bigPrice.forEach(function (price) {
  console.log(
    `
    Name: ${price.name}af
    Price:${price.price}af
    `
  );
});
