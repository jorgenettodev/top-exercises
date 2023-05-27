const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

let sortedItemsPrice = items.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price == b.price) return 0;
    if (a.price < b.price) return -1;
});

console.table(sortedItemsPrice);
