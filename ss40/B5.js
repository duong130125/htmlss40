function registerUser() {
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");

    let username = usernameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;


    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Vui lòng điền đầy đủ thông tin đăng ký.");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let newUser = [{
        username: username,
        email: email,
        password: password
    }];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}



