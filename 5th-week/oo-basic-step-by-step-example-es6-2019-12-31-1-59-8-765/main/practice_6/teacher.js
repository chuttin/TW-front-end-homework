import Person from "./person.js";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.class = klass;
  }

  introduce() {
    if (this.class === undefined) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }else {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.class}.`;
    }
  }
}

exports["default"] = Teacher;
module.exports = exports["default"];