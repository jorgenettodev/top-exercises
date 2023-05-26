const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

// get all items that the price are equal or lower than 100 dollars.

let itemsBelow100 = items.filter(item => item.price <= 100);

// console.table(itemsBelow100);

// get an array with only the name of items using map()

let itemNames = items.map((item) => {
    return item.name;
})

// console.table(itemNames);

// Use Array.find() to find an item, for instance 'Bike'.

const foundBookIndex = items.findIndex(item => item.name === 'Book');

 console.log(items[foundBookIndex]);

// get the sum of all prices combined. 

let totalPrice = items.reduce((total, item) => {
    return total + item.price;
} ,0)

// console.log(totalPrice);

// remove the item 'Book'
items.splice(foundBookIndex, 1);
console.table(items);

items.forEach((item) => {
    console.log(item.name + ',' + item.price);
})