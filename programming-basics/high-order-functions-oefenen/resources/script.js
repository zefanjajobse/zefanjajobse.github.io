const items = [
    { name: 'Bike',      price: 100  },
    { name: 'TV',        price: 200  },
    { name: 'Album',     price: 10   },
    { name: 'Book',      price: 5    },
    { name: 'Phone',     price: 500  },
    { name: 'Computer',  price: 1000 },
    { name: 'Keyboard',  price: 25   }
]

console.log(items);

// filter to only less than 100
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});

console.log(filteredItems);

// map, only show the item.name as string in new array
const itemNames = items.map((item) => {
    return item.name;
});

// console.log(itemNames);

// // find the item in the array
// const foundItem = item.find((item) => {
//     return item.name === 'Book';
// });

// console.log(foundItem);

// console.log every itemname in the array
items.forEach((item) => {
    console.log(item.name)
})

// // sum returns true if any item is less than 100 in item.price
// const hasInexpensiveItems = items.sum((item) => {
//     return item.price <= 100
// })

// console.log(hasInexpensiveItems)

// // every, check if all items in the array is less than 100 in item.price
// const hasOnlyInexpensiveItems = items.every((item) => {
//     return item.price <= 100
// })

// console.log(hasOnlyInexpensiveItems)

// total returns a total of all the items in the array
const total = item.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)

