function mostFrequent(arr){
    const counts = {};
    let maxFrequet = 0, frequentElement = null;
    for(let i =0;i<arr.length;i++){
        counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
        if(counts[arr[i]] > maxFrequet){
            maxFrequet = counts[arr[i]];
            frequentElement = arr[i];
        }
        else if(counts[arr[i]] === maxFrequet){
            if(arr[i] > frequentElement){
                frequentElement = arr[i];
            }
        }
    }
    return frequentElement;
}
console.log(mostFrequent([1, 3, 3, 2,2,2, 1, 3])); // 3