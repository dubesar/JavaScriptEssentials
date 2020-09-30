const getSleepHours = (day) => {
  if(day === 'monday'){
    return 8
  }
  else if(day === 'tuesday'){
    return 7
  }
  else if(day === 'wednesday'){
    return 6
  }
  else if(day === 'thursday'){
    return 4
  }
  else if(day === 'friday'){
    return 8
  }
  else if(day === 'saturday'){
    return 7
  }
  else if(day === 'sunday'){
    return 7
  }
}

const getActualSleepHours = () => {
  sum = 0
  sum+=getSleepHours('monday')
  sum+=getSleepHours('tuesday')
  sum+=getSleepHours('wednesday')
  sum+=getSleepHours('thursday')
  sum+=getSleepHours('friday')
  sum+=getSleepHours('saturday')
  sum+=getSleepHours('sunday')
  return sum
}

const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours*7
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if(actualSleepHours === idealSleepHours){
    console.log('Perfect Sleep')
  }
  else if(actualSleepHours > idealSleepHours){
    console.log(`You got more sleep, with more sleep of ${actualSleepHours - idealSleepHours}`)
  }
  else{
    console.log(`Get some more sleep, and get ${idealSleepHours - actualSleepHours} more`)
  }
}
calculateSleepDebt()
console.log(getIdealSleepHours())

console.log(getSleepHours('monday'))
