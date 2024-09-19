function check (){
let num = window.confirm("Do you really want to layout");
console.log(num);
if(num){
    window.location.href = "login.html"
}
else{
    window.alert("invalid click")
}
}
check();