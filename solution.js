// Question = 1;
/* Problem One = Write a program that takes two numbers as input and performs addition, subtraction, multiplication,
and division. Display the results.
Do not copy on the same code. */

// function calculation(value1, value2, operator) {
//   if (operator == "+") {
//     return value1 + value2;
//   } else if (operator == "-") {
//     return value1 - value2;
//   } else if (operator == "*") {
//     return value1 * value2;
//   } else if (operator == "/") {
//     return value1 / value2;
//   }
// }

// let calResult = calculation(100, 20, "/");
// console.log(calResult);
// // Question = 2;

// Create a program that demonstrates the use of different variable types (numeric, string,
// boolean). Calculate the remainder when dividing two numbers

// let x = 20.1;
// let y = 3.5;
// let sum = x / y;
// console.log(sum.toFixed(3));
//

// function Remainder(x, y) {
//     return x % y;
// }

// let Result = parseFloat(Remainder(50, "3"));

// console.log("Result= " + Result);

// function calculateDividing(num1, num2) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         console.log(num1 % num2);
//     } else {
//         console.log('your input is not a number.');
//     }
// };
// calculateDividing(10,"dasfsf");

//Create a function that takes an object as a parameter (representing a person with properties like name,age, etc.) and prints out the person's details.

// Question = 3;

// function personDetails(infoObj) {
//     return `Color = ${infoObj.color}, Name= ${infoObj.name} , age = ${infoObj.age}. `;
// }

// let info = {
//   name: "Afida Khatun",
//   date: "01-02-2000",
//   age: 24,
//   color: "BlackDaymond",
//   height: 5.3,
//   country: "Bangladesh",
// };

// let detailsInfo = personDetails(info)

// console.log(detailsInfo);

// info.religion = "Islam";
// console.log(info.religion);

//
// function printPersonDetails(person) {
//   return `Name = ${person.Name}, Age = ${person.age}, Gender = ${person.gender}, Religion = ${person.religion}`;
// }

// const person = {
//   Name: "John Doe",
//   age: 30,
//   gender: "Male",
//   religion: "Islam",
// };
// let details = printPersonDetails(person);

// console.log(details);

// Question - 4

/**
 Repeat previous exercise, but this time allow for the possibility that the user enters something that is
not a number. Hint: the built in function isNaN(x) returns true if x is not a number. It returns false if x
is a number. Sort of backwards, but that's what's available
 
*/
// let pass = true;
// let phone = false;
// let hdPhone = true;

// if (pass == true && phone == true) {
//   console.log("Yes");
// } else if (pass == false || hdPhone == true) {
//   console.log("No");
// } else {
//   console.log("Not Allow");
// }

//
// let userInput = 121;
// if (typeof userInput == "string") {
//   console.log("This is a String");
// }else {
//     console.log("This is Number");
// };

// function inputChecker(value) {
//     if (typeof value === "number") {
//         return true;
//     } else {
//         return false;
//     }

// };
// let result = inputChecker("50");
// console.log(result);

// Question Number 5

// const time = new Date();

// time.getUTCDate(2023);
// console.log(time);

//

// function getCurrentDate() {
//   let date = new Date();

//   let mm = date.getMonth() + 1;
//   let dd = date.getDate();
//   let yyyy = date.getFullYear();

//   mm = mm < 10 ? "0" + mm : mm;
//   dd = dd < 10 ? "0" + dd : dd;

//   return `Present Date: ${mm}-${dd}-${yyyy}`;
// }

// console.log(getCurrentDate());

/* Problem Six Solve: Create an object representing a student with properties like Name, age, and grade. Write a function that takes the student object as a parameter and returns a sentence with their information (e.g., "John
is 20 years old and is in Grade 10"). At Least 3 student object using a single one function. */

// function studentDetails(student) {
//   return `Name: ${student.Name}, Age: ${student.age}, Grade: ${student.grade}`;
// }

// const studentObj1 = {
//   Name: "Rana",
//   age: 20,
//   grade: "C",
// };
// const studentObj2 = {
//   Name: "Rahim",
//   age: 22,
//   grade: "B",
// };
// const studentObj3 = {
//   Name: "Rehana",
//   age: 18,
//   grade: "A",
// };

// let student1 = studentDetails(studentObj1);
// let student2 = studentDetails(studentObj2);
// let student3 = studentDetails(studentObj3);

// console.log(student1);
// console.log(student2);
// console.log(student3);
