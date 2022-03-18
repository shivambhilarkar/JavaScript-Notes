//Debouncing in JavaScript..
let counter = 0;
const getData = (name) => {
  //calls an api and get data..
  console.log(`Fetchind data ${counter++}`);
};

const do_some_magic = function (getData, delay) {
  let timer;
  return function () {
    let context = this; //
    let args = arguments; //

    clearTimeout(timer);
    timer = setTimeout(() => {
      //arguments which are pass in do_some_magic function
      getData.apply(context, args);
    }, delay);
  };
};

const betterFunction = do_some_magic(getData, 300);
