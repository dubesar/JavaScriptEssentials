<b><ul>OBJECTS</ul></b>

An object is simply a collection of properties, and a property is an association between a name( or key) and a value.
An object is a standalone entity, with properties and type.

For example: 

<i>
let fasterShip = {

  color : 'silver',
  
  'Fuel Type': 'Turbo Fuel'
  
};


</i>


<b><li>OBJECT PROPERTIES</li>
</b>

The <b>name:value</b> pairs in JavaScript objects are called properties.
In the above example, <i>color</i> is a property of fasterShip and <i>silver</i> is the property value.
The same case with <i>Fuel Type</i> and <i>Turbo Fuel</i>.

<b>Accessing Object Properties</b>

To access the properties in the object, you can either use the dot notation or square brackets.

For Example,

<i>
let spaceship = {

  'Fuel Type' : 'Turbo Fuel',
  
  'Active Mission' : true,
  
  homePlanet : 'Earth', 
  
  numCrew: 5
  
 };
 
</i>
Now, to access the numCrew property, you can use either of the 2 ways:


<i>Type 1- <b>spaceship.numCrew</b>

Type 2- <b>spaceship["numCrew"]</b>
</i>

<b><li>OBJECT METHODS</li></b>

Methods are actions that can be performed on objects. It is a function stored as a property in an object.


For example:

<i>

let alienShip =
{
  
  retreat() {
  
   console.log(retreatMessage)
  },
  
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
</i>

<b>Here, retreat and takeOff are methods(or function definitions) inside the object alienShip.</b>

You can acces the object method with the following syntax:
<i>objectName.methodName</i>.
If you access a method without (), it will return the <b>function definition</b>.

<b><li>NESTED OBJECTS</li></b>
Nested objects are the objects that are inside another object.

For Example:
<i>

let spaceship = 
{
  
  telescope: {
  
    yearBuilt: 2018,
    
    model: "91031-XLT",
    
    focalLength: 2032
    
  },
  
  crew: {
  
    captain: { 
      name: 'Sandra',
      
      degree: 'Computer Engineering',
      
      encourageTeam() { console.log('We got this!') },
      
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
     
  },
  
  engine: {
  
    model: "Nimbus2000"
    
  }
  };
  </i>
  
  Here, the parent object is spaceship which contains nested objects, being: <b><i>telescope</i></b>, <b><i>crew</i></b>, and<b><i> engine</i></b>.
  
  
  <b><li>PROPERTY ASSIGNMENT</li></b>
  
  Properties of an object can be added or deleted or modified from outside the object.
  Here's an example to demonstrate it:
  
  <i>
  let spaceship =
  {
  'Fuel Type' : 'Turbo Fuel',
  
  homePlanet : 'Earth',
  
  color: 'silver',
  
  'Secret Mission' : 'Discover life outside of Earth.'
  
};


<b>spaceship.color = 'glorious gold' </b>  //Sets value of color property as 'glorious gold'

<b>spaceship.numEngines = 2 </b>   //Creates a property numengines and assignes the value=2


<b>delete spaceship['Secret Mission']</b>   //Deletes the Secret Mission property from spaceship
</i>

<b>NOTE: </b>Objects are mutable, i.e., we can change their properties even when they are declared with 'const'.
