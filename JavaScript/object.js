const student = {
  name: "Ali",
  age: 22,
  degree: "BSCS",
};
console.log(student);
student.name = "Alliya";
console.log(student);
Object.freeze(student);
student.name = "AbduAllah";
console.log(student);
