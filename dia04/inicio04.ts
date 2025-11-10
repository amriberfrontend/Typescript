const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananans', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'oranges', quantity: 7}
]

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

function filterQuantity(fruit) {
    return fruit.quantity > 2;
}

const cherries = inventory.find(e => e.name === 'cherries');
const fruitsByQuantity = inventory.filter(function(fruit) {
    return fruit.quantity >2;
});

console.log(cherries);

for (const fruit of fruitsByQuantity) {
    console.log(fruit.name);
}