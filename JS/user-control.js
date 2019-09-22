const loginItem = document.getElementById("nav-login-item");
const registerItem = document.getElementById("nav-register-item");
const userAddLocation = document.getElementById("user-add-location");
const usernameText = document.getElementById("username-display");

//USER INPUT LOCATIONS
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");

let localUsername = localStorage.getItem("username");


function login(ele){
    console.log("beep boop");
    console.log(loginItem);
    console.log(registerItem);
}

function register(ele){
    console.log("beep boop");
    //post call to create user
}

function onLoginSuccess(){
    loginItem.hidden = true;
    registerItem.hidden = true;
    usernameText.innerText = localUsername;

}

function onLoginFail(){
    alert("this username has already been taken");
    alert("an input was unrecognized");
    alert("the backend is down, it should be back online soon")
}

function addUserToNav(username){
    //get username and place it it into the button.innerText 
    //also save the user into system data
}

function changePassword(){
    //put call to update
}

function logout(){
    //logout
    //revers the hidden
    loginItem.hidden = false;
    registerItem.hidden = false;
    //remove data from system
}

function deleteUser(){
    //post call to delete
}