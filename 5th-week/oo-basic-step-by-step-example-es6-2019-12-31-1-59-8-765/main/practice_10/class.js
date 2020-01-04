class Class {
  constructor(klass) {
    this.number = klass;
  }

  appendMember(student) {
    student.klass = this;
  }

  assignLeader(student) {
    if (student.klass === this) {
      this.leader = student;
    }else {
      console.log('It is not one of us.');
    }
  }

  getDisplayName () {
    return `Class ${this.number}`
  }

  isIn(student) {
    if(student.klass === this) {
      return true;
    }else {
      return false;
    }
  }
}

exports["default"] = Class;
module.exports = exports["default"];
