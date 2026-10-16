// function declaration
addNum(4, 6);
function addNum(a, b) {
  console.log(`${a} + ${b}`);
}

var a;
console.log(a); // undefine

addStudents(2, 7); // ReferenceError: Cannot access 'addStudents' before initialization
const addStudents = function (student) {
  console.log(`${student} are students`);
};
