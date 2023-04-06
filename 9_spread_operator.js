// Spread operator
// Allows and iterable to spread/expand individually inside reciever
//  split into single items and COPY them

// spread copies values , whereas when you declare new variable and assign it the variable containing values, the new variable refers to the values, when the new variable changes the value then old variable too holds the updated values
const udemy = 'udemy';

const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
const friends1 = [...boys, bestFriend, ...girls];

// reference demo
// in the following 4 line , when newFriends is updated then friends is update too
const newFriends = friends;
newFriends[0] = 'nancy';
console.log(newFriends);
console.log(friends);

// how spread operator prevents changing the referenced value
// when newFriends1 is updated then it doesn't effect newFriends1
const newFriends1 = [...friends1];
newFriends1[0] = 'nancy';
console.log(newFriends1);
console.log(friends1);

// spread operator on object from ES2018 - ES8 Objects
const person = { name: 'john', job: 'dev' };
const newPerson = { ...person, last: 'cena', job: 'SDE1' };
console.log(newPerson);
console.log(person);
