import Person from "./person.js";

class Student extends Person{
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce () {
    return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at ${this.klass.getDisplayName()}.`;
  }
}

exports["default"] = Student;
module.exports = exports["default"];

