function showPassword() {
    const passwordInput = document.getElementById("password_input");
    const confPassInput = document.getElementById("conf_password_input");

    if (passwordInput.type === "password" && confPassInput.type === "password") {
        passwordInput.type = "text";
        confPassInput.type = "text";
    } else {
        passwordInput.type = "password";
        confPassInput.type = "password"
    }
}