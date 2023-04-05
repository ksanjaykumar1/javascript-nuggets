// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// why do we need to use it ? reuces to a single value
// In callback fun 1st param 'acc' - total of all calculation
// In callback fun 2st param 'curr' - current iteration/value

const staff = [
  {
    name: 'sanjay',
    age: '23',
    position: 'dev',
    salary: 200,
  },
  {
    name: 'David',
    age: '43',
    position: 'CTO',
    salary: 24000,
  },
  {
    name: 'Jack',
    age: '12',
    position: 'founder',
    salary: 20,
  },
];
// reduce take two parameters,
// 1st callbackfunc
// 2nd currenct value , curr can be declared as employee too here
totolSalary = staff.reduce((acc, curr) => {
  acc = acc + curr.salary;
  return acc;
}, 0);
console.log(totolSalary);
