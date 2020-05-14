let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'
console.log(condiments) // [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ['Mayo']
console.log(condiments) // [ 'Mayo' ]

utensils[3] = 'Spoon'
console.log(utensils) // [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
