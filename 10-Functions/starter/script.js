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
*/
