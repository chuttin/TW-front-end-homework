import Person from "./person.js";
// class Worker extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }

//   introduce() {
//     return `${super.introduce()} I am a Worker. I have a job.`;
//   }
// }

function Worker(name, age) {
  Person.call(this, name, age);
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

let basicIntroduce = Worker.prototype.introduce;
Worker.prototype.introduce = function() {
  return `${basicIntroduce.call(this)} I am a Worker. I have a job.`;
}

exports["default"] = Worker;
module.exports = exports["default"];