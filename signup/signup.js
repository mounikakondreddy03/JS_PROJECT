let fullName = document.getElementById("name")
let userName = document.getElementById("uname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")
let Form = document.getElementById("form")
let Register = document.querySelector("button")
let icon=document.getElementById("icon");

const nameError = document.getElementById("nameError")
const userError = document.getElementById("userError")
const emailError = document.getElementById("emailError")
const phoneError = document.getElementById("phoneError")
const passwordError = document.getElementById("passwordError")
const confirmError = document.getElementById("confirmPasswordError")

Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = fullName.value;
    let user = userName.value;
    let emailValue = email.value;
    let phoneNumber = phone.value;
    let pswd = password.value;
    let confirmPswd = confirmPassword.value;

    localStorage.setItem("name", name)
    localStorage.setItem("user", user)
    localStorage.setItem("email", emailValue)
    localStorage.setItem("phone", phoneNumber)
    localStorage.setItem("password", pswd)
    localStorage.setItem("confirmPswd", confirmPswd)

    // let nameCheck = /^[a-zA-Z]{3,}$/
    // let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{5,})$/;

    if (fullName.value === '' || fullName.value == null) {
        nameError.textContent = "Name is required"
        nameError.style.color = "white"
    }
    else {
        nameError.textContent = ""
    }

    if (userName.value === '' || userName.value == null) {
        userError.textContent = "Name is required"
        userError.style.color = "white"
    }
    else {
        userError.textContent = ""
    }
    
    // if (email.value.match(emailCheck)) {
    //     emailError.textContent = "Valid Email is required"
    //     emailError.style.color = "white"
    // }
    // else {
    //     emailError.textContent = ""
    // }
    
    if (phone.value.length < 10) {
        phoneError.textContent = "Enter Valid Phone Number"
        phoneError.style.color = "white"
    } else {
        phoneError.textContent = ""
    }
    if (password.value.length <= 5) {
        passwordError.textContent = "Password must be mor than 6 characters"
        passwordError.style.color = "white"
    }
    else {
        passwordError.textContent = ""
    }
    
    if (confirmPassword.value.length <= 10) {
        confirmError.textContent = "Password must be more than 6 characters"
        confirmError.style.color = "white"
    }
    else {
        confirmError.textContent = ""
    }
    
    if (password.value !== confirmPassword.value) {
        confirmError.textContent = "Password and Confirm Password must be same"
        confirmError.style.color = "white"
    }
    else {
        confirmError.textContent = ""
    }
    
    if (password.value === confirmPassword.value && password.value.length > 5) {
        Register.disabled = true;

        if(Register) {
            Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        }
        
        window.location.href="../login/login.html"
    }
    else {
        Register.disabled = false;
    }
})
