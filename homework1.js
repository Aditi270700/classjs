function homework (){
let a = (window.prompt("Enter number 1"));
let b = (window.prompt("Enter number 2"));
let c = (window.prompt("Enter number 3"));
if(a>b && a>c){
window.alert("a is greatest");
}
 else if (b>a && b>c){
window.alert("b is greatest");
 }
else{
    window.alert("c is greatest");
}
}
homework();