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
        let selectemobile = document.querySelector('#mobile');
        selectemobile.style.borderColor = "red"
        selectemobile.style.outlineColor = "red"
        return false;
    }
    if(password ===""){
        document.querySelector('#errorpassword').innerHTML = "please enter your password";
        let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor = "red";
        selectpassword.style.outlineColor = "red";
        return 0;
    }
    if(cpassword ===""){
        document.querySelector('#errorcpassword').innerHTML = "please enter your confirm password";
        let selectcpassword = document.querySelector('#cpassword');
        selectcpassword.style.borderColor = "red";
        selectcpassword.style.outlineColor = "red";
        return 0;
    }
}

