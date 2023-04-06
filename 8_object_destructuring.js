// faster and easier way to access/unpack variables from arrays, objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};
const { first, city } = bob;
console.log(first, city);
const { sister } = bob.siblings;
console.log(sister);

// giving a alias to a property
// here we have given alias to property called "last" to be refered as lastName
const { last: lastName } = bob;
console.log(lastName);

const {
  siblings: { sister: favouriteSibling },
} = bob;
console.log(favouriteSibling);

// Normal
function printPerson(person) {
  console.log(person.first);
}

printPerson(bob);

// destructuring in function body
function printPersonD(person) {
  const {
    first,
    last,
    siblings: { sister },
  } = person;
  console.log(first);
  console.log(sister);
}
printPersonD(bob);

// destructuring in function parameter
function printPersonD1({ first, last, siblings: { sister } }) {
  console.log(first, sister);
}

printPersonD1(bob);
