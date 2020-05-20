let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj => {
  obj.disabled = true
}

greenEnergy(spaceship)
console.log(spaceship)  //{ 'Fuel Type': 'avocado oil', homePlanet: 'Earth' }
remotelyDisable(spaceship)
console.log(spaceship) // { 'Fuel Type': 'avocado oil',homePlanet: 'Earth'disabled: true }
