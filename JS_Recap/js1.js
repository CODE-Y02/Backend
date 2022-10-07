// const name = "yatharth";
// // console.log(name);

// let age = 24;
// const hasHobbies = true;
// // name = "code_y";   --> type error cannot reassign to const
// age = 23;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies : " +
//     userHasHobby
//   );
// };

// // const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
// const addRandom = () => 1 + 4;
// // console.log(add(1, 2));
// console.log(addOne(7));
// console.log(addRandom());

// console.log(summarizeUser(name, age, hasHobbies));

// Objects
const person = {
  name: "yatharth",
  age: 24,
  //this refer to global obj in arrrow fun therefore sol 1 is using function
  greet: function () {
    console.log("hi, i am " + this.name);
  },
};

console.log(person);
person.greet();
