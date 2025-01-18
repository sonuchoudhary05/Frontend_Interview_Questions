function findDuplicates(arr){
    const counts = {};
    const duplicates = [];
    for(let i =0;i<arr.length;i++){
        counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
        if(counts[arr[i]] === 2){
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

const arr = [1, 2, 3, 4, 3, 2, 5];
console.log("Duplicates in array are: ", findDuplicates(arr)); 
// Output : [3,2]