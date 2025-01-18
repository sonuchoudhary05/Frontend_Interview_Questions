function DeepClone(obj) {
  let result = {};
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => DeepClone(item));
  }

  for (let key in obj) {
    result[key] = DeepClone(obj[key]);
  }
  return result;
}
const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
const clone1 = obj;
//const clone = DeepClone(obj);
//clone.a = 3;
clone1.a = 4;
console.log(obj);
//console.log(clone);
console.log(clone1) 

/*
output : 
{ a: 1, b: { c: 2, d: { e: 3 } } }
{ a: 3, b: { c: 2, d: { e: 3 } } }
*/
