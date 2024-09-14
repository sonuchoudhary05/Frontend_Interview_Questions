const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

function flatArray(arr, dept, res = []) {
    if(dept <= 0) {
        res.push(arr);
        return res;
    }
    else{
        for(const item of arr){
            if(Array.isArray(item)){
                flatArray(item, dept - 1, res);
            }
            else{
                res.push(item);
            }
        }
    }
    return res;
}

console.log(flatArray(arr, 3)); 