import Airplane from './airplane'

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity)
  }) 
}

displayFuelCapacity()

//--------------------------Possible Alternative below --------------------------------------

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(elements => console.log(elements.name))
}
