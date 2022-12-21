/*
/ Values and Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

// Good pracktices
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

// Bad pracktices
let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

// Data Types
let javascripIsFun = true;
console.log(javascripIsFun);

// console.log(typeof true);
console.log(typeof javascripIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascripIsFun = 'YES!';
console.log(javascripIsFun);
console.log(typeof javascripIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// let-const-var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Storozh';
console.log(lastName);

// Basic operators
// Math operators
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Vitalii';
const lastName = 'Storozh';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 1991 > currentYear - 2018);

const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;

console.log(currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// String and multiply literals
const firstName = 'Jonas';
const job = 'teacher';
const birtYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birtYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year-birtYear} year old ${job}!`
console.log(jonasNew);

console.log(`Just a regular string...`);

// Old JavaScript multiline
console.log('String with \n\
multiple \n\
lines');

// ES6 + multiline
console.log(`String
multiple
lines`);

// Taking Decisions: if / else Statements
const age = 14;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🐣`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); // coercion to number
console.log('23' + '10' + 3); // coercion to string
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);

// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(1)); //true
console.log(Boolean(undefined)); // false
console.log(Boolean({})); //true
console.log(Boolean('')); // false
console.log(Boolean('Vitalii')); //true
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

const money = 0;
if (money) {
    console.log(`Don't spend it all 😉`);
} else {
    console.log(`You should get a Job!🕵🏿‍♀️`);
}

let height=0;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}

// Equality Operators: == vs. ===

const age = '18';
if (age === 18) console.log(`You just became an adult😘 (strict)`);
if (age == 18) console.log(`You just became an adult😘 (loose)`);

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");

// Logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
};

// The switch statements
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tusday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tusday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

// Expression
3 + 4
1991
true && false && !false

// Statement
if (23 > 10) {
    const str = '23 is bigger';
}

console.log(`I'm ${2022 - 1985} years old`)


// The Conditional (Ternary) Operator

const age = 51;
// age >= 18 ? console.log('I like to drink wine 🍷') :
//     console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(`I like to drink ${drink}`);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(`I like to drink ${drink2}`);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/