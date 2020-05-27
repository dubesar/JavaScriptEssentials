const Airplane = require('./1-airplane.js')

function displayAirplane() {
  console.log(Airplane.myAirplane)
}

displayAirplane()  //StarJet

/*
Taking a closer look, the pattern to import a module is:

Import the module with require() and assign it to a local variable.
Use the module and its properties within a program.

*/
