//  DESTRUCTURING

const person = {
  name: "xyz",
  age: 24,
  greet() {
    console.log("hi, i am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

//   { keys name}  = obj ;
const { age, name } = person;
console.log(name, age);

//array destructuring

const lang = ["solana", "rust", "JS", "Python"];

// [any name but in sequense] = array ;
const [lang1, lang2] = lang;
console.log(lang1, lang2);

// TASk 3

/*  What does destructuring do exactly. When would you use it
its used to get multiple value and save it in variabls from array and object 

when we want to extract some data from obj or array and save it on variable;
ex->  
const lang = ["solana", "rust", "JS", "Python"];

// [any name but in sequense] = array ;
const [lang1, lang2] = lang;
console.log(lang1, lang2);

//   { keys name}  = obj ;
const { age, name } = person;


What will be the output of the following?

1) const obj1 = { key1: 1, key2: 2, key3: 1000 };

const { key1, key3 } = { ...obj1 };
//     1      1000        new obj from obj1

console.log(key1, key3);  -->  1 1000



2) const arr1 = ['value1', 'value2']
	const [ val1, val2 ] = arr1

	console.log(val1) --> "value1"

	console.log(val2) --> "value2"


3) const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
	let { key1, key3}  = obj1
    // destructuring is shortcut of value assignment
    ex-> let key1 = obj.key1  // we are storing value not refernce 	

	key1 = 20; 
	key3 = 123
    //therefore above assignment of value has nothing to do with object they are just variables

	console.log(obj1.key1, obj1.key3) --> 1 1000
 
*/
