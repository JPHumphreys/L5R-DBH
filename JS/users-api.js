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

const user = new User(JSON.parse(localStorage.getItem("user")).username, JSON.parse(localStorage.getItem("user")).password);

//* check if user is logged in on each page *//
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
            storeUser();
            callAlert("register","success");
        }
        else{
            callAlert("register","success");
        }
    }
}


function storeUser(){
    window.localStorage.setItem('user',JSON.stringify(user));
}

function createUser(){
    //call the POST
    userPOSTReq.open("POST", userURL);
    userPOSTReq.setRequestHeader("Content-Type", "application/json");
    userPOSTReq.send(JSON.stringify(user));
}


function isLoggedIn(){
    let loggedInUser = JSON.parse(localStorage.getItem("user")).username;
    if( (user.loginStatus === "true") & 
        (location.href.endsWith("cards.html")
        || location.href.endsWith("decks.html")
        || location.href.endsWith("index.html")
        || location.href.endsWith("deckbuilder.html")
        || location.href.endsWith("about.html"))){
        userAddLocation.hidden = false;
        usernameText.innerText = loggedInUser;
        loginItem.hidden = true;
        registerItem.hidden = true;
    }
}

function onLoginSuccess(){

    location.href = "decklist.html";
}

function logout(){
    //logout
    user.loginStatus = "false";
    location.href = "login.html";
}

function deleteUser(){
    //post call to delete
    makeDeleteUserRequest(username);
    //
}

function login(){
    //GET CALL

    //check if username and password match in the DB

    //if yes login - then change the page to index
    user.loginStatus = "true";
    //if no tell user that there is no match

    //
}

function register(){
    user.setUsername(registerUsernameInput.value);
    user.setPassword(registerPasswordInput.value);

    createUser();
}

function callPasswordModal(){
    $("#update-user-modal").modal('toggle');
}

function callAlert(page, status){
    document.getElementById(page + '-' + status).style.display = 'block';
    setTimeout(function(){document.getElementById(page + '-' + status).style.display = 'none'}, 1700);
}
