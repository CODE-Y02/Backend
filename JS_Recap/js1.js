const name = "yatharth";
// console.log(name);

let age = 24;
const hasHobbies = true;
// name = "code_y";   --> type error cannot reassign to const
age = 23;

const summarizeUser = function (userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies : " +
    userHasHobby
  );
};

console.log(summarizeUser(name, age, hasHobbies));
