const person = {
    name: 'John',
    display: function(age) {
        console.log("Person name is : " + this.name + "and age is :" + age);
    }
}

const person1 = {
    name: 'Jane'
}
person.display.call(person1,25); // Jane
person.display.apply(person1,[30]); // Jane
const personFunc = person.display.bind(person1,40); // Jane
personFunc(); // Jane

// Hoisting

hoist = 'The variable has been hoisted.';
console.log(hoist); // Output: undefined
var hoist;