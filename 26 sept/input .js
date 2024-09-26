function data(){
    let selectedname = document.querySelector ('#name');
    let name = selectedname.value;
    if (name === ""){
        window.alert("please enter your name")
    }
    let selectedage = document.querySelector ('#age');
    let age = selectedage.value;
    if (age === ""){
        window.alert("please enter your age")
    }
    console.log(name);
    console.log(age);
    
    return false;
}