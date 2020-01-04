import Person from "./person.js";
// class Student extends Person {
//   constructor(name, age, klass) {
//     super(name, age);
//     this.class = klass;
//   }

//   introduce() {
//     return `I am a Student. I am at Class ${this.class}.`;
//   }
// }

function Student(name, age, klass) {
  Person.call(this, name, age);
  this.class = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function() {
  return `I am a Student. I am at Class ${this.class}.`;
}

exports["default"] = Student;
module.exports = exports["default"];
