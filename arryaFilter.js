const arr = [1, 2, 3, 4, 5, 6, 6, 6, 9];
function arrayFilter(arr,fn,res = []){
    for(const item of arr){
        if(fn(item)){
            res.push(item*item);
        }
    }
    return res;
}
const isEven = (num) => num%2 === 0;

console.log(arrayFilter(arr, isEven)); // [2, 4, 6, 6, 6]