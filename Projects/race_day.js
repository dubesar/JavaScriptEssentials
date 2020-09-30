let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = false
let runnerAge = 21

if(runnerAge>18 && regEarly === true){
  raceNumber = 1000
}
if(runnerAge>18 && regEarly === true){
  console.log("9:30 am",raceNumber)
}
else if(runnerAge>18 && regEarly === false){
  console.log("11:00 am", raceNumber)
}
else if(runnerAge<18){
  console.log("12:30 pm",raceNumber)
}
else{
  console.log('Go to the registration desk')
}
