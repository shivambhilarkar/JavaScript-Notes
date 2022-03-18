//arrays in javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(arr);
//for loop
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

//for Each loop
arr.forEach((ele) => {
  //   console.log(typeof ele);
});

//for In loop
for (let i in arr) {
  //   console.log(typeof i);
}

arr.sort(); // to sort the array

//custom function to sort the array
// (Custom comparator for array)

arr.sort((a, b) => a - b); //to sort the array increasing
console.log(arr);

arr.sort((a, b) => b - a); //to sort the array decreasing
console.log(arr);

//sorting object array with custom sort function
let car = [
  { Name: "Maruti", Price: 100000, Year: 2000 },
  { Name: "Toyota", Price: 200000, Year: 2005 },
  { Name: "Honda", Price: 300000, Year: 2008 },
  { Name: "BMW", Price: 500000, Year: 2010 },
  { Name: "Omni", Price: 50000, Year: 1999 },
];

console.log(car);

//sort array on basis of price
car.sort((a, b) => a.Price - b.Price); //increasing...
console.log(car);

//sort on basis of year
car.sort((a, b) => a.Year - b.Year); //increasing...
console.log(car);
