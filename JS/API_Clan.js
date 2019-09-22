const cardURL = "http://34.89.95.16:9000/cards/";
const singleRatingURL = "http://34.89.95.16:9000/ratings/"
const req = new XMLHttpRequest();
const singleRatingREQ = new XMLHttpRequest();
const idAdd = "-rating";

let data;
let singleRatingData = [];
let singleRatingDataToRender = [];
let counter;

req.onload = () => {
    data = JSON.parse(req.response);
    renderCards();
};

function makeCardRequest(clan, side){
    req.open("GET",cardURL + clan + "/" + side);
    req.send();
}

singleRatingREQ.onload = () => {
    console.log(singleRatingREQ.response);
    singleRatingDataToRender.push(JSON.parse(singleRatingREQ.response));
    counter++;
    
    if(singleRatingDataToRender.length === data.length){
        renderRatings();
    }
    else{
        makeSingleRatingCalls();
    }
};

function makeRatingSingleRequest(id){
    singleRatingREQ.open("GET",singleRatingURL + id,true);
    singleRatingREQ.send();
}

function handleSort(){

    removeCards();
    data = [];
    counter = 0;

    //push to lower case 
    let clanToLower = clanParent.innerText.toLowerCase();
    let typeToLower = sideParent.innerText.toLowerCase();

    makeCardRequest(clanToLower, typeToLower);
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
        singleRatingData.push(data[i].id);

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

    makeSingleRatingCalls();
}

function removeCards(){

    let children = document.querySelectorAll(".cards");

    for(let i = 0; i < children.length; i++){
        children[i].remove();
    }
    
    //cardRenderLocation.removeChild(children);
}

function makeSingleRatingCalls(){

    makeRatingSingleRequest(data[counter].id);
}

function renderRatings(){
    for(let i = 0; i < data.length; i++){
        //console.log(data[i].id);
        makeRatingSingleRequest(data[i].id);
        let rating = document.querySelector("#"+data[i].id+idAdd);
        rating.append(singleRatingDataToRender[i].overallrating);
    }
    

}