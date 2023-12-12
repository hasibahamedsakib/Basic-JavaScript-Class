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
const object = {
  name: {
    firstName: "Mr",
    lastNames: "Rahim",
  },
  age: 30,
  profetion: "Teacher",
};

// console.log(object?.name?.lastNames);

//  max, ceil, floor, abs, round, random

//  map, forEach, filter, find

// let number = [10, 20, 30, 40, 50];
// let sum = 0;
// let mapValue = number.map((i) => {
//   return (sum = sum + i);
//   // console.log(i);
// });
// console.log(sum);
