const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const userNamVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const confirmPasswordVal=confirmPassword.value.trim();

    if(userNamVal===''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }

    if(emailVal===''){
        setError(email,'Email is required');
    }else if(!isValidEmail(emailVal)){
        setError(email,'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(passwordVal===''){
        setError(password,'Password is required');
    }else if(passwordVal.length<8){
        setError(password,'Password must be at least 8 characters.');
    }else{
        setSuccess(password);
    }

    if(confirmPasswordVal===''){
        setError(confirmPassword,'Please confirm your password');
    }else if(confirmPasswordVal!==passwordVal){
        setError(confirmPassword,'Passwords does not match');
    }else{
        setSuccess(confirmPassword);
    }
}
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function setError(element,message){
    const formControl = element.parentElement;
    const errorDisplay=formControl.querySelector("small");
    formControl.className='form-control error';
    errorDisplay.innerText=message;
}
function setSuccess(element){
    const formControl= element.parentElement;
    formControl.className='form-control success';
}