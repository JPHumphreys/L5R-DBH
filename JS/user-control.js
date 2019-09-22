const loginItem = document.getElementById("nav-login-item");
const registerItem = document.getElementById("nav-register-item");



function login(ele){
    console.log("beep boop");
    console.log(loginItem);
    console.log(registerItem);
}

function register(ele){
    console.log("beep boop");
}

function onLoginSuccess(){
    loginItem.hidden = true;
    registerItem.hidden = true;
}