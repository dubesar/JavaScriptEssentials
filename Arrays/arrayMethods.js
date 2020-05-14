const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()  // remove the first item in the array
console.log(groceryList)  

groceryList.unshift('popcorn') // adds popcorn to the start of the array
console.log(groceryList)

console.log(groceryList.slice(1,4)) // Slices the array from the starting index to ending one with the ending not included

console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)
