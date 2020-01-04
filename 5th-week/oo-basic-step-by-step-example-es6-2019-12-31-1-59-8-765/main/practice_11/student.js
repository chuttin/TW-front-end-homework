import Person from "./person.js";

class Student extends Person{
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }

  introduce () {
    if (this === this.klass.leader) {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of ${this.klass.getDisplayName()}.`
    }else {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at ${this.klass.getDisplayName()}.`;
    }
  }
}

exports["default"] = Student;
module.exports = exports["default"];

