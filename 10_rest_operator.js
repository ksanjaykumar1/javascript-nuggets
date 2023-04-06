// Rest Operator ...
// gather/collects items
/*following use cases are
1. destructuring, functions
*/
//  placement important, careful with the same name
// rest when declare function, spread when invoke the function

// array
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { name, ...rest } = person;
console.log(name, rest);
const { job, ...rest1 } = person;
console.log(job, rest1);

// DOESN'T WORK, rest should be last element
// const {...rest3, lastName} = person
// console.log(rest3, lastName);

// function
// ...scores, here rest operator is used, spread is used in declaration
const getAvg = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const avg =
    scores.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0) / scores.length;
  console.log(avg);
};

getAvg(person.name, 20, 25, 30, 40);

const testScores = [23, 45, 57, 89];
// ...testScores  here spread operator is used
getAvg(person.name, ...testScores);
