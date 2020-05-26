class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword() {
    return Math.floor(Math.random()*10000)
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

//---------------------------------------------------------------------------------------------------------------
//Explaination 

// Let’s see how to use the static keyword to create a static method called generateName method in our Animal class:

// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   static generateName() {
//     const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
//     const randomNumber = Math.floor(Math.random()*5);
//     return names[randomNumber];
//   }
// } 
// In the example above, we create a static method called .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

// We call the .generateName() method with the following syntax:

// console.log(Animal.generateName()); // returns a name
// You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).

// const tyson = new Animal('Tyson'); 
// tyson.generateName(); // TypeError
// The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).
