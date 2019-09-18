const url = "http://34.89.95.16:9000/cards";
const req = new XMLHttpRequest();

let data;
let firstPassData = [];
let sortedData = [];


req.onload = () => {
    data = JSON.parse(req.response);
    console.log(data);
};

function makeRequest(){
    req.open("GET",url);
    req.send();
}

function handleSort(){

    removeCards();
    firstPassData = [];
    sortedData = [];
    sortByCardClan(data,clanParent.innerText, sideParent.innerText);
}

function sortByCardClan(data, clan, type){

    //push to lower case
    let clanToLower = clan.toLowerCase();
    let typeToLower = type.toLowerCase();

    console.log(clanToLower);
    console.log(typeToLower);

    for(let i = 0; i < data.length; i++){
        if(data[i].clan === clanToLower){
            firstPassData.push(data[i]);
        }
    }
    sortByCardType(firstPassData,typeToLower);
}

function sortByCardType(data, type){
    for(let i = 0; i < data.length; i++){
        if(data[i].side === type){
            sortedData.push(data[i]);
        }
    }
    renderObjects();
}

function renderObjects(){


    //debugger;
    for(let i = 0; i < sortedData.length; i++)
    {
        let card = document.createElement("div");
        card.classList.add("col-4");
        card.classList.add("cards");

        let container = document.createElement("div");
        container.classList.add("container");
        container.classList.add("card");

        let image = document.createElement("img");
        image.src = sortedData[i].imglocation;
        image.classList.add("img-fluid");
        image.alt = sortedData[i].name;

        let rating = document.createElement("h5");
        rating.classList.add("rating");
        rating.innerText = "Rating : 0.0";

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
}

function removeCards(){

    let children = document.querySelectorAll(".cards");

    for(let i = 0; i < children.length; i++){
        children[i].remove();
    }
    
    //cardRenderLocation.removeChild(children);
}