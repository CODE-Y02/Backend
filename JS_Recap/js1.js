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
  //this refer to global obj in arrrow fun therefore sol  2 is making fun method
  greet() {
    console.log("hi, i am " + this.name);
  },
};

console.log(person);
person.greet();

// array methods

const hobbies = ["gaming", "singing"];
//for of
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//map --> dont modify new arry but return new array
// console.log(hobbies.map((hobby) => "hobby : " + hobby));
// console.log(hobbies);

// hobbies.push("coading");
// console.log(hobbies);
//immutability --> we always follow copy then edit in ref data type to avoid unnecessary errors

// ways to copy array
// const copiedArr = hobbies.slice();
const copiedArr = [...hobbies]; // spread operator
console.log(copiedArr);
