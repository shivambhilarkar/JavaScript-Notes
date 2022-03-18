//Higher order functions -> functions which takes one or more functions as inpute or return the function as result
//is call higher order functions
// 1. filter   2. map   3.Reduce.

//1 .filter -> Remove element that don't satisfy conditions.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let evenNumber = (arr) => {
  return arr.filter((num) => num % 2 == 0); //using fillter method to get even numbers
};

console.log(evenNumber(arr));

//another type
let even = arr.filter((num) => num % 2 != 0); //filter methode to get odd numbers
console.log(even);

//2. Map -> Executer functions on each element of an array.

const arr2 = [1, 2, 3, 4, 5];

let mul2 = arr2.map((num) => num * 2); //map methode to change every element of array to n*2
console.log(mul2);

//3. Reduce -> create single value resulte from element of array
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//all elements will be added to sum variable and return the result.
let sumArr = arr3.reduce((num, sum) => {
  return num + sum;
});
console.log(sumArr);
