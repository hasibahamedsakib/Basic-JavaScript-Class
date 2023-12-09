// Problem 1
// Object Manipulation:

// Create an object representing a person with properties like name, age, and country.
// Write a function to print out all the person's properties in the object.

const personObj = {
  name: "Mr Hulululu",
  age: 27,
  country: "india",
};

function personDetails(person) {
  // console.log(person);
  return `Name: ${person.name} age: ${person.age} Country: ${person.country}`;
}

let personInfo = personDetails(personObj);
// console.log(personInfo);

// problem 2
// Looping Through an Object:
// Given an object with various properties, write a function that loops through the object and prints out the key-value pairs.

// function printObject(obj) {
//   //   let keys = Object.keys(obj);
//   //   let value = Object.values(obj);
//   //   console.log(keys.length);
//   //   console.log([...keys, ":", ...value]);
//   for (let x = 0; x <= value.length - 1; x++) {
//     console.log(keys[x], ":", value[x]);
//   }

//   for (let keys in obj) {
//     console.log(obj[keys]); // obj.name
//     // console.log(keys);
//   }
// }

const user = {
  name: "Abraham",
  age: 30,
  city: "New York",
};

// console.log(user["name"]);
// For, forin,forof,while
// loop details => initialize,condition,update

// 20 =>

function printObjectValue(object) {
  // object keys and values
  // let keys = Object.keys(object); // ["name","age","city"]
  // let values = Object.values(object); // ["Abraham",30,"New York"]
  // // initialize
  // let x = 0;
  // // condition
  //  while loop
  // while (x <= keys.length - 1) {
  //   // console.log(x);
  //   // console.log(keys);
  //   console.log(`${keys[x]} : ${values[x]}`);
  //   // update
  //   x++;
  // }
  // for loop
  // for (let x = 0; x <= keys.length - 1; x++) {
  //   console.log(`${keys[x]} : ${values[x]}`);
  // };
  // for in loop
  // for (let keys in object) {
  //   console.log(keys, object[keys]); // user["name"]
  // }
}
printObjectValue(user);

// let country = "I love my country";
// let newArray = [];
// for (let element of country) {
//   if (element != " ") {
//     newArray.push(element);
//   }
//   // console.log(element);
// }
// console.log(newArray);

// print vowel and consonant on the string.
let country = "I love my country of Bangladesh";

country = country.toLowerCase();
let consonant = [];

for (let element of country) {
  if (element !== " ") {
    if (
      element !== "a" &&
      element !== "e" &&
      element !== "i" &&
      element !== "o" &&
      element !== "u"
    ) {
      consonant.push(element);
    }
  }
}
console.log(consonant);

// printObject(user);

// let string = "Hello World";
// for (let value of string) {
//   console.log(value);
// }

// problem-3
// Array of Objects:

// Create an array of objects where each object represents a book with properties like title, author, and published year.
// Write a function that takes this array and prints out the titles of all the books published after a certain year.

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "The Book Gleens",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1985,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1955,
  },
];

// function booksTitle(book) {
//   for (let i = 0; i <= book.length - 1; i++) {
//     console.log(book[i]);
//     if (book[i].year > 1950) {
//       console.log(book[i]);
//     }
//   }
// }

// booksTitle(books);

// problem-4
// Function as a Parameter:

// Write a function that takes two parameters: an array of numbers and a function. Apply the function to each element in the array and return the modified array.
// let newArray = [];
// function modifiedValue(parm1, parm2) {
//   parm2(parm1);
// }

// const array = [2, 4, 5, 6, 7];

// modifiedValue(array, function (param) {
//   newArray.push(param);
// });
// console.log(newArray);

// problem-5
// Object Constructor:

// Create a constructor function for a 'Person' object with properties like name, age, and a method to get a greeting.
// Create instances of this object and call the greeting method.
