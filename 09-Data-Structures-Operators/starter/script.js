'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(
    `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
      '_',
      ' '
    )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
      ':',
      'h'
    )})`.padStart(44)
  );
}

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${address} at ${time}.`
    );
  },

  orderPasts(ing1, ing2, ing3) {
    console.log(
      `You ordered delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(...otherIngridients);
  },
};

/*
//////////////////////////////////////
// Strings - Part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Vitalii Storozh'.split(' '));

const [firstName, lastName] = 'Vitalii Storozh'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

capitalizeName('jesica ann smith davis');
capitalizeName('vitalii storozh');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(40, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(2334376492837283521));
console.log(maskCreditCard('498564948903749837'));

// Repeat
const message2 = 'Bad weather... All Departure Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(10);


//////////////////////////////////////
// Strings - Part 2
const airlines = 'TAP Air Portugal';

console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

// Fix capitalization in names
const passengerName = 'vItALiI'; //Vitalii
const passengerLower = passengerName.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const emails = 'hello@vitalii.io';
const loginEmail = '  Hello@Vitalii.IO  \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const checkEmail = (originEmail, estimatedEmail) =>
  originEmail === estimatedEmail;

console.log(checkEmail(emails, normalizedEmail));

// replacing

const priceGB = '234,45§';
const priceUS = priceGB.replace('§', '$').replace(',', '.');
console.log(priceUS);

const announcment = 'All passenger come to boarding door 23. Boarding door 23!';

// console.log(announcment.replace('door', 'gate'));
console.log(announcment.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb '));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a Laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protections');

/*
//////////////////////////////////////
// Strings - Part 1
const airlines = 'TAP Air Portugal';
const plane = 'A320';
const random = [2, 3, 5, 32, 1, 56, 43];

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737');

console.log(airlines.length);
console.log('B737 '.length);

console.log(airlines.indexOf('r'));
console.log(airlines.lastIndexOf('r'));
console.log(airlines.indexOf('Portugal'));

console.log(airlines.slice(4));
console.log(airlines.slice(4, 7));

console.log(airlines.slice(0, airlines.indexOf(' ')));
console.log(airlines.slice(airlines.lastIndexOf(' ') + 1));

console.log(airlines.slice(0, airlines.indexOf(' ')));
console.log(airlines.slice(1, -1));

const checkMidleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  return s === 'B' || s === 'E'
    ? 'you got the middle seat'
    : "you didn't got the middle seat";
};

console.log(checkMidleSeat('23B'));
console.log(checkMidleSeat('2C'));
console.log(checkMidleSeat('44E'));


//////////////////////////////////////
// Maps: Iterations
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

//////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Firenze, Italia');
console.log(rest.set(2, 'Lisabon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are close :(');

console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get('name'));

const time = 9;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);


//////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rizotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Vitalii'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Rizotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);


//////////////////////////////////////
// Looping objects

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are opened ${properties.length} days in week: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we are open from ${open} to ${close}`);
}

//////////////////////////////////////
// Optional chaining (?.)

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we are opening at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 2) ?? "The method doesn't exist");
console.log(restaurant.orderSushi?.(0, 2) ?? "The method doesn't exist");

// Arrays
// const user = [
//   {
//     name: 'Vitalii',
//     age: 30,
//     job: 'engeenir',
//   },
// ];
const user = [];
console.log(user[0]?.name ?? 'Array is empty');

//////////////////////////////////////
// Looping array: The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);


//////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giorgio Lambruko',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMUS>';
// rest2.owner = rest2.owner && '<ANONYMUS>';
rest1.owner &&= '<ANONYMUS>';
rest2.owner &&= '<ANONYMUS>';

console.log(rest1);
console.log(rest2);

/*
//////////////////////////////////////
// The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null or undefined (NOT 0 or "")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


//////////////////////////////////////
// Short circuiting (|| and &&)

// Use ANY data type, return ANY data type, short-circuting
console.log('--- OR ---');

console.log(3 || 'Vitalii');
console.log('' || 'Vitalii');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--- AND ---');
console.log(3 && 'Vitalii');
console.log(0 && 'Vitalii');

console.log('Hello' && 23 && null && 'Vitalii');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('meat', 'blue cheese', 'tomato');
}
restaurant.orderPizza && restaurant.orderPizza('meat', 'blue cheese', 'tomato');

//////////////////////////////////////
// REST pattern and parameters

// 1) Destructuring

// SPRED, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  return sum;
};

add(2, 4);
add(3, 4, 5, 6, 7, 8, 9);
add(8, 9, 5, 4, 3, 2, 5, 6, 7, 8);

const x = [23, 4, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'avokado', 'cheese', 'becon');

restaurant.orderPizza('mushrooms');


//////////////////////////////////////
// The spred operator (...)
const arr = [7, 8, 9];
const bedNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(bedNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Cunooki'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Vitalii';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real-world example
const ingridients = [
  // prompt("Let's make pasta! Ingridient 1?"),
  // prompt('Ingridient 2?'),
  // prompt('Ingridient 3?'),
];
restaurant.orderPasts(...ingridients);

// Objects
const newRestaurant = {
  foundedIn: 1991,
  ...restaurant,
  founder: 'Jiovany Bertucco',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Pizza Plazza';
console.log(restaurant.name, restaurantCopy.name);


//////////////////////////////////////
// Destructuring objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Pedro, 23',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: 'Via Del Pedro, 23' });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 99;
let b = 111;
const obj = { a: 12, b: 77, c: 43 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/////////////////////////////////////
// Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Recive 2 return values
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [1, 2, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
