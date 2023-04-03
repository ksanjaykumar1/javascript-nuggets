const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'lunch',
  },
  {
    name: 'noodles',
    category: 'dinner',
  },
  {
    name: 'toast',
    category: 'breakfast',
  },
  {
    name: 'biryani',
    category: 'lunch',
  },
  {
    name: 'bacon',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'lunch',
  },
];

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const foodItems =  [... new Set(menu.map((item)=> item.name))]
console.log(foodItems)
