const password = document.getElementById("login-pass");
const eye = document.getElementById("togglePassword");
const passwordError = document.getElementById("passwordError");
const form = document.querySelector("form");


if (password && eye) {
    eye.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            eye.textContent = "🙈";
        } else {
            password.type = "password";
            eye.textContent = "👁️";
        }
    });
}


if (form && password && passwordError) {
    form.addEventListener("submit", (e) => {
        if (password.value.trim() === "") {
            e.preventDefault();
            passwordError.textContent = "Password has not been filled";
            passwordError.style.display = "block";
        }
    });

    password.addEventListener("input", () => {
        passwordError.style.display = "none";
    });
}


    document.getElementById("registerForm").addEventListener("submit", function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            window.location.href = "index.html";
        }
    } );

    
