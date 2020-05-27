/*

Let’s look at an example in menu.js.

let Menu = {};

export default Menu;
export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.
When using ES6 syntax, we use export default in place of module.exports. 
Node.js doesn’t support export default by default, so module.exports is usually used for Node.js development and ES6 syntax is used for front-end development. 
As with most ES6 features, it is common to transpile code since ES6 is not supported by all browsers.

*/

//--------------------------------------------------------------------------------------------------------------------------------------
let Airplane = {}

Airplane.availableAirplanes = []
Airplane.availableAirplanes.push({name: 'AeroJet',fuelCapacity: 800})
Airplane.availableAirplanes.push({name: 'SkyJet',fuelCapacity: 500})

export default Airplane;
