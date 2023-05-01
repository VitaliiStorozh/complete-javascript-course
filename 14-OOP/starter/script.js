'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2050 - this.birthYear);
  //   };
};

const vitalii = new Person('Vitalii', 1985);
console.log(vitalii);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(vitalii instanceof Person);

const jay = 'Jay';
console.log(jay instanceof Person);
