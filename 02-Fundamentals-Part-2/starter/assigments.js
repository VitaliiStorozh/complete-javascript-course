'use strict';

// // Function
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const ukraine = describeCountry('Ukraine', 48, 'Kyiv');
// const canada = describeCountry('Canada', 12, 'Ottava');
// const america = describeCountry('USA', 300, 'Washington');
// console.log(ukraine);
// console.log(canada);
// console.log(america);


// // Function Declarations vs Expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

// const populationUkraine = percentageOfWorld1(48);
// const populationCanada = percentageOfWorld1(12);
// const populationUSA = percentageOfWorld1(300);

// console.log(populationUkraine, populationCanada, populationUSA);

// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }

// const populationUkraine2 = percentageOfWorld2(48);
// const populationCanada2 = percentageOfWorld2(12);
// const populationUSA2 = percentageOfWorld2(300);

// console.log(populationUkraine2, populationCanada2, populationUSA2);


// // Arrow Function
// const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld3(48));
// console.log(percentageOfWorld3(12));
// console.log(percentageOfWorld3(300));


// // Functions Calling Other Functions

// const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;

// console.log(describePopulation('China', 2000));
// console.log(describePopulation('India', 1870));
// console.log(describePopulation('Ukraine', 48));

// // Introduction to Arrays
// const populations = [2000, 1870, 48, 300];
// console.log(populations.length === 4);

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
// console.log(percentages);

// // Basic Array Operations (Methods)

// const neighbours = ['pidarusia', 'biladorusia', 'Poland', 'hungary', 'Slovakia', 'Romania'];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (neighbours.includes('Germany') === false){
//     console.log(`Probably not a central European country :D`);
// }
// const indexPoland = neighbours.indexOf('Poland');
// neighbours[indexPoland] = 'Respublic of Poland'
// console.log(neighbours);

// // Introduction to Objects
// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Kyiv',
//     language: 'ukrainian',
//     population: 48,
//     neighbours: ['pidarusia', 'biladorusia', 'Poland', 'hungary', 'Slovakia', 'Romania']
// };

// // Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// console.log(myCountry.population);
// console.log(myCountry.population += 2);
// console.log(myCountry['population'] -= 2);

// // Object Methods
// const myCountry = {
//     country: 'Ukraine',
//     capital: 'Kyiv',
//     language: 'ukrainian',
//     population: 48,
//     neighbours: ['pidarusia', 'biladorusia', 'Poland', 'hungary', 'Slovakia', 'Romania'],

//     describe: function () {
//         this.describeCountry = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//         console.log(this.describeCountry);
//         return this.describeCountry;
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours <= 0 ? true : false;
//         return this.isIsland;
//     }
// };
// myCountry.describe();
// console.log(myCountry.checkIsland());