import Person from "./person.js";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce () {
    if (this.klass === undefined) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }else {
      return `${super.introduce()} I am a Teacher. I teach ${this.klass.getDisplayName()}.`;
    }
  }

  introduceWith (student) {
    if (student.klass.number === this.klass.number) {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${student.name}.`
    }else {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${student.name}.`
    }
  }
}

exports["default"] = Teacher;
module.exports = exports["default"];
