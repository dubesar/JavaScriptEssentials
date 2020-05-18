const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue) => {
  console.log('The value of accumulator: ', accumulator) //accumulator means the prev val like when accumulator is 1, currentValue is 3 and the sum adds to accumulator
  console.log('The value of currentValue: ', currentValue)
  return currentValue+accumulator
},10)  // here 10 becomes the start and is stored in the accumulator

console.log(newSum)
