let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailinput = document.getElementById("email");
    let password = document.getElementById("password");
    let nameError = document.getElementById("nameError")
    let passError = document.getElementById("passwordError")
    let email = emailinput.value;
    let pass = password.value;
    let result = false;
    if (email.length > 5) {
        emailinput.classList.add("ok")
        result = true;
    }
    else {
        emailinput.classList.add("error");
        emailinput.value = ""
        result = false;
        nameError.textContent = "Enter valid email"
    }
    if (pass.length > 4) {
        result = true;
        password.classList.add("ok")
    }
    else {
        result = false
        password.classList.add("error")
        password.value = ""
        passError.textContent = "Enter valid password"
    }
    if (result) {
        alert("Login successfully...")
        form.reset();
    }

})