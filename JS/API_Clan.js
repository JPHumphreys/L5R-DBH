const cardURL = "http://34.89.112.135:9000/cards/";
const ratingURL = "http://34.89.112.135:9000/ratings/clan/";
const addRatingURL = "http://34.89.112.135:9000/add/ratings/";
const removeRatingURL = "http://34.89.112.135:9000/remove/ratings/";

const cardReq = new XMLHttpRequest();
const ratingReq = new XMLHttpRequest();
const ratingAddReq = new XMLHttpRequest();
const ratingRemoveReq = new XMLHttpRequest();

const ratingAdd = "-rating";
const voteButtonAdd = "-add";
const updateButtonAdd = "-update";

const addRatingValue = document.getElementById("add-rating-text");
const updateRatingValue = document.getElementById("update-rating-text");

let data;

let ratingData;
let firstPassRatingData;

let instanceVotes = [];

let isRenerable;
let isFirstPass;
let isGettingRatingForDeck;

let ratingVariableNames = {
    "ratingcrab":0.0,
    "ratingcrane":0.0,
    "ratingdragon":0.0,
    "ratinglion":0.0,
    "ratingphoenix":0.0,
    "ratingscorpion":0.0,
    "ratingunicorn":0.0
};

let currentCardSelected;
let currentRating;
let counter = 0;
let noOfVsClans = 0;
let continueToAdd = false;
let currentClan;


function makeRatingRequest(clan){
    ratingReq.open("GET", ratingURL + clan);
    ratingReq.send();
}

function removeRatings(){

    for(let i = 0; i < data.length; i++){
        let ratingText = document.getElementById(data[i].id + ratingAdd);
        ratingText.innerText = "Rating : ";
    }
}

function handleRatingSort(){
    
        removeRatings();
        ratingData = [];
        firstPassRatingData = [];
    
        let clanToLower = clanParent.innerText.toLowerCase();
    
        makeRatingRequest(clanToLower);
}

function getDeckRatings(clan){

    ratingData = [];
    isGettingRatingForDeck = true;

    makeRatingRequest(clan);
}



function getIMGLocation(obj, i){
    return obj[i].imglocation;
}

function getOBJID(obj, i){
    return obj[i].id;
}

function saveRating(cardid, cardrating, cardclan){
    let rating = {
        "id":cardid,
        "rating":cardrating,
        "clan":cardclan
    };

    let ratingString = JSON.stringify(rating);

    sessionStorage.setItem(cardid + "-" + cardclan, ratingString);
    console.log(rating);
    console.log(sessionStorage.getItem(cardid, + "-" + cardclan));

}

function removeRating(cardid, cardclan){
    sessionStorage.removeItem(cardid + "-" + cardclan);
}

function getRating(cardid,cardclan){

    let ratingObject = JSON.parse(sessionStorage.getItem(cardid + "-" + cardclan));

    return parseInt(ratingObject.rating);//returns number value

}

function handleRatingRemoveRequest(id){
    let temp = 0;
    counter = 0;
    debugger;
    noOfVsClans = 0;
    id = id.substring(0, id.length - 7);//-update

    if(vsClansList.crab === true){
        if(sessionStorage.getItem(id + "-" + "crab") !== null){
        noOfVsClans++;
        instanceVotes.push(temp);
    }
        
    }
    temp++;
    if(vsClansList.crane === true){
        if(sessionStorage.getItem(id + "-" + "crane") !== null){
        noOfVsClans++;
        instanceVotes.push(temp);
        }
    }
    temp++;
    if(vsClansList.dragon === true){
        if(sessionStorage.getItem(id + "-" + "dragon") !== null){
        noOfVsClans++;
        instanceVotes.push(temp);
        }
    }
    temp++;
    if(vsClansList.lion === true){
        if(sessionStorage.getItem(id + "-" + "lion") !== null){
        noOfVsClans++;
        instanceVotes.push(temp);
        }
    }
    temp++;
    if(vsClansList.phoenix === true){
        if(sessionStorage.getItem(id + "-" + "phoenix") !== null){
        noOfVsClans++;
        instanceVotes.push(temp);
        }
    }
    temp++;
    if(vsClansList.scorpion === true){
        if(sessionStorage.getItem(id + "-" + "scorpion") !== null){
        noOfVsClans++;
        instanceVotes.push(temp);
        }
    }
    temp++;
    if(vsClansList.unicorn === true){
        if(sessionStorage.getItem(id + "-" + "unicorn") !== null){
        noOfVsClans++;
        instanceVotes.push(temp);
        }
    }

    debugger;

    if(instanceVotes[0]>= 0){
        makeRemoveRatingRequest(id,instanceVotes[0]);
        continueToAdd = true;
    }
    else{
        alert("please select clans to update");
        continueToAdd = false;
    }

}

