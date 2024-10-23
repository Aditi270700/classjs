let a = {
    "id":1,
    "name":"aditi",
    "age":25,
    "course":"fsd"
}
a.name;

let {name,age,id,course}=a;
console.log(name)
console.log(age);
console.log(course);
console.log(id);
// when we make any object under in function is called method.
// when we create any function outside object is known as function.

// regular function
function show(arg,arg1){

}
show(3,56);
// arrow function
const run = ()=>{

}
run();
// IIFE (immidiately invoked function expression)
(function(){

})();

// higher order function

// setInterval,setTimeout,map,fill