function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "admin" && password == "123456") {
        return true;
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        return false;
    }
}