function makeRemoveRatingRequest(id , i){

    let obj;
    debugger;

    switch(i){
        case 0:
                console.log("REMOVING CRAB");
            ratingRemoveReq.open("PUT", removeRatingURL + "crab" + "/" + id);
            ratingRemoveReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                "ratingcrab":getRating(id,"crab"),
            };
            currentClan = "crab";
            ratingRemoveReq.send(JSON.stringify(obj));
        break;
        case 1:
                console.log("REMOVING CRANE");
            ratingRemoveReq.open("PUT", removeRatingURL + "crane" + "/" + id);
            ratingRemoveReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                "ratingcrane":getRating(id,"crane"),
            };
            currentClan = "crane";
            ratingRemoveReq.send(JSON.stringify(obj));
        break;
        case 2:
                console.log("REMOVING DRAGON");
            ratingRemoveReq.open("PUT", removeRatingURL + "dragon" + "/" + id);
            ratingRemoveReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                "ratingdragon":getRating(id,"dragon"),
            };
            currentClan = "dragon";
            ratingRemoveReq.send(JSON.stringify(obj));
        break;
        case 3:
                console.log("REMOVING LION");
            ratingRemoveReq.open("PUT", removeRatingURL + "lion" + "/" + id);
            ratingRemoveReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                "ratinglion":getRating(id,"lion"),
            };
            currentClan = "lion";
            ratingRemoveReq.send(JSON.stringify(obj));
        break;
        case 4:
                console.log("REMOVING PHOENIX");
            ratingRemoveReq.open("PUT", removeRatingURL + "phoenix" + "/" + id);
            ratingRemoveReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                "ratingphoenix":getRating(id,"phoenix"),
            };
            currentClan = "phoenix";
            ratingRemoveReq.send(JSON.stringify(obj));
        break;
        case 5:
                console.log("REMOVING SCORPION");
            ratingRemoveReq.open("PUT", removeRatingURL + "scorpion" + "/" + id);
            ratingRemoveReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                "ratingscorpion":getRating(id,"scorpion"),
            };
            currentClan = "scorpion";
            ratingRemoveReq.send(JSON.stringify(obj));
        break;
        case 6:
                console.log("REMOVING UNICORN");
            ratingRemoveReq.open("PUT", removeRatingURL + "unicorn" + "/" + id);
            ratingRemoveReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                "ratingunicorn":getRating(id,"unicorn"),
            };
            currentClan = "unicorn";
            ratingRemoveReq.send(JSON.stringify(obj));
        break;
    }

}

function handleRatingAddRequest(id){

    counter = 0;
    console.log(vsClansList);
    debugger;
    if(id.includes("-update")){
        id = id.substring(0, id.length - 7);//-update
    }

    let temp = 0;

    if(vsClansList.crab === true){
        noOfVsClans++;
        instanceVotes.push(temp);
    }

    temp++;

    if(vsClansList.crane === true){
        noOfVsClans++;
        instanceVotes.push(temp);
        ratingVariableNames[temp] = currentRating;
    }

    temp++;

    if(vsClansList.dragon === true){
        noOfVsClans++;
        instanceVotes.push(temp);
        ratingVariableNames[temp] = currentRating;
    }

    temp++;

    if(vsClansList.lion === true){
        noOfVsClans++;
        instanceVotes.push(temp);
        ratingVariableNames[temp] = currentRating;
    }

    temp++;

    if(vsClansList.phoenix === true){
        noOfVsClans++;
        instanceVotes.push(temp);
        ratingVariableNames[temp] = currentRating;
    }

    temp++;

    if(vsClansList.scorpion === true){
        noOfVsClans++;
        instanceVotes.push(temp);
        ratingVariableNames[temp] = currentRating;
    }

    temp++;

    if(vsClansList.unicorn === true){
        noOfVsClans++;
        instanceVotes.push(temp);
        ratingVariableNames[temp] = currentRating;
    }

    if(noOfVsClans === 0){
        //do it for al
        for(let i = 0; i < 7; i++){
            noOfVsClans++;
            instanceVotes.push(i);
            ratingVariableNames[i] = currentRating;
        }
    }
    //debugger;

    makeAddRatingRequest(currentCardSelected, instanceVotes[0]);


}

