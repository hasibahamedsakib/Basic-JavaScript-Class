// Object
let carDetails = {
  name: "Volbo",
  date: 2015,
  model: "Vl015",
  color: "Black",
};
// console.log(carDetails.color);
// console.log(carDetails["model"]); // useable for accessing dynamic data.

let carValue = carDetails.color;
// console.log(carValue);

carDetails.price = "$100000";
// console.log(carDetails);

const numberObj = new String();
// console.log(typeof numberObj);

let userInput = 121;
if (typeof String(userInput) == "string") {
  // console.log("This is a String");
}
// console.log(typeof null);

// new Object declear system

const house = new Object();
house.rooms = 4;
house.washroom = 2;
// console.log(house.washroom);

// const obj = {newewewew:"dasew"};

//  Function
function add(x, y) {
  // console.log("main function", x + y);

  return x * y;
}
let number = add(10, 5);
let number1 = add(20, 5);
let number2 = add(30, 5);
let number3 = add(40, 5);

const newArray = [number, number1, number2, number3];
// console.log(newArray);
// console.log(number2);
// console.log(number3);
// console.log("return value", number);
// console.log("multi---", add(10, 5));
function minus(returnValueToTop, value) {
  console.log(returnValueToTop - value);
}

// minus(number, 20);
let jisanMarks = 85;
let tomMarks = 66;
let janeMarks = 95;
let peterMarks = 56;
let johnMarks = 40;

function GradeCheker(marks) {
  if (marks >= 100 || marks >= 80) {
    console.log("A Grade");
  } else if (marks >= 79 || marks >= 60) {
    console.log("B Grade");
  } else if (marks >= 59 || marks >= 50) {
    console.log("C Grade");
  } else if (marks >= 49 || marks >= 40) {
    console.log("D Grade");
  } else {
    console.log("F Grade");
  }
}

// GradeCheker(peterMarks);
// GradeCheker(tomMarks);
// GradeCheker(janeMarks);
// GradeCheker(johnMarks);

// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }

// let value = toCelsius(102);
// console.log(parseFloat(value.toFixed(4)));
// function myFunction() {
//   let carName = "Volvo";
// console.log(carName);
// }
// myFunction();

// Comparison operator
// ==,===,!=,!==,>,< >=,<=, ?

// ternary operator condition ? "Output" :"Default Output"

// let age = 21;

// ternary
// age >= 21 ? console.log("Yess, Biye koro") : console.log("Somoy Hoy nai");

// in else
// if (age >= 21) {
// console.log("Yess, Biye koro");
// } else {
// console.log("Somoy Hoy nai");
// }

// bitwise operator
// & , |

// Switch case
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// Dates are always objects
// Date

// Maths are always objects
