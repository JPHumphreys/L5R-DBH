//* User URL *//
const userURL = "http://localhost:56390/api/user";



const userGETReq = new XMLHttpRequest();
const userPOSTReq = new XMLHttpRequest();
const userDELETEReq = new XMLHttpRequest();
const userPUTReq = new XMLHttpRequest();

const loginItem = document.getElementById("nav-login-item");
const registerItem = document.getElementById("nav-register-item");
const userAddLocation = document.getElementById("user-add-location");

const usernameText = document.getElementById("username-display");
const passwordText = document.getElementById("input-user-text");
//USER INPUT LOCATIONS
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");

let userData;

const user = new User();
//const user = new User(JSON.parse(localStorage.getItem("user")).username, JSON.parse(localStorage.getItem("user")).password);

//* check if user is logged in on each page *//
isLoggedIn();

function getUser(username){
    userGETReq.open("GET", userURL + "/" + username);
    //userGETReq.setRequestHeader("Content-Type", "application/json");
    userGETReq.send();
}

userGETReq.onload = () => {
    if(userGETReq.status === 200){
       //debugger;
        //* it was a success
        userData = JSON.parse(userGETReq.response);
        handleLogin();
    }
    else{
        callAlert("login","danger");
        //* it was not a success
        if(userGETReq.status > 200){
            //debugger;
        }
    }
}

userPOSTReq.onload = () => {
    //debugger;
    if(userPOSTReq.status === 200){
        if(userPOSTReq.response === '"true"'){
            storeUser();
            callAlert("register","success");
            location.href = "login.html";
        }
        else{
            callAlert("register","success");
        }
    }
}

userDELETEReq.onload = () => {
    //debugger;
    if(userDELETEReq.status === 200){
        if(userDELETEReq.responseText === "false"){
            callAlert("delete","fail");
        }else{
            callAlert("delete","success");
            freeUser();
            location.href = "login.html";
        }
    }
}

function createUser(){
    //call the POST
    //debugger;
    userPOSTReq.open("POST", userURL);
    userPOSTReq.setRequestHeader("Content-Type", "application/json");
    userPOSTReq.send(JSON.stringify(user));
}

function deleteUser(){
    //debugger;
    userDELETEReq.open("DELETE", userURL + "/" + usernameText.innerText);
    userDELETEReq.send();
}

function freeUser(){
    window.localStorage.removeItem('user');
}

function storeUser(){
    window.localStorage.setItem('user',JSON.stringify(user));
}


function isLoggedIn(){
    //debugger;
    if(localStorage.getItem("user") === undefined){
        userAddLocation.hidden = true;
        loginItem.hidden = false;
        registerItem.hidden = false
    }else{
        if( (location.href.endsWith("cards.html")
            || location.href.endsWith("decks.html")
            || location.href.endsWith("index.html")
            || location.href.endsWith("deckbuilder.html")
            || location.href.endsWith("about.html"))){
            let loggedInUser = JSON.parse(localStorage.getItem("user")).username;
            userAddLocation.hidden = false;
            usernameText.innerText = loggedInUser;
            loginItem.hidden = true;
            registerItem.hidden = true;
        }
    }   
}

function onLoginSuccess(){

    location.href = "decks.html";
}

function logout(){
    //logout
    freeUser();
    callAlert("logout","success");
    location.href = "login.html";
}

function handleLogin(){
    //debugger;
    //check if username and password match in the DB
    if(userData[0].username === loginUsernameInput.value && userData[0].password === loginPasswordInput.value)
    {
        //debugger;
        callAlert("login","success");
        //if yes login - then change the page to index
        user.setUsername(loginUsernameInput.value);
        user.setPassword(loginPasswordInput.value);
        storeUser();
        user.loginStatus = "true";
        onLoginSuccess();
    }
    else{
        //if no tell user that there is no match
        callAlert("login","danger");
    }

}

function handleUpdatePassword(){
    userPUTReq.open("PUT",userURL + "/" + user.getUsername());
    userPUTReq.setRequestHeader("Content-Type", "application/json");
    user.setPassword(passwordText.value);
    userPUTReq.send(JSON.stringify(user));
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
    user.setUsername(usernameText.innerText);
    $("#update-user-modal").modal('toggle');
}

function callAlert(page, status){
    document.getElementById(page + '-' + status).style.display = 'block';
    setTimeout(function(){document.getElementById(page + '-' + status).style.display = 'none'}, 1700);
}
