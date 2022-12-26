// // Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const resultDolphins1 = calcAverage(44, 23, 71);
// const resultDolphins2 = calcAverage(85, 54, 41);
// const resultKoalas1 = calcAverage(65, 54, 49);
// const resultKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         return `Dolhins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         return `No team wins ☮️`;
//     }
// }

// console.log(checkWinner(resultDolphins1, resultKoalas1));
// console.log(checkWinner(resultDolphins2, resultKoalas2));

// // Coding Challenge #2

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// // Coding Challenge #3

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const compareBMI = mark.calcBMI() > john.calcBMI();

// console.log(`${compareBMI ? mark.firstName : john.firstName}'s BMI (${compareBMI ? mark.bmi : john.bmi}) is higher than ${compareBMI ? john.firstName : mark.firstName}'s (${compareBMI ? john.bmi : mark.bmi})!"
// `)