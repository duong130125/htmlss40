function loginUser() {
    let loginEmailInput = document.getElementById("loginEmail");
    let loginPasswordInput = document.getElementById("loginPassword");

    let loginEmail = loginEmailInput.value;
    let loginPassword = loginPasswordInput.value;
    if (loginEmail.trim() === "" || loginPassword.trim() === "") {
        alert("Vui lòng nhập email và mật khẩu.");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let loggedInUser = users.find(function (user) {
        return user.email === loginEmail && user.password === loginPassword;
    });

    if (loggedInUser) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        alert("Đăng nhập thành công!");
    } else {
        alert("Email hoặc mật khẩu không chính xác. Vui lòng thử lại.");
    }
    loginEmailInput.value = "";
    loginPasswordInput.value = "";
}