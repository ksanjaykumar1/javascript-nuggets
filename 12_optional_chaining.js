/*
The optional chaining (?.) operator accesses an object's property or calls a function.
If the object accessed or function called using this operator is undefined or null, 
the expression short circuits and evaluates to undefined instead of throwing an error.

Offers more straightforward syntax for working with deeply nested properties
 */

const people = [
  {
    name: 'bob',
    location: { street: '123 main street', timezone: { offset: '+7:00' } },
  },
  { name: 'peter', location: { street: '123 Pine street' } },
  {
    name: 'susan',
    location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
  },
];

people.forEach((person) => {
//   console.log(person.name);
  //   throws error because offset is missing in the second object
  //   console.log(person.location.timezone.offset);
  // overcoming the above error using and operator
//   console.log(
//     person.location &&
//       person.location.timezone &&
//       person.location.timezone.offset
//   );

  // chaining offers better syntax
  // it first checks person and then if exits it checks location and if it exits then timezone ... and the logic follows
  console.log(person?.location?.timezone?.offset);

  //
});
