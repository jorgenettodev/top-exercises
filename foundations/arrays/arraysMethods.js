const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

// get all items that the price are equal or lower than 100 dolars.

let itemsBelow100 = items.filter(item => item.price <= 100);

console.table(itemsBelow100);

// get an array with only the name of items

let itemNames = items.map((item) => {
    return item.name;
})

console.table(itemNames);
