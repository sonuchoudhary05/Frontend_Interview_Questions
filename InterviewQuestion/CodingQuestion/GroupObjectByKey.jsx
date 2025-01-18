function groupBy(arr, key) {
    let result = {};
    for(let i=0;i<arr.length;i++){
        const group = arr[i][key];
        if(!result[group]){
            result[group] = [];
        }
       result[group].push(arr[i]);
    }
    return result;
}

const data = [
  { id: 1, category: 'fruit', name: 'apple' },
  { id: 2, category: 'vegetable', name: 'carrot' },
  { id: 3, category: 'fruit', name: 'banana' },
];

console.log(groupBy(data, 'category'));
// Output : 
/*{
  fruit: [
    { id: 1, category: 'fruit', name: 'apple' },
    { id: 3, category: 'fruit', name: 'banana' }
  ],
  vegetable: [ { id: 2, category: 'vegetable', name: 'carrot' } ]
}
  */
