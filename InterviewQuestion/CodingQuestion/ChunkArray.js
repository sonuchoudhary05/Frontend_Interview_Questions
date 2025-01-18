function ChunkArray(arr, size){
    let result = [];
    for(let i = 0;i<arr.length;i+=size){
        result.push(arr.slice(i, i+size));
    }
    return result;
}
console.log(ChunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output : [[1, 2, 3], [4, 5, 6], [7]]