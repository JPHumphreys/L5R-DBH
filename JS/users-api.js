//* User URL *//
const userURL = "http://localhost:56390/api/user";

const passwordInput = document.getElementById("input-user-text");

const userGETReq = new XMLHttpRequest();
const userPOSTReq = new XMLHttpRequest();

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
isLoggedIn();

function getUser(){
    //debugger;
    userGETReq.open("GET",userURL);
    userGETReq.send();
}

userGETReq.onload = () => {
    //debugger;
    //debugger;
    if(userGETReq.status === 200){
       
        //* it was a success
        data = JSON.parse(userGETReq.response);
        generateCards();
    }
    else{
        
        //* it was not a success
    }
}

userPOSTReq.onload = () => {
    if(userPOSTReq.status === 200){
        if(userPOSTReq.response === '"true"'){
            debugger;
            storeUser();

        }
        else{
            window.alert("POST request failed" + " " + userPOSTReq.responseText);
        }
    }
}


function storeUser(){
    window.localStorage.setItem('user',JSON.stringify(user));
}

function createUser(){
    user.setUsername(registerUsernameInput.value);
    user.setPassword(registerPasswordInput.value);

    //call the POST
    userPOSTReq.open("POST", userURL);
    userPOSTReq.setRequestHeader("Content-Type", "application/json");
    userPOSTReq.send(JSON.stringify(user));
}


function isLoggedIn(){
    let loggedInUser = JSON.parse(localStorage.getItem("user")).username;
    if((loggedInUser != undefined) & location.href.endsWith("cards.html")
    || location.href.endsWith("decks.html")
    || location.href.endsWith("index.html")
    || location.href.endsWith("deckbuilder.html")
    || location.href.endsWith("about.html")){
        userAddLocation.hidden = false;
        usernameText.innerText = loggedInUser;
        loginItem.hidden = true;
        registerItem.hidden = true;
    }
}

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
