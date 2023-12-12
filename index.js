// function funName(params) {
//   console.log(params);
// }

// funName();

// const funName1 = (params) => {
//   return 5 * params;
// };
// console.log(funName1(5));

// const index = (x) => {
//   return x + 9;
// };
// console.log(index(50));

// object destructuring
const obj = { name: "Mr Rahim", age: 30, profetion: "Teacher" };
obj.name;
obj.age;

let { name, age, profetion } = obj;

// console.log(name, age, profetion);

// Array destructuring
// const array = [10, 20, 30, 40, 45, 50, 70, 80, 90];
// const [x, y, z, ...another] = array;
// console.log(another);

// let obj2 = { x, b };

{
  let name = "dasda";
  let age = 20;

  // Shorthand notation
  let obj2 = [name, age];
  // console.log(obj2);
}

//  default params
const myFunction = (x = 10, y = 20) => {
  return x + y;
};
// console.log(myFunction());

// optional chaining

// console.log(object?.name?.lastNames);

//  max, ceil, floor, abs, round, random

// let number = [10, 20, 30, 40, 50];
// let sum = 0;
// let mapValue = number.map((i) => {
//   return (sum = sum + i);
//   // console.log(i);
// });
// console.log(sum);

// location API => browser api.

// map, forEach, filter, find => es6 array method;

// for (let i = 0; i <= number.length - 1; i++) {
//   console.log(number[i]);
// };
// let sum = 0;
// number.map((element) => {
//   sum = sum + element;
// });
// console.log(sum);
const object = {
  name: "Mr rahim",
  age: 30,
  profetion: "Teacher",
};

// const [array1, array2, array3] = Object.entries(object);
// console.log(array1);
// console.log(array2);
// console.log(array3);

// map method
// array1.map((name) => {
//   console.log(name);
// });
// console.log(Object.entries(object));

// forEach method
// let number = [10, 20, 30, 40, 50];
// number.forEach((number) => {
//   console.log(number * 2);
// });
// console.log(result);

// filter
let number = [10, 20, 31, 40, 59, 40, 40];

// for (let x = 0; x <= number.length - 1; x++) {
//   let element = number[x];

//   if (element % 2 !== 0) {
//     let index = number.indexOf(element);
//     number.splice(index, 1);
//   }
// }
// console.log(number);

// Filter method
// let filter = number.filter((element) => {
//   return element == 40;
// });

// console.log(filter);

// find method
let find = number.find((element) => {
  return element == 30;
});

console.log(find);
