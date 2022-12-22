'use strict';

/*
// Strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive 🚗')

// const interface = 'Audio';
// const private = 345;

// Function

function logger() {
    console.log('My name is Vitalii');
}

// calling / running / invoking function
logger(23);
logger();
logger();

function foodProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const fruitJuice = foodProcessor(2, 3);
console.log(fruitJuice);

const orangeJuice = foodProcessor(0, 5);
console.log(orangeJuice);

const num = Number('23');

// Function Declarations vs Expressions

// Function Declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1995);

console.log(age1, age2);


// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years👴🏿`
}

console.log(yearsUntilRetirement(1985, 'Vitalii'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function foodProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(foodProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const retirement = function (age) {
    return 65 - age;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retire = retirement(age);
    if (retire > 0) {
        console.log(`${firstName} retires in ${retire} years`);
        return retire;
    } else {
        console.log(`${firstName} has already retired👴🏿`)
        return -1;
    }
}

yearsUntilRetirement(1985, 'Vitalii');
yearsUntilRetirement(1945, 'Vitalii');


// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1992, 1567, 2001, 2022);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Vitalii';
const vitalii = [firstName, 'Storozh', 2022 - 1985, 'engineer', friends];
console.log(vitalii);
console.log(vitalii.length);

// Exercise

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1992, 2008, 1985, 2002, 2022];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

