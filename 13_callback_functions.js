// callback function is a function that we pass in as a argument in another function
// callback function is called in the body of function
// usage: array methods (ex: map, filter, find, reduce), setTimeout, event listener etc
function makeUpperCase(value) {
  console.log(value.toUpperCase());
}
function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}
function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

handleName('steven', makeUpperCase);

handleName('steven', reverseString);

handleName('susan', (value) => console.log(value));

// event listener