function handleRatingVote(){
    //debugger;
    if(addRatingValue.value >= 1.0 && addRatingValue.value <= 10.0){
        currentRating = addRatingValue.value;
        handleRatingAddRequest(currentCardSelected);
        $("#vote-modal").modal('toggle');
    }
    else{
        alert("please type a rating that is between 1.0 and 10.0");
    }
}

ratingAddReq.onload = () => {
    //debugger;
    
    if(ratingAddReq.status === 200){
        counter++;
        //console.log(instanceVotes);
        instanceVotes.shift();
        //console.log(instanceVotes);
        
        if(counter === noOfVsClans){
            alert("added votes successfully");
            location.reload();
        }
        else{
            makeAddRatingRequest(currentCardSelected, instanceVotes[0]);
        }
    }
    else{
        alert("error in the backend");
    }
}

ratingRemoveReq.onload = () => {
    debugger;
    if(currentCardSelected.includes("-update")){
        currentCardSelected = currentCardSelected.substring(0, currentCardSelected.length - 7);//-update
    }
    if(ratingRemoveReq.status === 200){
        counter++;
        instanceVotes.shift();
        removeRating(currentCardSelected, currentClan);
        if(counter === noOfVsClans){
            handleRatingAddRequest(currentCardSelected);

        }else{
            makeAddRatingRequest(currentCardSelected, instanceVotes[0]);
        }
    }
    else{
        alert("error in the backend");
    }
}



function makeAddRatingRequest(id, i){
    debugger;

    if(id.includes("-update")){
        id = id.substring(0, id.length - 7);//-update
    }
    let obj;
    switch(i){
        case 0:
            ratingAddReq.open("PUT", addRatingURL + "crab" + "/" + id);
            ratingAddReq.setRequestHeader("Content-Type", "application/json");
           obj = {
                "ratingcrab":ratingVariableNames[i],
            };
            saveRating(id, currentRating, "crab");
            ratingAddReq.send(JSON.stringify(obj));
        break;
        case 1:
                ratingAddReq.open("PUT", addRatingURL + "crane" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingcrane":ratingVariableNames[i],
                };
                saveRating(id, currentRating, "crane");
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 2:
                ratingAddReq.open("PUT", addRatingURL + "dragon" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingdragon":ratingVariableNames[i],
                };
                saveRating(id, currentRating, "dragon");
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 3:
                ratingAddReq.open("PUT", addRatingURL + "lion" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratinglion":ratingVariableNames[i],
                };
                saveRating(id, currentRating, "lion");
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 4:
                ratingAddReq.open("PUT", addRatingURL + "phoenix" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingphoenix":ratingVariableNames[i],
                };
                saveRating(id, currentRating, "phoenix");
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 5:
                ratingAddReq.open("PUT", addRatingURL + "scorpion" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingscorpion":ratingVariableNames[i],
                };
                saveRating(id, currentRating, "scorpion");
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 6:
                ratingAddReq.open("PUT", addRatingURL + "unicorn" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingunicorn":ratingVariableNames[i],
                };
                saveRating(id, currentRating, "unicorn");
                ratingAddReq.send(JSON.stringify(obj));
        break;
    }

}



function displayVoteModal(ele){

    currentCardSelected = ele.id;
    //console.log(currentCardSelected);
    $("#vote-modal").modal('toggle');
    
}

