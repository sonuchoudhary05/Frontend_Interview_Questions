// Interview Question Related to IIFE: What will be the output of the following code?
(function(x){
    return (function(y){
        console.log(x);
    })(2)
})(5)

// O/P qauestion of Function Scope
/*for(var i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}
for(let i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}
    */
/*let i;
for(i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}
*/
for(var i = 0; i<5; i++){
    function close(i){
        setTimeout(function(){
            console.log(i);
        },1000)
    }
    close(i);
}

var x = 20;
(function(){
    console.log(x);
    var x = 10;
    console.log(x);
})();

// Spread and Rest Operator
// Spread Operator
function sum(a,b,c){
    return a+b+c;
}
const arr = [1,2,3];
console.log(sum(...arr))

// Rest Operator
function multiply(...args){
    return args[0]*args[1]*args[2];
}
const arr1 = [1,2,3];
console.log(multiply(...arr1));