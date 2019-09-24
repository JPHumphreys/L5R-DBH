//USER URLS
const addDeckURL = "http://34.89.112.135:9000/add/deck/";
const deleteDeckURL = "http://34.89.112.135:9000/delete/deck/";
const getDeckURL = "http://34.89.112.135:9000/get/deck/";
const updateDeckURL = "http://34.89.112.135:9000/update/deck/";

//USER XML REUQUESTS
const addDeckReq = new XMLHttpRequest();
const deleteDeckReq = new XMLHttpRequest();
const getDeckReq = new XMLHttpRequest();
const updateDeckReq = new XMLHttpRequest();

let deckDataIN;
let deckDataOUT;

addDeckReq.onload = () => {

    if(addDeckReq.status === 200){

    }
    else if(addDeckReq.status >= 201 || addDeckReq.status < 301){
        alert("something is incorrect in the input");
    }
    else{
        alert("error in the backend");
    }
}

deleteDeckReq.onload = () => {

    if(deleteDeckReq.status === 200){

    }
    else if(deleteDeckReq.status >= 201 || deleteDeckReq.status < 301){
        alert("error in the input");
    }
    else{
        alert("error in the backend");
    }
}

getDeckReq.onload = () => {

    if(getDeckReq.status === 200){

    }
    else if(getDeckReq.status >= 201 || getDeckReq.status < 301){
        alert("error in the input");
    }
    else{
        alert("error in the backend");
    }
}

updateDeckReq.onload = () => {

    if(updateDeckReq.status === 200){

    }
    else if(updateDeckReq.status >= 201 || updateDeckReq.status < 301){
        alert("error in the input");
    }
    else{
        alert("error in the backend");
    }
}

function makeGetDeckRequest(username, deckname){

    deckDataIN = [];
    getDeckReq.open("GET", getDeckURL + username + "/" + deckname);
    getDeckReq.send();
}

function makeDeleteDeckRequest(username,deckname){
    deleteUserReq.open("DELETE", deleteDeckURL + username + "/" + deckname);
    deleteUserReq.send();
}

function makeAddDeckRequest(){

    //get data from deck

    addDeckReq.open("POST", addDeckURL);
    addDeckReq.setRequestHeader("Content-Type", "application/json");
    addDeckReq.send(JSON.stringify(deckDataOUT));
}

function makeUpdateDeckRequest(username, deckname){

    updateDeckReq.open("PUT", updateDeckURL + username + "/" + deckname);
    updateDeckReq.send();
}