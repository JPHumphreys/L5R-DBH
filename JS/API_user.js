//USER URLS
const addUserURL = "http://34.89.112.135:9000/add/user/";
const deleteUserURL = "http://34.89.112.135:9000/delete/user/";
const getUserURL = "http://34.89.112.135:9000/get/user/";
const updateUserURL = "http://34.89.112.135:9000/update/user/";

const passwordInput = document.getElementById("input-user-text");

//USER XML REUQUESTS
const addUserReq = new XMLHttpRequest();
const deleteUserReq = new XMLHttpRequest();
const getUserReq = new XMLHttpRequest();
const updateUserReq = new XMLHttpRequest();

let getUserData;

let newPassword;

let addPassJSON = {
    "password":""
};

let addUserJSON = {
    "userid":"",
    "password":""
}

function deleteAllData(username){

}

function callPasswordModal(){
    $("#update-user-modal").modal('toggle');
}

function handleUpdatePassword(){
    newPassword = passwordInput.value;
    console.log(newPassword);
    addPassJSON.password = newPassword;
    let name = localStorage.getItem("username");
    makeUpdateUserRequest(name);
}

//ONLOADS
addUserReq.onload = () => {
    //console.log("hits this");

    if (addUserReq.status === 200) {
        localStorage.setItem("username",addUserJSON.userid);
        alert("added user successfully");
    }
    else if(addUserReq.status > 201 && deleteUserURL.status <= 300){
        //alert issue
        alert("check username and password are correct lengths: 15 chats for username, 40 for password");
    }
    else{
        alert("backend is not online");
    }
}

deleteUserReq.onload = () => {
    if (deleteUserReq.status === 200) {


        alert("the user has successfully been deleted");
        deleteAllData();
        location.href = "register.html";
        
    }
    else if(deleteUserReq.status > 201 && deleteUserURL.status <= 300){
        //alert issue
        alert("error in the input");
    }
    else{
        alert("error in the backend");
    }
    //console.log(deleteUserReq.responseText);
}

getUserReq.onload = () => {
    if (getUserReq.status === 200) {

        getUserData = JSON.parse(getUserReq.responseText);

        if(currentUsername === getUserData.userid && currentPassword === getUserData.password){
            //user and password is correct
            localStorage.setItem("username",getUserData.userid);
            onLoginSuccess();
        }


        
    }
    else if(getUserReq.status > 201 && deleteUserURL.status <= 300){
        //alert issue
        alert("error in the input");
    }
    else{
        alert("error in the backend");
    }
    //console.log(getUserReq.responseText);
}

updateUserReq.onload = () => {

    if (updateUserReq.status === 200) {
        alert("password changed successfully");
        location.reload();
    }
    else if(updateUserReq.status > 206 && deleteUserURL.status <= 300){
        //alert issue
        alert("error in the input");
    }
    else{
        alert("error in the backend");
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
    getUserData = [];
    getUserReq.open("GET", getUserURL + username);
    getUserReq.send();
}

function makeUpdateUserRequest(username){
    updateUserReq.open("PUT", updateUserURL + username);
    updateUserReq.setRequestHeader("Content-Type","application/json");
    updateUserReq.send(JSON.stringify(addPassJSON));
}

