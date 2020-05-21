const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){                  //set method
    if(typeof num === 'number' && num>=0){
      this._numOfSensors = num
    }
    else{
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};

robot.numOfSensors = 100   //reassigning the numOfSensors using setter method
console.log(robot.numOfSensors) //100 Setter method worked
