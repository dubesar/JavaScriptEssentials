/*

export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 

The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
We no longer need an export statement at the bottom of our file, since this behavior is handled above.

*/

//---------------------------------------------------------------------------------------------------------------------------

export let availableAirplanes = []
availableAirplanes.push({name: 'AeroJet',fuelCapacity: 800,availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],maxSpeed: 1200, minSpeed: 300})
availableAirplanes.push({name: 'SkyJet',fuelCapacity: 500,availableStaff: ['pilots','flightAttendants'],maxSpeed: 800,minSpeed: 200})

export let flightRequirements = {requiredStaff: 4,requiredSpeedRange: 700}
export function meetsStaffRequirements(availableStaff,requiredStaff) {
  if(availableStaff.length >= requiredStaff){
    return true
  }
  else{
    return false
  }
}

export function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange) {
  let range = maxSpeed-minSpeed;
  if(range>requiredSpeedRange){
    return true
  }
  else{
    return false
  }
}
