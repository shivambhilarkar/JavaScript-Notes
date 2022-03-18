console.log("Hello world");

//Normal function -->
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 5));

//arrow function -->
const fun = (a, b) => {
  return a + b;
};
console.log(fun(15, 16));

//call back function
function sum2(a, b) {
  const mul = () => {
    return b * b;
  };
  return a + mul();
}
console.log(sum2(2, 5));
