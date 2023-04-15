// Promises

// Promise states can be Pending, Rejected, Fulfilled
const value = 2;
const promise = new Promise((resolve, reject) => {
  const randomValue = Math.floor(Math.random() * 3);
  console.log(randomValue);
  if (randomValue === value) {
    resolve('U guessed it correct');
  } else {
    reject('Incorrect guess');
  }
  //   resolve('hello world');
  //   reject('There is a Error')
});
promise.then((data) => console.log(data)).catch((err) => console.log(err));
