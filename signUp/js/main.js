var userInfo = [];
if (localStorage.getItem('users') != null) {
    userInfo = JSON.parse(localStorage.getItem('users'))
}
var userName = document.querySelector('#name');
var userEmail = document.querySelector('#email');
var userPassword = document.querySelector('#password');
document.getElementById('singUp').addEventListener('click', function () {
    if (check(userName.value, userEmail.value, userPassword.value)) {
        if (!checkEmail(userEmail.value)) {
            user = {
                name: userName.value,
                email: userEmail.value,
                pass: userPassword.value
            }
            userInfo.push(user);
            document.querySelector('#validation').innerHTML = "";
            document.querySelector('#validation2').innerHTML = "Success";
            location.href="../index.html"
            localStorage.setItem('users', JSON.stringify(userInfo))
      }

    }
})




function checkEmail(x) {
    var exist = false;
    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].email == x) {
            exist = true;
        }
    }
    if (exist == true) {
        document.querySelector('#validation').innerHTML = "email already exists";
        document.querySelector('#validation2').innerHTML = "";

        return true;
    }
    else {
        return false;
    }
}


function clear() {
    userName.value=""
    userEmail.value=""
    userPassword.value=""
}


function check(x, y, z) {
    var validation = /\w/;
    if (validation.test(x) && validation.test(y) && validation.test(z)) {
        return true;
    }
    else {
        document.querySelector('#validation').innerHTML = "All inputs is required"
        document.querySelector('#validation2').innerHTML = "";
        return false
    }
}