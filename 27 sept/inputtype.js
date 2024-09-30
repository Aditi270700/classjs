function data(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#cpassword').value;

    console.log(name,email,mobile,password,cpassword);

    if(name ===""){
        document.querySelector('#errorname').innerHTML = "please enter your name";
        let selectname = document.querySelector('#name');
        selectname.style.borderColor = "red"
         selectname.style.outlineColor = "red"
         return false;
    }

    if(email ===""){
        document.querySelector('#erroremail').innerHTML = "please enter your email";
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red"
         selectemail.style.outlineColor = "red"
         return false;
    }
    if (mobile === ""){
        document.querySelector('#errormobile').innerHTML = "please enter your mobile number";
        let selectmobile = document.querySelector('#mobile');
        selectmobile.style.borderColor = "red"
        selectmobile.style.outlineColor = "red"
        return false;
    }
    if(password ===""){
        document.querySelector('#errorpassword').innerHTML = "please enter your password";
        let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor = "red";
        selectpassword.style.outlineColor = "red";
        return false;
    }
    if(cpassword ===""){
        document.querySelector('#errorcpassword').innerHTML = "please enter your confirm password";
        let selectcpassword = document.querySelector('#cpassword');
        selectcpassword.style.borderColor = "red";
        selectcpassword.style.outlineColor = "red";
        return false;
    }
}
function s(){
    let selectedinput = document.querySelector('#name');
    let selectederrorname = document.querySelector('#errorname');
    selectederrorname.innerHTML = ""
    selectedinput.style.borderColor = "grey";
    selectedinput.style.outlineColor = "grey";
}
function t(){
    let selectedinput = document.querySelector('#email');
    let selectederroremail = document.querySelector('#erroremail');
    selectederroremail.innerHTML = ""
    selectedinput.style.borderColor = "grey";
    selectedinput.style.outlineColor = "grey";
}
function u(){
    let selectedinput = document.querySelector('#mobile');
    let selectederrormobile = document.querySelector('#errormobile');
    selectederrormobile.innerHTML = ""
    selectedinput.style.borderColor = "grey";
    selectedinput.style.outlineColor = "grey";
}
function v(){
    let selectedinput = document.querySelector('#password');
    let selectederrorpassword = document.querySelector('#errorpassword');
    selectederrorpassword.innerHTML = ""
    selectedinput.style.borderColor = "grey";
    selectedinput.style.outlineColor = "grey";
}
function w(){
    let selectedinput = document.querySelector('#cpassword');
    let selectederrorcpassword = document.querySelector('#errorcpassword');
    selectederrorcpassword.innerHTML = ""
    selectedinput.style.borderColor = "grey";
    selectedinput.style.outlineColor = "grey";
}
