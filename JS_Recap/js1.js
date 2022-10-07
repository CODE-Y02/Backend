let name = "yatharth";
// console.log(name);

let age = 24;
const hasHobbies = true;

age = 23;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies : " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
