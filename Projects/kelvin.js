//Declaring the constant kelvin variable
const kelvin = 273
//Getting the celsius variable 
const celsius = kelvin - 273
//Getting the fahrenheit using the celsius and converting it to floor
const fahrenheit = Math.floor(celsius*(9/5)+32)


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
