function flattenArray(arr, depth, result = []) {
    if (depth <= 0) {
      return result;
    }
  
    for (let item of arr) { // Use for...of to iterate over array elements
      if (Array.isArray(item)) {
        flattenArray(item, depth - 1, result); // Recursively flatten the array
      } else {
        result.push(item); // Add non-array elements to result
      }
    }
  
    return result;
  }
  
  function getUniqueValues(arr, depth) {
    const result = [];
    const flattenArrayValue = flattenArray(arr, depth);
    console.log("Flattened Array:", flattenArrayValue);
  
    const uniqueValueSet = new Set(flattenArrayValue); // Create a set for unique values
    for (let value of uniqueValueSet) {
      result.push(value); // Add each unique value to the result
    }
  
    return result;
  }
  
  // Test the function
  console.log(getUniqueValues([1, 2, [3, 4], 2, [3, 5], 6], 3));
 /* Flattened Array: [
    1, 2, 3, 4,
    2, 3, 5, 6
  ]
  [ 1, 2, 3, 4, 5, 6 ]
   */