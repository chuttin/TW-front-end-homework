class Class {
  constructor(klass) {
    this.number = klass;
  }

  assignLeader (student) {
    if (student.klass.number === this.number) {
      this.leader = student;
    }
  }

  getDisplayName () {
    return `Class ${this.number}`
  }
}

exports["default"] = Class;
module.exports = exports["default"];
