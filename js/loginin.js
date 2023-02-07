function validate() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    if (username == "admin@gmail.com" && password == "123456") {
        // alert("Đăng nhập thành công");
        window.location="main.html";
    }
    else {
        alert("Đăng nhập không thành công");
    }
}