// #1 output of below code - 
console.log("Start");
setTimeout(() => {
    console.log("Set Timeout Define"); 
}, 0);
Promise.resolve().then(() => console.log("Promise Define"));
console.log("END");
// output  - Start, END, Promise Define, Set Timeout Define

// #2 output of below code -

const person = {
    name : "Riya Choudhary",
    getName : function(){
        console.log(this.name);
    }
}
person.getName();
setTimeout(function(){
    person.getName();
}, 1000);