function displayUpdateModal(ele){

    currentCardSelected = ele.id;
    $("#update-modal").modal('toggle');
}

function handleRatingUpdate(){

    if(updateRatingValue.value >= 1.0 && updateRatingValue.value <= 10.0){
        currentRating = updateRatingValue.value;
        handleRatingRemoveRequest(currentCardSelected);
    }else{
        alert("please type a rating that is between 1.0 and 10.0");
    }
}

function dynamicButton(obj,buttontype){
    obj.type = "button";
    obj.classList.add("btn");
    obj.classList.add("btn-" +buttontype);
    obj.classList.add("btn-md");
    obj.classList.add("card-buttons");
}

function renderCards(){
    //debugger;
    for(let i = 0; i < data.length; i++)
    {
        let card = document.createElement("div");
        card.classList.add("col-4");
        card.classList.add("cards");

        let container = document.createElement("div");
        container.classList.add("container");
        container.classList.add("card");

        let image = document.createElement("img");
        image.src = getIMGLocation(data,i);
        image.classList.add("img-fluid");
        image.alt = getOBJID(data,i);
        
        let rating = document.createElement("h5");
        rating.classList.add("rating");
        rating.innerText = "Rating : ";
        rating.id = getOBJID(data,i) + ratingAdd;

        let buttons = document.createElement("div");
        buttons.classList.add("row");

        let voteButton = document.createElement("button");
        dynamicButton(voteButton, "primary");
        voteButton.id = getOBJID(data,i);
        voteButton.innerText = "Vote";
        voteButton.addEventListener("click", function(){
            displayVoteModal(this);
        });

        let updateButton = document.createElement("button");
        dynamicButton(updateButton, "primary");
        //updateButton.hidden = true;
        updateButton.id = getOBJID(data,i) + updateButtonAdd;
        updateButton.innerText = "Update";
        updateButton.addEventListener("click", function(){
            displayUpdateModal(this);
        });

        buttons.append(voteButton);
        buttons.append(updateButton);

        container.append(image);
        container.append(rating);
        container.append(buttons);

        card.append(container);

        cardRenderLocation.append(card);
    }

    handleRatingSort();
}

cardReq.onload = () => {
    if(cardReq.status === 200){
        data = JSON.parse(cardReq.response);
        if(isRenerable === true){
            renderCards();
        }
        else{
            if(isFirstPass === true){
                secondPassCreateDeck();
            }
            else{
                getRatingPasses();
            }
        }
    }
    else{
        alert("error in the backend");
    }
};

function makeCardRequest(clan, side){
    cardReq.open("GET",cardURL + clan + "/" + side);
    cardReq.send();
}

function renderRatings(){

    for(let i = 0; i < firstPassRatingData.length; i++){

        for(let j = 0; j < data.length; j++){
            if(getOBJID(firstPassRatingData,i) === getOBJID(data,j)){
                ratingData.push(firstPassRatingData[i]);
            }
        }
        //console.log(ratingData[i]);
    }

    for(let i = 0; i < ratingData.length; i++){
        let rating = document.querySelector("#" + getOBJID(ratingData,i) + ratingAdd);
        rating.append(ratingData[i].overallrating);
    }
    
}

ratingReq.onload = () => {
    //console.log(ratingReq.response);
    if(isGettingRatingForDeck !== true){
        firstPassRatingData = JSON.parse(ratingReq.response);
        renderRatings();
    }
    else{
        ratingData = JSON.parse(ratingReq.response);
        finaliseDeck();
    }
};


function handleCardSort(){

    removeCards();
    data = [];
    isRenerable = true;
    //push to lower case 
    let clanToLower = clanParent.innerText.toLowerCase();
    let typeToLower = sideParent.innerText.toLowerCase();

    makeCardRequest(clanToLower, typeToLower);
}

function deckCardSort(clan, side){
    data = [];
    isRenerable = false;
    if(isFirstPass == null){
        isFirstPass = true;
    }
    else{
        isFirstPass = false;
    }

    makeCardRequest(clan, side);
}

function removeCards(){

    let children = document.querySelectorAll(".cards");

    for(let i = 0; i < children.length; i++){
        children[i].remove();
    }
    
}





