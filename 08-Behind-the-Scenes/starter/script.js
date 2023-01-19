'use strict';

// Scoping
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (1981 <= birthYear && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Mike';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      var millenial = true;
      const str = `Oh, you are millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3));
  }

  printAge();
  return age;
}

const firstName = 'Vitalii';
calcAge(1985);
