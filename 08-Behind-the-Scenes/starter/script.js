'use strict';

/*
///////////////////////////////////////
// Scoping
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (1981 <= birthYear && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Mike';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      var millenial = true;
      const str = `Oh, you are millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3));
  }

  printAge();
  return age;
}

const firstName = 'Vitalii';
calcAge(1985);


// Hoisting and TDZ

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Vitalii';
let job = 'Engineer';
const year = 1985;

///////////////////////////////////////
// Function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log('All Products deleted!');
}


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

///////////////////////////////////
// Regular functions vs Arrow functions

// var firstName = 'Matilda';

const vitalii = {
  firstName: 'Vitalii',
  year: 1985,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
vitalii.greet();
vitalii.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
