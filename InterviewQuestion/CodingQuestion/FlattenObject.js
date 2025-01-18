function flattenObject(obj, prefix = '', res = {}) {
    for (let key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], newKey, res);
      } else {
        res[newKey] = obj[key];
      }
    }
    return res;
  }
  
  const nestedObject = {
    a: {
      b: {
        c: 1,
      },
      d: 2,
    },
    e: 3,
  };
  
  console.log(flattenObject(nestedObject));
  //{ 'a.b.c': 1, 'a.d': 2, e: 3 }