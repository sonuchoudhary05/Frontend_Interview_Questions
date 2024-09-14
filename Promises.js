/*console.log("Start");
function promisesFunc(){
    return setTimeout(() => {
        console.log("Promise");
    }, 1000);
}
promisesFunc();
console.log("End");
*/

const promises = new Promise((resolve, reject) => {
  let result = false;
  if (result) {
    resolve("Promises Success");
  } else {
    reject("Failed");
  }
}, 2000);

promises
  .then((message) => {
    console.log("Then: ", message);
  })
  .catch((message) => {
    console.log("Catch: ", message);
  });

// Polyfill for Promises all

Promise.prototype.all = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    if (promises.length === 0) {
      resolve(result);
    } else {
      let pending = promises.length;
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
          result[index] = value;
          pending--;
          if (pending === 0) {
            resolve(result);
          }
        });
      });
    }
    reject("Failed");
  });
};

Promise.all(["dkdkdkkd", "dkdkd", "fkfkdkfkf"])
  .then((message) => {
    console.log("All Promises Resolve: ", message);
  })
  .catch((message) => {
    console.log("Promises Rejected: ", message);
  });
