// Array mein se 18 ya us se zyada age walay users select karo aur unke names ka new array banao.
// const students = [1, 2, 3, 24, 51, 62, 27, 8];
// const adults = [];
// students.filter((e) => {
//   if (e > 18) {
//     adults.push(e);
//   }
// });
// console.log(adults);

// Array mein har fruit ki frequency count karo. Result ek object hona chahiye.
// const fruits = [
//   "apple",
//   "banana",
//   "kevi",
//   "apple",
//   "stoberry",
//   "grapes",
//   "apple",
//   "stoberry",
//   "grapes",
//   "apple",
//   "stoberry",
//   "grapes",
// ];
// const result = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;

//   return acc;
// }, {});
// console.log(result);

// 50 se zyada marks walay students ko select karo aur unke marks descending order mein sort karo.
// const students = [10, 200, 35, 240, 51, 602, 27, 80];
// const result = students.filter((e) => e > 50).sort((a, b) => b - a);
// console.log(result);

// Har product ke object mein ek nayi property finalPrice add karo. finalPrice, price ka 10% discount apply karne ke baad ho
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];

// const result = products.map((product) => {
//   return {
//     // ...product,
//     finalPrice: product.price * 0.9,
//   };
// });
// console.log(products);
// console.log(result);

// Products ki total inventory value calculate karo. Har product ki quantity ko price se multiply karke total nikalo.
const products = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Mobile", price: 500, quantity: 3 },
  { name: "Keyboard", price: 50, quantity: 5 },
  { name: "Mouse", price: 25, quantity: 4 },
  { name: "Monitor", price: 300, quantity: 2 },
];
