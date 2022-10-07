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
