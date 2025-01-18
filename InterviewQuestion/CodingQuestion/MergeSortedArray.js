function mergeSortedArrays(arr1, arr2){
    let i=0, j=0;
    let result = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    result = result.concat(arr1.slice(i)).concat(arr2.slice(j));
    return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output : [1, 2, 3, 4, 5, 6]