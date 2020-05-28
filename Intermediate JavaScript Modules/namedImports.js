/*
import { specialty, isVegetarian } from './menu';

console.log(specialty);

Here specialty and isVegetarian are imported.
If we did not want to import either of these variables, we could omit them from the import statement.
We can then use these objects as in within our code. For example, we would use specialty instead of Menu.specialty.
*/

//-----------------------------------------------------------------------------------------------------------------------------

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity)
  }) 
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

displayFuelCapacity()
displayStaffStatus()
//----------------------------------------------------------------

function displayFuelCapacity() {
  availableAirplanes.forEach(elements => console.log(elements.name))
}
