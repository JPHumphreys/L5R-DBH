//USER URLS
const addUserURL = "http://34.89.95.16:9000/add/user/";
const deleteUserURL = "http://34.89.95.16:9000/delete/user/";
const getUserURL = "http://34.89.95.16:9000/get/user/";
const updateUserURL = "http://34.89.95.16:9000/update/user/";

//USER XML REUQUESTS
const addUserReq = new XMLHttpRequest();
const deleteUserReq = new XMLHttpRequest();
const getUserReq = new XMLHttpRequest();
const updateUserReq = new XMLHttpRequest();

let currentUsername;
let currentPassword;

//ONLOADS
addUserReq.onload = () => {
    if (addUserReq.status == 200) {
        localStorage.setItem("username",currentUsername);
        localStorage.setItem("password",currentPassword);
        onLoginSuccess();
    }
    else if(addUserReq.status > 201 && deleteUserURL.status <= 300){
        //alert issue
    }
    else if(addUserReq.status >= 400){
        
    }
}

deleteUserReq.onload = () => {
    if (deleteUserReq.status == 200) {
        
    }
    else if(deleteUserReq.status > 201 && deleteUserURL.status <= 300){
        //alert issue
    }
    else if(deleteUserURL.status >= 400){
        
    }
}

getUserReq.onload = () => {
    if (getUserReq.status == 200) {
        
    }
    else if(getUserReq.status > 201 && deleteUserURL.status <= 300){
        //alert issue
    }
    else if(getUserReq.status >= 400){
        
    }
}

updateUserReq.onload = () => {
    if (updateUserReq.status == 200) {
        
    }
    else if(updateUserReq.status > 206 && deleteUserURL.status <= 300){
        //alert issue
    }
    else if(updateUserReq.status >= 400){
        
    }
}

//MAKE REQUEST FUNCTIONS
function makeAddUserRequest(username){
    currentUsername = username;
    addUserReq.open("POST", addUserURL + username);
    addUserReq.send();
}

function makeDeleteUserRequest(username){
    deleteUserReq.open("DELETE", deleteUserURL + username);
    deleteUserReq.send();
}

function makeGetUserRequest(username){
    getUserReq.open("GET", getUserURL + username);
    getUserReq.send();
}

function makeUpdateUserRequest(username){
    updateUserReq.open("PUT", updateUserURL + username);
    updateUserReq.send();
}