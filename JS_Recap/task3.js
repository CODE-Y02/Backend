// Understand array.map watching the code
const arr = ["xyz", "abc", "java", "py"];
// const arr does not store arry but its address
// we can still modify array
arr.push("js");
//even element is changed or arry is modified but address of array is still same
console.log(arr);

// map method --> dont modify array but return new array
let oldArr = [1, 2, 3, 4];

let newArr = oldArr.map((eachitem) => eachitem * 2);

// console.log(newArr);
// console.log(oldArr);

//Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango',  'empty string', 'lemon] using array maps
let array = ["apple", "oranges", " ", "mango", " ", "lemon"];

// using map

// array = array.map((s) => {
//   if (s == " ") s = "empty string";
//   return s;
// });
// console.log(array);

// using for loop
for (let i = 0; i < array.length; i++) {
  if (array[i] == " ") array[i] = "empty string";
}

console.log(array);

//How is hobbies const and it still doesnt error out when we add new elements to the array as in the video.
// if we assign const variable refrence data type like list arrays or objects it refer to its memory location
// as refernce type is collection of other data type even if we add remove or modify whole array its memoey location is still same
// therefore we can still editreference data type assigned to const
//ex -- > const a = 2 ; daya type -- > Number
//ex-- >  const arr = [] ; in memory arr = ABCDEF11 --> hexa decimal memory address

// What according to you is spread opertor. Does spread operator create a new object or point to the same old object?
// spread operator is used to open up array or  object
// It is mainly used to copy array and object
// its also used where we dont know no of elements in array or obj

// spread operator creates new obj

// What is rest operator.
//--> opposite of spread is  rest its used whwre we expect array or obj but we dont know its size mainly array

/*
// 1
const obj1 = { key1: 1 };

const obj2 = { ...obj1 };
// copied

// if codition check memory add as obj1 and obj 2 have different address there fore its treated as different obj
if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects");  --> output --> different objects
}


// 2 
const obj1 = { key1: 1, key2: 2 };

const obj2 = { ...obj1, key1: 1000 };

console.log(obj1); // -->  { key1: 1, key2: 2 }

console.log(obj2); // -->  { key1: 1000 , key2: 2}
*/
