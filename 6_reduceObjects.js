const axios = require('axios');
// returns object

// p1
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel ',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
];

// reduce takes two parameter, callback and inital value
let total = cart.reduce(
  (acc, curr) => {
    const { amount, price } = curr;
    acc.cartTotal = acc.cartTotal + price * amount;
    acc.totalItem = acc.totalItem + amount;
    return acc;
  },
  { cartTotal: 0, totalItem: 0 }
);

console.log(total);

let { cartTotal, totalItem } = cart.reduce(
  (acc, curr) => {
    const { amount, price } = curr;
    acc.cartTotal = acc.cartTotal + price * amount;
    acc.totalItem = acc.totalItem + amount;
    return acc;
  },
  { cartTotal: 0, totalItem: 0 }
);

cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItem, cartTotal);

//p2

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetechRepos = async () => {
  const response = await axios.get(url);
  //   console.log(response.data);
  // const data = await response.json();
  const newData = response.data.reduce((total, repo) => {
    const { language } = repo;
    console.log(language);
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetechRepos();
