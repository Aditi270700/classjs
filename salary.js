function salary(){
let number  = parseInt(window.prompt("Enter the number"));
if(number <= 350000){
window.alert ("You don't want to pay the tax");
}
else if(number>=350000 && number<=800000){
window.alert(("you want pay tax")+(number*0.1));
}
else if(number>=800000){
window.alert(("you want to pay tax")+(number*0.17));
}
else{
    window.alert ("you have to pay tax");
}
}
salary();