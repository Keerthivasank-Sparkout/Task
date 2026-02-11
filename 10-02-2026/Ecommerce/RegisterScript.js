let form = document.getElementById("form");
let uname = document.getElementById("name");
let uemail = document.getElementById("email");
let upass = document.getElementById("password");
let ucpass = document.getElementById("cpassword");
let umobile = document.getElementById("mobileNo");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let cpassError = document.getElementById("cpassError");
let mobileError = document.getElementById("mobileError");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = uname.value;
    let email = uemail.value;
    let pass = upass.value;
    let cpass = ucpass.value;
    let ph = umobile.value;

    if(name.length > 2){
        uname.classList.add("ok");
    }
    else{
        uname.classList.add("error");
        nameError.textContent="Enter valid name";
    }
    if(isValidEmail(email)){
        uemail.classList.add("ok")
    }
    else{
        uemail.classList.add("error")
        emailError.textContent="Enter valid email"
    }
    if(pass===''){
        upass.classList.add("error")
        passError.textContent="Enter password"

    }else if(pass.length<8){
        upass.classList.add("error")
        passError.textContent="Password must be at least 8 characters."
    }else{
        upass.classList.add("ok")
    }
    if(cpass===''){
        ucpass.classList.add("error")
        cpassError.textContent="Enter password"
    }else if(cpass!==pass){
        cpassError.textContent="Passwords does not match";
    }else{
        ucpass.classList.add("ok")
    }
    if(ph === ' '){
        mobileError.textContent="Enter mobile number";
        umobile.classList.add("error");
    }
    else if( ph.length !== 10){
        mobileError.textContent="Enter valid mobile number";
        umobile.classList.add("error");
    }
    else{
        umobile.classList.add("ok");
    }
})

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
