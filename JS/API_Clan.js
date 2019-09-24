const cardURL = "http://34.89.112.135:9000/cards/";
const ratingURL = "http://34.89.112.135:9000/ratings/clan/";
const cardReq = new XMLHttpRequest();
const ratingReq = new XMLHttpRequest();
const idAdd = "-rating";

const addRatingValue = document.getElementById("update-rating-slider");

let data;

let ratingData;
let firstPassRatingData;

function makeRatingRequest(clan){
    ratingReq.open("GET", ratingURL + clan);
    ratingReq.send();
}

function removeRatings(){

    for(let i = 0; i < data.length; i++){
        let ratingText = document.getElementById(data[i].id + idAdd);
        ratingText.innerText = "Rating : ";
    }
}

function handleRatingSort(){

    //debugger;
    
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

function handleVote(){
   console.log(addRatingValue.value);
}

function displayVoteModal(){

    console.log("vote");
    $("#update-vote-modal").modal('toggle');
    
}

function handleUpdateVote(){

    console.log("update vote");

}

function handleRemoveVote(){

    console.log("remove vote");
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
        rating.id = getOBJID(data,i) + idAdd;

        let buttons = document.createElement("div");
        buttons.classList.add("row");

        let voteButton = document.createElement("button");
        voteButton.type = "button";
        voteButton.classList.add("btn");
        voteButton.classList.add("btn-primary");
        voteButton.classList.add("btn-md");
        voteButton.classList.add("card-buttons");
        voteButton.innerText = "Vote";
        voteButton.addEventListener("click", function(){
            displayVoteModal();
        });

        let updateButton = document.createElement("button");
        updateButton.type = "button";
        updateButton.classList.add("btn");
        updateButton.classList.add("btn-primary");
        updateButton.classList.add("btn-md");
        updateButton.classList.add("card-buttons");
        updateButton.innerText = "Update";
        updateButton.addEventListener("click", function(){
            handleUpdateVote();
        });

        let removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-danger");
        removeButton.classList.add("btn-md");
        removeButton.classList.add("card-buttons");
        removeButton.innerText = "Remove Rating";
        removeButton.addEventListener("click", function(){
            handleRemoveVote();
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
        let rating = document.querySelector("#" + getOBJID(ratingData,i) + idAdd);
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
    
    //cardRenderLocation.removeChild(children);
}



