class Class {
  constructor(klass) {
    this.number = klass;
  }

  appendMember(student) {
    student.klass = this;
  }

  assignLeader(student) {
    if (student.klass.number === this.number) {
      this.leader = student;
    }else {
      console.log('It is not one of us.');
    }
  }

  getDisplayName () {
    return `Class ${this.number}`
  }
}

exports["default"] = Class;
module.exports = exports["default"];