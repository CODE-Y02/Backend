//async code and promises

const fetchData = (callBack) => {
  setTimeout(() => {
    callBack("Done !");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done");

  //fetchdata expect function as arg
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

console.log("hello!");
console.log("hi !");
