const arr = [1, 2, 3, 4, 5, 6, 6, 6, 9];

const arrayMap =  arr.map((item) => item*item);
console.log(arrayMap); // [1, 4, 9, 16, 25, 36, 36, 36,

Array.prototype.mapPolyfill = (arr, fn, res = [])  =>{
    for (let item of arr) {
        res.push(fn(item));
    }
    return res;
}

Array.prototype.filterPolyfill = (arr, fn, res = [])  =>{
    for (let item of arr) {
        if(fn(item)){
            res.push(item);
        }
    }
    return res;
}

Array.prototype.reducePolyfill = (fn, intialValue)  =>{
    var acc = intialValue;
    for (let i=0;i< this.length; i++) {
        acc = acc ? fn(acc, this[i]) : this[i];
    }
    return acc;
}

const arr1 = [1, 2, 3, 4,6,7,8,9,0,13];
const square = arr1.mapPolyfill(arr1, (item) => item*item);
const filterItems = arr1.filterPolyfill(arr1, (item) => item %2 !==0);
const reduceValue = arr1.reducePolyfill(arr,(acc,item) => {return acc+item;},0);
console.log(square); // [1, 4, 9, 16]
console.log(filterItems); // [2, 4]
console.log(reduceValue); // 45