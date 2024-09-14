// Memoize Function

function memoize(fn,context){
    const cache = {};
    return function(...args){
        const argsCache = JSON.stringify(args);
        if(!cache[argsCache]){
           cache[argsCache] = fn.apply(this || context, args)
        }
        return cache[argsCache];
    }
}

const sumOFNumers = (num1,num2) => {
    for(let i=0;i<1000000;i++){};
    return num1+num2;
}
const memoizedSum = memoize(sumOFNumers);
console.time('First Time Taken');   
console.log(memoizedSum(45000,40000));
console.timeEnd('First Time Taken');
console.time('Second Time Taken');   
console.log(memoizedSum(45000,40000));
console.timeEnd('Second Time Taken');