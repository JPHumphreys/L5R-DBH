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

function pageChecker(){

    if (location.href.endsWith("clanpage.html")|| location.href.endsWith("decklist.html") || location.href.endsWith("index.html") || location.href.endsWith("deckbuilder.html")){
        
        
        if(localStorage.getItem("username") === null){
            location.href = "register.html";
            userAddLocation.hidden = true;
            loginItem.hidden = false;
            registerItem.hidden = false;
        }
        else{
            usernameText.innerText = localStorage.getItem("username");
            userAddLocation.hidden = false;
            loginItem.hidden = true;
            registerItem.hidden = true;

        }
    }

}


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
    alert("the backend is down, it should be back online soon");
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
    userAddLocation.hidden = true;
    loginItem.hidden = false;
    registerItem.hidden = false;
    localStorage.removeItem("username");
    location.href = "login.html";

}

function deleteUser(){
    //post call to delete
    let username = localStorage.getItem("username");
    console.log(username);
    makeDeleteUserRequest(username);
}

