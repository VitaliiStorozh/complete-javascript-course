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


// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Appends new elements to the end of an array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Inserts new elements at the start of an array
friends.unshift('John');
console.log(friends);

// Removes the last element from an array and returns it
friends.pop();
const newEnemy = friends.pop();
console.log(friends);
console.log(newEnemy);

// Removes the first element from an array
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Boby'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Boby'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Michael')) {
    console.log(`Hello, friend Michael!`);
} else {
    console.log(`Entrance forbiden!`);
}


// Introduction to Objects

const vitaliiArray = [
    'Vitalii',
    'Storozh',
    2022 - 1985,
    'engineer',
    ['Michael', 'Oleksandr', 'Evgeniy']
];

const vitalii = {
    firstName: 'Vitalii',
    lastName: 'Storozh',
    age: 2022 - 1985,
    job: 'engineer',
    friends: ['Michael', 'Oleksandr', 'Evgeniy']
};


// Dot vs. Bracket Notation
const vitalii = {
    firstName: 'Vitalii',
    lastName: 'Storozh',
    age: 2022 - 1985,
    job: 'engineer',
    friends: ['Michael', 'Oleksandr', 'Evgeniy']
};
console.log(vitalii);

// Dot Notation
console.log(vitalii.lastName);
// Bracket Notation
console.log(vitalii['lastName']);

const keyName = 'Name';
console.log(vitalii['first' + keyName]);
console.log(vitalii['last' + keyName]);

const interestedIn = prompt('What do you want to know about Vitalii? Choose between firstName, lastName, age, job and friends');

if (vitalii[interestedIn]) {
    console.log(vitalii[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

vitalii.location = 'Ukraine';
vitalii['twitter'] = '@vitaliistorozh';
console.log(vitalii);

//Challenge
console.log(`${vitalii.firstName} has ${vitalii.friends.length} friends and his best friend is called ${vitalii.friends[vitalii.friends.length - 1]}`);


// Object Methods
const vitalii = {
    firstName: 'Vitalii',
    lastName: 'Storozh',
    birthYear: 1985,
    job: 'engineer',
    friends: ['Michael', 'Oleksandr', 'Evgeniy'],
    hasDriverLicense: true,

    // calcAge: birthYear => 2022 - birthYear

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.vitaliiSummary = `${this.firstName} ${this.lastName} is ${this.calcAge()}-years old ${this.job}. He ${this.hasDriverLicense ? 'has': "hasn't"} driver's License. His best friend is ${ this.friends[this.friends.length - 1] }.`;
        return this.vitaliiSummary;
    }
};

console.log(vitalii.calcAge());
// console.log(vitalii['calcAge'](1985));
console.log(vitalii.age);
console.log(vitalii.getSummary());
*/