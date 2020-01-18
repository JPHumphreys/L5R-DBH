//* User URL's *//

const addUserURL = "";
const getUserURL = "";
const updateUserURL = "";
const deleteUserURL = "";

const passwordInput = document.getElementById("input-user-text");

const userReq = new XMLHttpRequest();

const loginItem = document.getElementById("nav-login-item");
const registerItem = document.getElementById("nav-register-item");
const userAddLocation = document.getElementById("user-add-location");
const usernameText = document.getElementById("username-display");

//USER INPUT LOCATIONS
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");

const user = new User();

function pageChecker(){
    
    if (location.href.endsWith("cards.html")||
     location.href.endsWith("decks.html") ||
      location.href.endsWith("index.html") ||
       location.href.endsWith("deckbuilder.html")){
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

// TODO : REDO THIS
// pageChecker();


function onLoginSuccess(){

    location.href = "decklist.html";
}

function logout(){
    //logout
    //revers the hidden
    //remove data from system
    userAddLocation.hidden = true;
    loginItem.hidden = false;
    registerItem.hidden = false;
    location.href = "login.html";

}

function deleteUser(){
    //post call to delete
    makeDeleteUserRequest(username);
    //
}

function login(){

}

function register(){

}

function callPasswordModal(){
    $("#update-user-modal").modal('toggle');
}
