function deepCheck(obj1, obj2){
    if(obj1 === obj2)return true;
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null)return false;
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if(key1.length !== key2.length)return false;
    for(let key of key1){
        if(!key2.includes(key) || !deepCheck(obj1[key],obj2[key])){
            return false;
        }
    }
    return true;
}
/*
// Example Usage:
const objA = { a: 1, b: { c: 2, d: [3, 4] } };
const objB = { a: 1, b: { c: 2, d: [3, 4] } };
const objC = { a: 1, b: { c: 2, d: [3, 5] } };

console.log(deepCheck(objA, objB)); // ✅ true (identical)
console.log(deepCheck(objA, objC)); // ❌ false (different value in array)
console.log(deepCheck(null, null)); // ✅ true
console.log(deepCheck(null, {}));   // ❌ false
*/