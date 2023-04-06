// faster and easier way to access/unpack variables from arrays, objects

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [john, peter, bob, anna, kelly] = friends;
console.log(john);

//  accessing item on index 0,2,4
const [name1, , name3, , name5] = friends;
console.log(name1, name3, name5);

// swaping vairable using array destructuring
let first ='bob';
let second = 'john';


[second, first] = [first, second];

console.log(first, second)
