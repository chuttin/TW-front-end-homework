class Class {
  constructor(klass) {
    this.number = klass;
  }

  registerJoinListener(teacher) {
    return this.listenerTeacher = teacher;
  }

  registerAssignLeaderListener(teacher) {
    return this.listenerTeacher = teacher;
  }

  appendMember(student) {
    student.klass = this;
    if (this.listenerTeacher !== undefined) {
      if (this.listenerTeacher.isTeaching(student)) {
        console.log(`I am ${this.listenerTeacher.name}. I know ${student.name} has joined ${this.getDisplayName()}.`);
      }
    }
  }

  assignLeader(student) {
    if (student.klass === this) {
      this.leader = student;
      if (this.listenerTeacher !== undefined) {
        if (this.listenerTeacher.isTeaching(student)) {
          console.log(`I am ${this.listenerTeacher.name}. I know ${student.name} become Leader of ${this.getDisplayName()}.`);
        }
      }
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

// const klass = new Class(2);
// const otherKlass = new Class(3);
// const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);

// const student = new Student(1, "Jerry", 21, otherKlass);
// klass.registerJoinListener(teacher);

// klass.appendMember(student);

exports["default"] = Class;
module.exports = exports["default"];
