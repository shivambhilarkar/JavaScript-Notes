//objects in javascript

let car = {
  Name: "Maruti",
  Price: "2000000",
  color: "white",
};

// console.log(car);
// console.log(typeof car);
// console.log("Name of Car is ", car.Name);
console.log(this);

let cars = [
  {
    Name: "Maruti",
    Price: "2000000",
    color: "white",
  },
  {
    Name: "Toyota",
    Price: "2100000",
    color: "white",
  },
  {
    Name: "BMW",
    Price: "20000000",
    color: "white",
  },
];

console.log(cars);
console.log(typeof cars);

//forEach loop apply directly on variable
cars.forEach((carr) => {
  console.log(carr.Name);
});

//convert variable into array then apply the forEach loop on it...
Array.from(cars).forEach((carr) => {
  console.log(carr.Price);
});
