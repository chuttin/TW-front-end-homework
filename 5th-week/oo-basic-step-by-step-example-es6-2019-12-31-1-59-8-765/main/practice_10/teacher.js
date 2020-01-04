import Person from "./person.js";
class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  isTeaching(student) {
    this.klasses.some(function (ele) {
      return ele === student.klass;
    });
  }

  introduce () {
    if (this.klasses === undefined || this.klasses.length === 0) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }else {
      let classes = this.klasses.map(function (ele) {
        return ele.number;
      }).join(', ');
      return `${super.introduce()} I am a Teacher. I teach Class ${classes}.`;
    }
  }

  introduceWith (student) {
    if (student.klass.number === this.klass.number) {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${student.name}.`;
    }else {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${student.name}.`;
    }
  }
}

exports["default"] = Teacher;
module.exports = exports["default"];
