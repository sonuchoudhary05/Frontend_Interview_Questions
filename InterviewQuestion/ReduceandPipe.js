const addFive = (x) => x + 5;
const multiplyByThree = (x) => x * 3;
const subtractTen = (x) => x - 10;

function reduce(...fns) {
  return function(x){
    var res = x;
    for(let i = fns.length-1; i >= 0; i--){
      res = fns[i](res);
    }
    return res;
  }
}
function pipe(...fns) {
    return function(x){
      /*var res = x;
      for(let i = 0; i < fns.length; i++){
        res = fns[i](res);
      }
      return res;
      */
        return fns.reduce((acc, fn) => fn(acc), x);
    }
  }

const ansReduce = reduce(addFive, multiplyByThree, subtractTen);
const ansPipe = pipe(addFive, multiplyByThree, subtractTen);
console.log(ansReduce(15)); // 35
console.log(ansPipe(15)); // 35