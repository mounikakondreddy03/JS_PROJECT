let loginEmail = document.getElementById("email")
let loginPswd = document.getElementById("password")
let psrdIcon = document.getElementById("passwordIcon")
let loginForm = document.querySelector(".btn")
let guestLoginBtn = document.querySelector(".guest-btn")

passwordIcon.addEventListener("click", () => {
    if (loginPswd.type === "password") {
        loginPswd.type = "text"
        loginPswd.classList.remove("bx-hide")
        loginPswd.classList.add("bx-show")
    } else {
        loginPswd.type = "password"
        loginPswd.classList.remove("bx-show")
        loginPswd.classList.add("bx-hide")
    }
})

loginForm.addEventListener("click", (e) => {
    e.preventDefault();

    let loginMail = loginEmail.value;
    let loginPassword = loginPswd.value;
    let mailStorage = localStorage.getItem("email")
    let pswdStorage = localStorage.getItem("password")

    if (loginMail == mailStorage && loginPassword == pswdStorage) {
        Swal.fire({
            title: "Good job!",
            text: "Redirecting to Home page!!!!!!",
            icon: "success"
        });

        setTimeout(() => {
            window.location.href = "../home.html"
        }, 1000)
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Credentails!",
        });
    }
})

guestLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    Swal.fire({
        title: "Welcome, Guest!",
        text: "Redirecting to Signup page as a guest...",
        icon: "success"
    });

    setTimeout(() => {
        window.location.href = "../signup/signup.html";
    }, 1000);
})