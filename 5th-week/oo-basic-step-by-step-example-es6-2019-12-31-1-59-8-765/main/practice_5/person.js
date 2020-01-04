//ES6

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     return `My name is ${this.name}. I am ${this.age} years old.`
//   }
// }

//ES5

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  return `My name is ${this.name}. I am ${this.age} years old.`;
}

exports["default"] = Person;
module.exports = exports["default"];
