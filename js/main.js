var userInfo = [];
var userName="";
userInfo = JSON.parse(localStorage.getItem('users'))

var email = document.getElementById('email');
var pass = document.getElementById('password');

document.getElementById('login').addEventListener('click', function () {
    if (checkInput()) {

        if (checkuser(email.value, pass.value)) {

            location.href = "profile/profile.html";
        }
        else {
            document.getElementById('validation').innerHTML = "incorrect email or password";
            console.log(checkuser(email, pass));
        }
    }
})

function checkuser(x, y) {
    var exist = false;
    for (var i = 0; i < userInfo.length; i++) {
        if ((userInfo[i].email == x) && (userInfo[i].pass == y)) {
            exist = true;
            localStorage.setItem('userName',userInfo[i].name)
        }
    }
    return exist;
}

function checkInput() {
    if (email.value == "" || pass.value == "") {
        document.getElementById('validation').innerHTML = "All inputs is required"
        return false;
    }
    else {
        return true;
    }
}



function clear() {
    email.value = ""
    pass.value = ""
}