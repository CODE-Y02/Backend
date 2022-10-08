//async code and promises
/*
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done !");
    }, 1500);
  });

  return promise; // promise is return immediately before settimeout is executed
};

setTimeout(() => {
  console.log("Timer is done");

  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("hello!");
console.log("hi !");
*/
/*
What willl be the output of this

1) console.log('a');   -->  a

console.log('b');   --- > b

setTimeOut(() => console.log('c'), 3000)  ---> c after 3s

console.log('d');   --- > d

// output :- a b d c



2) console.log('a');   --> a

console.log('b');   -->  b

setTimeOut(() => console.log('c'), 3000)  c after 3s

setTimeOut(() => console.log('d'), 0)  d before c 

console.log('e');   --> e

// output :-  a b e d c

*/
//Challenge

// Can you make the above code print in the following sequence using promises and async/await. Write the code and paste it here
/*
Expected Output
a
b
c
d
e
*/

const printInSeq = async () => {
  console.log("a");
  console.log("b");

  //c  3000ms
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 3000);
  });

  const d = await new Promise((res, rej) => {
    setTimeout(() => {
      res("d");
    }, 0);
  });

  console.log(d);

  console.log("e");
};

printInSeq();
