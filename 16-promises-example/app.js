//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

// wether a promise returns a value or not ,
// the promise has to always resolve or reject inorder not be in pending

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  addColor(1000, '.first', 'red')
    .then(() => addColor(3000, '.second', 'blue'))
    .then(() => addColor(2000, '.third', 'green'))
    .catch((err) => console.log(err));
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve()
      }, time);
    } else {
      reject(`There is no such element : "${selector}"`);
    }
  });
}
