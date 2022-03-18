//JavaScript Prototype -> usefull for creating own inbuilt functions
//Prototype is used to add properties and methods to constructore function.
//and objects inherit properties and methods from a prototype

/*
//constructor function
function Person() {
  this.name = "Jhon";
  this.age = "23";
}

//creating object
const person1 = new Person();
const person2 = new Person();

//adding property to constructor function
Person.prototype.gender = "male";

//Prototype value of Person
console.log(Person.prototype);

//inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

//adding a methode to the constructor function
Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
person1.greet(); //calling greet
person2.greet();

*/

/*
//Creating own function to check length of array.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Person);
console.log(Person.prototype);
//creating object of Person
let person = new Person("manish", 24);
console.log(person);

//creating methode to check age for Person
Person.prototype.get_age = function () {
  console.log(` ${this.name} age is ${this.age} `);
};

//creating new objects.
let person1 = new Person("shivam", 24);
console.log(person1);
person1.get_age();

*/

/*
//creating new array methode to calculate the lenth of array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log(arr.prototype); //undefined
console.log(arr.__Proto__); //undefined

//arr is Array so check for Array prototype
console.log(Array);
console.log(Array.prototype);

//create methode
Array.prototype.get_arr_length = function () {
  console.log(`array length is : ${this.length}`);
};

console.log(Array.prototype);
arr.get_arr_length();

*/

//Pollyfill for bind
//bind -> attaching...
let name = {
  firstName: "shivam",
  lastName: "bhilarkar",
};

let printName = function (hometown, salary) {
  console.log(
    `${this.firstName} ${this.lastName} in ${hometown} with ${salary}`
  );
};

let printMyName = printName.bind(name, "Maharashtra");
printMyName(30000);

Function.prototype.mybind = function (...args) {
  //this -> printName
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let printMyName2 = printName.mybind(name, "Satara");
printMyName2(20000);
