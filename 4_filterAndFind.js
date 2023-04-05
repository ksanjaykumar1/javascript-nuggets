// Filter - returns a new array, can manipulate the size of new array (unlike map), return based on the condition
// find - returns single instance (object), returns first match, if no match- undefined
// if nothing matched you will get empty array in filter and 'undefined' in find
const people = [
  {
    name: 'sanjay',
    age: '23',
    position: 'dev',
  },
  {
    name: 'David',
    age: '43',
    position: 'CTO',
  },
  {
    name: 'Jack',
    age: '12',
    position: 'founder',
  },
];
const fruits = ['apple', 'lemon', 'orange', 'melon'];
// filter
const youngPeople = people.filter((person) => person.age <= 25);
console.log(youngPeople);

const youngPeople1 = people.filter((person) => {
  if (person.age <= 25) return true;
});
console.log(youngPeople1);

// matching aaray is returned by array destructuring doesn't work
const youngPeople2 = people.filter((person) => {
  if (person.age <= 25) return { name: person.name };
});
console.log(youngPeople2);

const dev = people.filter((person) => person.position === 'dev');
console.log(dev);
// no match
const sd2 = people.filter((person) => person.position === 'sd2');
console.log(sd2);

// find

const sanjay = people.find((person) => person.name === 'sanjay');
console.log(sanjay);

// no match
const peter = people.find((person) => person.name === 'peter');
console.log(peter); // O/P undefined

const banana = fruits.find((fruit) => fruit === 'banana');
console.log(banana);

// match exits for this
const apple = fruits.find((fruit) => fruit === 'apple');
console.log(apple);

// mulitple match

const older = people.find((person) => person.age > 20);
console.log(older); // the first match is returned
