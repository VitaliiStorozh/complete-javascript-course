// // Values and Variables
// const country = 'Ukraine';
// const continent = 'Europe';
// let population = 48000000;
// console.log(country);
// console.log(continent);
// console.log(population);

// // Data Types
// const isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // let-const-var
// language = 'Ukrainian';
// console.log(language);

// // Basic operators
// let countryPopulation = 48000000;
// const halfCountry = countryPopulation / 2;
// console.log(halfCountry);
// countryPopulation++;
// console.log(countryPopulation);
// const finlandPopulation = 6000000;
// const isMyCountryMoreFinland = countryPopulation > finlandPopulation;
// console.log(isMyCountryMoreFinland);
// const avaregeCountryPopulation = 33000000;
// const isMyCountryLessAvarege = countryPopulation < avaregeCountryPopulation;
// console.log(isMyCountryLessAvarege);
// // const description = country + ' ' + 'is in' + ' ' + continent + ', and its' + ' ' + population / 1000000 + ' ' + 'million people speak' + ' ' + language;


// // String and multiply literals

// const description = `${country} is in ${continent}, and its ${population/1000000} million people speak ${language}`
// console.log(description);

// // Taking Decisions: if / else Statements

// if (population > 55000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${(55000000-population) / 1000000} million below averagee`);
// }

// // Equality Operators: == vs. ===

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders")
// }

// // Logical Operators
// const country = 'Australia';
// const language = 'English';
// const population = 34;
// const isIsland = false;
// if (language === 'English' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`)
// } else {
//     console.log(`${country} does not meet your criteria :(`)
// }

// // The switch Statement
// const language = 'ukrainian';

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// The Conditional (Ternary) Operator

// const population = 48;
// const country = 'Ukraine'

// const populationLessMore = population > 33 ? 'above' : 'below';
// console.log(`${country}'s population is ${populationLessMore} average`);
