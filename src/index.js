import Person from "./hello.js";

const init = () => {
  console.log("Hello world!");
};

const raven = new Person("raven");
console.log(raven.greeting());

init();
