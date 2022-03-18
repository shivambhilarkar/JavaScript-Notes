//string in javascript

let str = "shivambhilarkar";

//inbuilt methods on string
// console.log(str);
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.split(""));
// console.log(str.charAt(1));
// console.log(str.substring(0, 6));

//to know if word is present in string or not
// if (str.indexOf("shivam") != -1) {
//   console.log("string contains string");
// } else {
//   console.log("string doesn't contains string");
// }

// // equal to operator
// let a = "shivam";
// let b = "shivam"; //points to the previous string location in string pool

// let c = new String("shivam"); //create new object with diff memory location
// let d = new String("shivam"); //create new object with diff memeory location

// console.log(a == b);
// console.log(c == d);

//template

let str1 = `shivam bhilarkar`; //we can use `` to declare the string in javascript
console.log(str1);

let name = `shivam`;
let sirname = `bhilarkar`;

//variable substitution in template strings..
console.log(`Welcome ${name} , ${sirname}!!!!`);

//Automatic replacing of variables with real values is called string interpolation.
