// how to add object keys dynamically using square bracket notation

const person = {
  name: 'john',
};
console.log(person.name);

//option 1
const status = 'loading';
const app = {
  [status]: 'true',
};
console.log(app);

// option 2
const key = 'loginUserType';
app[key] = 'vendor';

console.log(app);

// example

const state = {
  loading: true,
  name: '',
  job: '',
};
console.log(state);

const updateSate = (key, value) => {
  state[key] = value;
};

updateSate('name', 'sanjay');
updateSate('age', 25);
console.log(state);
