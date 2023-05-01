'use strict';

/*
///////////////////////////////////////
// Constructor Functions and the new Operator

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

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

vitalii.calcAge();

console.log(vitalii.__proto__);
console.log(vitalii.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(vitalii));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(vitalii.species, matilda.species);

console.log(vitalii.hasOwnProperty('firstName'));
console.log(vitalii.hasOwnProperty('species'));

console.log(vitalii.__proto__);
// Object.prototype (top of prototype chain)
console.log(vitalii.__proto__.__proto__);
console.log(vitalii.__proto__.__proto__.__proto__);

const arr = [2, 3, 5, 7, 8, 4, 2, 1]; // new Array === []
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)].sort((a, b) => a - b);
};

console.log(arr.unique());
*/
