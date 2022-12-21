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
