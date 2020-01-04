import Person from "./person.js";

//ES6

// class Student extends Person {
//   constructor(name, age, klass) {
//     super(name, age);
//     this.class = klass;
//   }

//   introduce() {
//     return `${super.introduce()} I am a Student. I am at Class ${this.class}.`;
//   }
// }

//ES5

function Student(name, age, klass) {
  Person.call(this, name, age);
  this.class = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let basicIntroduce = Student.prototype.introduce;
 
Student.prototype.introduce = function() {
  return `${basicIntroduce.call(this)} I am a Student. I am at Class ${this.class}.`;
}

exports["default"] = Student;
module.exports = exports["default"];