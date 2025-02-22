let fullName = document.getElementById("name")
let userName = document.getElementById("uname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let password = document.getElementById("password")
let passwordIcon = document.getElementById("passwordIcon")
let confirmPassword = document.getElementById("confirmPassword")
let confirmPasswordIcon = document.getElementById("confirmPasswordIcon")
let Form = document.getElementById("form")
let Register = document.querySelector("button")

const nameError = document.getElementById("nameError")
const userError = document.getElementById("userError")
const emailError = document.getElementById("emailError")
const phoneError = document.getElementById("phoneError")
const passwordError = document.getElementById("passwordError")
const confirmError = document.getElementById("confirmPasswordError")

passwordIcon.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"
        password.classList.remove('bx-hide')
        password.classList.add('bx-show')
    } else {
        password.type = "password"
        password.classList.remove('bx-show')
        password.classList.add('bx-hide')
    }
})

confirmPasswordIcon.addEventListener("click", () => {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text"
        confirmPassword.classList.remove('bx-hide')
        confirmPassword.classList.add('bx-show')
    } else {
        confirmPassword.type = "password"
        confirmPassword.classList.remove('bx-show')
        confirmPassword.classList.add('bx-hide')
    }
})


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

    if (phone.value.length < 10) {
        phoneError.textContent = "Enter Valid Phone Number"
        phoneError.style.color = "white"
    } 
    else {
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

        if (Register) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        }

        window.location.href = "../loginForm/login.html"
    }
    else {
        Register.disabled = false;
    }
})
