class Class {
  constructor(klass) {
    this.number = klass;
  }

  getDisplayName () {
    return `Class ${this.number}`
  }
}

exports["default"] = Class;
module.exports = exports["default"];