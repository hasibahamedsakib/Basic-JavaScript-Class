// const car = {
//   name: "toyota",
//   model: "TY27580",
//   price: "$5000",
//   color: "black",
//   carFunction: function () {
//     return this.price;
//   },
//   resultFun: function () {
//     this.carFunction();
//   },
// };
// console.log(this);

// console.log(car.resultFun());
// console.log(car.length);

// "use strict";
// x = 10.54;
// console.log(x);
// myFunction();

// function myFunction() {
//   //   x = 10;
//   //   console.log(x);
// }
// "use strict";
// let x = 3.14;
// console.log(x);
// delete x;
// console.log(x);
// function x(p1, p1) {}

// let x = 10;
// {
//   console.log(x);
// }
// Javascript Loop.

// what is loop => Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false . A loop will continue running until the defined condition returns false

// let number = 1;
// while (number <= 100) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }

//   // number = number+1
//   number++;
// }

for (let number = 1; number <= 10; number++) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}
