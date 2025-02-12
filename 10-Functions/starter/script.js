'use strict';

/*
////////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 199
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);


////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const vitalii = {
  name: 'Vitalii Storozh',
  passport: 239845793846702,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 239845793846702) {
    alert('Checked in!');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, vitalii);
// console.log(flight);
// console.log(vitalii);

// Is the same as doing...
// const flightNum = flight; // Primitive
// const passenger = vitalii; // Reference

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(vitalii);
checkIn(flight, vitalii);


////////////////////////////////////////
// First-Class and Higher-Order Functions

// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original text: ${str}`);
  console.log(`Transformed text: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the Best language!', upperFirstWord);
console.log('-------------------------------');
transformer('JavaScript is the Best language!', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('🤙🏻');
};
document.body.addEventListener('click', high5);
['Jonas', 'Albert', 'Marta'].forEach(high5);


////////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Vitalii');
greeterHey('Kate');

greet('Good Morning')('Vijay');
greetArr('Hello')('Vitalii');


////////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(238, 'Vitalii Storozh');
lufthansa.book(645, 'Devid Bolduin');

console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(425, 'Sarah Whiliams');

// Call method
book.call(eurowings, 23, 'Sarah Wiliams');
console.log(eurowings);

book.call(lufthansa, 238, 'Marry Cooper');
console.log(lufthansa.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 567, 'Marry Cooper');
console.log(swiss.bookings);

// Apply method
const flightData = [342, 'John Lenon'];
book.apply(swiss, flightData); // Do not used in modern JS

book.call(swiss, ...flightData);
console.log(swiss.bookings);

// The bind Method
// book.call(eurowings, 23, 'Sarah Wiliams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steve Lee');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Natan Grushka');
bookEW23('Maria Terezia');

// With Event Listeners
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.plane++;
  console.log(this.plane);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(400));

const adddTax = rate => value => value + value * rate;
const addVAT2 = adddTax(0.15);
console.log(adddTax(0.12)(100));
console.log(addVAT2(100));


////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This will never run again!');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again!');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again!'))();

{
  var isNotPrivate = 34;
  const isPrivate = 46;
}

console.log(isNotPrivate);
// console.log(isPrivate);


////////////////////////////////////////
// CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);


////////////////////////////////////////
// More CLOSURE examples

// Examples 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

h();
f();

// Examples 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/
