//class's in javascript

class car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  //methodes inside class ...not a function
  increase_price() {
    this.price += 50000;
  }
}

let c1 = new car("Toyota", 20000);
console.log(c1);

c1.increase_price();
console.log(c1);
