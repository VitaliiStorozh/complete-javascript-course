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
*/

////////////////////////////////////////
// First-Class and Higher-Order Functions

// Functions Accepting Callback Functions
