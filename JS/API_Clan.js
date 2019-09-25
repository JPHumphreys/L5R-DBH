const cardURL = "http://34.89.112.135:9000/cards/";
const ratingURL = "http://34.89.112.135:9000/ratings/clan/";
const addRatingURL = "http://34.89.112.135:9000/add/ratings/";
const cardReq = new XMLHttpRequest();
const ratingReq = new XMLHttpRequest();
const ratingAddReq = new XMLHttpRequest();
const ratingAdd = "-rating";
const voteButtonAdd = "-add";

const addRatingValue = document.getElementById("add-rating-text");
const updateRatingValue = document.getElementById("update-rating-text");

let data;

let ratingData;
let firstPassRatingData;

let instanceVotes = [];

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

function getIMGLocation(obj, i){
    return obj[i].imglocation;
}

function getOBJID(obj, i){
    return obj[i].id;
}

function handleRatingAddRequest(id){

    console.log(vsClansList);
    let temp = 0;

    if(vsClansList.crab === true){
        noOfVsClans++;
        instanceVotes.push(temp);
        ratingVariableNames[temp] = currentRating;
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

    if(vsClansList.unicron === true){
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
   currentRating = addRatingValue.value;
   handleRatingAddRequest(currentCardSelected);
   $("#vote-modal").modal('toggle');
}

ratingAddReq.onload = () => {
    //debugger;
    
    if(ratingReq.status === 200){
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
    else if(ratingReq.status >= 201 || ratingReq.status < 301){
        alert("something is incorrect in the input");
    }
    else{
        alert("error in the backend");
    }
}

function makeAddRatingRequest(id, i){

    let obj;
    switch(i){
        case 0:
            ratingAddReq.open("PUT", addRatingURL + "crab" + "/" + id);
            ratingAddReq.setRequestHeader("Content-Type", "application/json");
           obj = {
                "ratingcrab":ratingVariableNames[i],
            };

            ratingAddReq.send(JSON.stringify(obj));
        break;
        case 1:
                ratingAddReq.open("PUT", addRatingURL + "crane" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingcrane":ratingVariableNames[i],
                };
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 2:
                ratingAddReq.open("PUT", addRatingURL + "dragon" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingdragon":ratingVariableNames[i],
                };
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 3:
                ratingAddReq.open("PUT", addRatingURL + "lion" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratinglion":ratingVariableNames[i],
                };
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 4:
                ratingAddReq.open("PUT", addRatingURL + "phoenix" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingphoenix":ratingVariableNames[i],
                };
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 5:
                ratingAddReq.open("PUT", addRatingURL + "scorpion" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingscorpion":ratingVariableNames[i],
                };
                ratingAddReq.send(JSON.stringify(obj));
        break;
        case 6:
                ratingAddReq.open("PUT", addRatingURL + "unicorn" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
                obj = {
                    "ratingunicorn":ratingVariableNames[i],
                };
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

    console.log(updateRatingValue.value);

}

function handleRemoveVote(ele){

    currentCardSelected = ele.id;

    console.log("remove vote");
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
        updateButton.hidden = true;
        updateButton.id = getOBJID(data,i);
        updateButton.innerText = "Update";
        updateButton.addEventListener("click", function(){
            displayUpdateModal();
        });

        let removeButton = document.createElement("button");
        dynamicButton(removeButton, "danger");
        removeButton.id = getOBJID(data,i);
        removeButton.hidden = true;
        removeButton.innerText = "Remove Rating";
        removeButton.addEventListener("click", function(){
            alert("rating removed");
        });

        buttons.append(voteButton);
        buttons.append(updateButton);
        buttons.append(removeButton);

        container.append(image);
        container.append(rating);
        container.append(buttons);

        card.append(container);

        cardRenderLocation.append(card);
    }

    handleRatingSort();
}

cardReq.onload = () => {
    data = JSON.parse(cardReq.response);
    renderCards();
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
    firstPassRatingData = JSON.parse(ratingReq.response);
    renderRatings();
};


function handleCardSort(){

    removeCards();
    data = [];
    //push to lower case 
    let clanToLower = clanParent.innerText.toLowerCase();
    let typeToLower = sideParent.innerText.toLowerCase();

    makeCardRequest(clanToLower, typeToLower);
}

function removeCards(){

    let children = document.querySelectorAll(".cards");

    for(let i = 0; i < children.length; i++){
        children[i].remove();
    }
    
}



