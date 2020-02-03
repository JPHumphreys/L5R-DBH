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

let userData;

const user = new User();
//const user = new User(JSON.parse(localStorage.getItem("user")).username, JSON.parse(localStorage.getItem("user")).password);

//* check if user is logged in on each page *//
//isLoggedIn();

function getUser(username){
    userGETReq.open("GET", userURL + "/" + username);
    //userGETReq.setRequestHeader("Content-Type", "application/json");
    userGETReq.send();
    callAlert("login","success");
}

userGETReq.onload = () => {
    debugger;
    console.log(userGETReq.responseText);
    console.log(userGETReq.status);
    if(userGETReq.status === 200){
       debugger;
        //* it was a success
        userData = JSON.parse(userGETReq.response);
        //handleLogin();
    }
    else{
        callAlert("login","danger");
        //* it was not a success
        if(userGETReq.status > 200){
            debugger;
        }
    }
}

userPOSTReq.onload = () => {
    if(userPOSTReq.status === 200){
        if(userPOSTReq.response === '"true"'){
            storeUser();
            callAlert("register","success");
            location.href = "index.html";
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
    debugger;
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

function handleLogin(){
    //check if username and password match in the DB
    console.log(userData.username);
    console.log(userData.password);
    console.log(userData);
    //if yes login - then change the page to index
    user.loginStatus = "true";
    //if no tell user that there is no match

    //
}

function login(){
    //GET CALL
    getUser(loginUsernameInput.value);
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
