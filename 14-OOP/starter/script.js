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


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {};

// Class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jesica = new PersonCl('Jesica Devis', 1996);
console.log(jesica);
jesica.calcAge();
console.log(jesica.age);
jesica.greet();
PersonCl.hey();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////
// Setters and Getters

const account = {
  owner: 'Vitalii',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);
console.log(sarah);
*/
