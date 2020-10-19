let array = []
let newArray = []

for (let i = 0; i <= 10; i++) {
    array.push(Math.floor(Math.random()*100))
}

// unsorted
console.log(`unsorted: ${array}`)

while (array.length != 0) {
    let biggest = 0
    let current = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= biggest) {
            biggest = element
            current = i
        }
    }
    array.splice(current,1)
    newArray.push(biggest)
}

// sorted
console.log(`sorted: ${newArray}`)