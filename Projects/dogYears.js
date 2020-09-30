//Setting my age to myAge
let myAge = 21

//Setting the earlyYears to 2
let earlyYears = 2

earlyYears*=10.5
//Since already taken 2 years in account
let laterYears = myAge - 2

//Dog Years accounted by later years
laterYears*=4

console.log(earlyYears,laterYears)

//my total dog years
let myAgeInDogYears = earlyYears + laterYears

let myName ='Sarvesh'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)
