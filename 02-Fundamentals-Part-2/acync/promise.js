"use strict";

// Promise is a Javascript Object for asynchronous operation.

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaning

const fetchNumver = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumver
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getFrog = (frog) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${frog} => 🐸`)), 1000);
  });

const cock = (fried) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${fried} => 🍤`), 1000);
  });

getHen() //
  .then(getFrog)
  .catch((error) => {
    return "🍞";
  })
  .then(cock)
  .then(console.log);
