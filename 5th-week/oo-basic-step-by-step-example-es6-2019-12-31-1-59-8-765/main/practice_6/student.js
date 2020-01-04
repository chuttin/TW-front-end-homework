import Person from "./person.js";
class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.class = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.class}.`;
  }
}

exports["default"] = Student;
module.exports = exports["default"];