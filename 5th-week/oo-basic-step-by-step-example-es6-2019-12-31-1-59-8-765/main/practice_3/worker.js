import Person from "./person.js";
// class Worker extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }

//   introduce() {
//     return `I am a Worker. I have a job.`;
//   }
// }
function Worker(name, age) {
  Person.call(this, name, age);
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.introduce = function() {
  return `I am a Worker. I have a job.`;
}

exports["default"] = Worker;
module.exports = exports["default"];
