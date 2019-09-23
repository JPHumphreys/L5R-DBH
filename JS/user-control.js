const loginItem = document.getElementById("nav-login-item");
const registerItem = document.getElementById("nav-register-item");
const userAddLocation = document.getElementById("user-add-location");
const usernameText = document.getElementById("username-display");

//USER INPUT LOCATIONS
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");

let currentUsername;
let currentPassword;

pageChecker();


function login(ele){

    currentUsername = loginUsernameInput.value;
    currentPassword = loginPasswordInput.value;

    makeGetUserRequest(loginUsernameInput.value);

}

function register(ele){
    console.log("beep boop");
    let username = registerUsernameInput.value;
    let password = registerPasswordInput.value;
    makeAddUserRequest(username,password);
    //post call to create user
}

function onLoginSuccess(){

    location.href = "decklist.html";
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
    //remove data from system
}

function deleteUser(){
    //post call to delete
}

function pageChecker(){
    if (location.href.endsWith("clanpage.html")|| location.href.endsWith("decklist.html") || location.href.endsWith("deckbuilder.html")){
        usernameText.innerText = localStorage.getItem("username");
    }
    //console.log(location.href);
    //console.log(location.href.endsWith("clanpage.html"));
}