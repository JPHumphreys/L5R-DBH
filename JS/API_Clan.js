const cardURL = "http://34.89.112.135:9000/cards/";
const ratingURL = "http://34.89.112.135:9000/ratings/clan/";
const cardReq = new XMLHttpRequest();
const ratingReq = new XMLHttpRequest();
const idAdd = "-rating";

let data;

let ratingData;
let firstPassRatingData;


cardReq.onload = () => {
    data = JSON.parse(cardReq.response);
    renderCards();
};

function makeCardRequest(clan, side){
    cardReq.open("GET",cardURL + clan + "/" + side);
    cardReq.send();
}

ratingReq.onload = () => {
    console.log(ratingReq.response);
    firstPassRatingData = JSON.parse(ratingReq.response);
    renderRatings();
};

function makeRatingRequest(clan){
    ratingReq.open("GET", ratingURL + clan);
    ratingReq.send();
}

function handleCardSort(){

    removeCards();
    data = [];
    //push to lower case 
    let clanToLower = clanParent.innerText.toLowerCase();
    let typeToLower = sideParent.innerText.toLowerCase();

    makeCardRequest(clanToLower, typeToLower);
}

function handleRatingSort(){

//debugger;

    removeRatings();
    ratingData = [];
    firstPassRatingData = [];

    let clanToLower = clanParent.innerText.toLowerCase();

    makeRatingRequest(clanToLower);
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
        image.src = data[i].imglocation;
        image.classList.add("img-fluid");
        image.alt = data[i].id;
        
        let rating = document.createElement("h5");
        rating.classList.add("rating");
        rating.innerText = "Rating : ";
        rating.id = data[i].id + idAdd;

        let buttons = document.createElement("div");
        buttons.classList.add("row");

        let voteButton = document.createElement("button");
        voteButton.type = "button";
        voteButton.classList.add("btn");
        voteButton.classList.add("btn-primary")
        voteButton.classList.add("btn-md");
        voteButton.classList.add("card-buttons");
        voteButton.innerText = "Vote";

        let updateButton = document.createElement("button");
        updateButton.type = "button";
        updateButton.classList.add("btn");
        updateButton.classList.add("btn-primary")
        updateButton.classList.add("btn-md");
        updateButton.classList.add("card-buttons");
        updateButton.innerText = "Update";

        let removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-danger")
        removeButton.classList.add("btn-md");
        removeButton.classList.add("card-buttons");
        removeButton.innerText = "Remove Rating";

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

function removeCards(){

    let children = document.querySelectorAll(".cards");

    for(let i = 0; i < children.length; i++){
        children[i].remove();
    }
    
    //cardRenderLocation.removeChild(children);
}

function removeRatings(){

    for(let i = 0; i < data.length; i++){
        let ratingText = document.getElementById(data[i].id + idAdd);
        ratingText.innerText = "Rating : ";
    }
}

function renderRatings(){

    for(let i = 0; i < firstPassRatingData.length; i++){

        for(let j = 0; j < data.length; j++){
            if(firstPassRatingData[i].id == data[j].id){
                ratingData.push(firstPassRatingData[i]);
            }
        }
        console.log(ratingData[i]);
    }

    for(let i = 0; i < ratingData.length; i++){
        let rating = document.querySelector("#" + ratingData[i].id + idAdd);
        rating.append(ratingData[i].overallrating);
    }
    

}