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
*/
