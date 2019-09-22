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

let addUserJSON = {
    "userid":"",
    "password":""
}

//ONLOADS
addUserReq.onload = () => {
    console.log("hits this");

    if (addUserReq.status == 200) {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        debugger;
        localStorage.setItem("username",addUserJSON.userid);
        localStorage.setItem("password",addUserJSON.password);
    }
    else if(addUserReq.status > 201 && deleteUserURL.status <= 300){
        //alert issue
        alert("check username and password are correct lengths: 15 chats for username, 40 for password")
    }
    else if(addUserReq.status >= 400){
        alert("backend is not online");
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
        onLoginSuccess();
        
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
function makeAddUserRequest(username,password){
    //debugger;
    addUserJSON.userid = username;
    addUserJSON.password = password;
    addUserReq.open("POST", addUserURL);
    addUserReq.setRequestHeader("Content-Type", "application/json");
    addUserReq.send(JSON.stringify(addUserJSON));
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