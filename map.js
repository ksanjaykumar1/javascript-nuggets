// return new arrary
// doesn't change the size of the arrary
// uses values from original array when making new one

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

// option 1

let ages = people.map((person) => {
  return person.age;
});
console.log(ages);

// option 2
ages = people.map((person) => person.age);
console.log(ages);

// option 3

const getAges = (person) => person.age;

ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((person) => {
  return { firstName: person.name.toUpperCase(), oldAge: person.age + 20 };
});
console.log(newPeople);


