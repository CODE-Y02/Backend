//Write an arrow function which returns the product of two numbers

const mulTwoNum = (a, b) => a * b;

console.log(mulTwoNum(5, 3));

// Watch video 15 and create a student object

const student = {
  name: "xyz",
  age: 23,
  marks: 70,
  intro() {
    console.log(
      `i am ${this.name} , my age is ${this.age}, I got ${this.marks}`
    );
  },
};

student.intro();

// difference between fat arrow functions and this keyword
// this in arrow function will refer to obj of its parent scope
// where as this in normal function it refer to obj calling that function

//  ARROW FUNCTION IS USED IN CURRYING mostly
