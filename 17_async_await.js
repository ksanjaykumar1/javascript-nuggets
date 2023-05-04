// async await allows us to write async code in synchronous  way

// async function always returns a promise
const example = async () => {
  return 'hello world';
};

async function func() {
  const result = await example();
  console.log(result);
  console.log('hello from func');
}

func();
const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
];

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
];

// chaining dot then
getUser('susan')
  .then((user) => {
    return getArticles(user.id);
  })
  .then((articles) => console.log(articles))
  .catch((err) => console.log(err));

// async await

const getData = async (userName) => {
  try {
    const user = await getUser(userName);
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
getData('john');
getData('johny');


function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve();
    } else {
      return reject(`No such ususerer with name : ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((article) => article.userId === userId);

    if (userArticles) {
      //   console.log(userArticles);
      return resolve(userArticles);
    } else {
      return reject(`The user with ${userId} doesn't contain any articles`);
    }
  });
}
