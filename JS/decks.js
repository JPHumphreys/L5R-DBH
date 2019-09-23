//COLORS
// const rgbCrab = [124,135,146];
// const rgbCrane = [101,171,213];
// const rgbDragon = [96,158,124];
// const rgbLion = [191,160,48];
// const rgbPhoenix = [218,145,84];
// const rgbScorpion = [158,62,43];
// const rgbUnicorn = [138,101,142];

const deckSpawnLocation = document.getElementById("deck-render-location");

let deckData = {
    "deckName":"",
    "deckCopy":""
}


function handleUpdateDeck(){
    
    console.log("update");
}

function handleCopyDeck(){

    console.log("copy");
}

function handleDeleteDeck(){

    console.log("delete");
}


function deckBuilder(deckname,priclan, splashclan){

    let deck = document.createElement("div");
    deck.classList.add("col-sm-12");
    deck.classList.add("col-md-6");
    deck.classList.add("col-lg-4");

    let deckChild = document.createElement("div");
    deckChild.classList.add("card");
    deckChild.classList.add("mb-4");
    deckChild.classList.add("deck");

    let deckBody = document.createElement("div");
    deckBody.classList.add("card-body");
    deckBody.classList.add("text-center");

    let deckName = document.createElement("h3");
    deckName.innerText = deckname;

    let priElement = document.createElement("h5");
    priElement.innerText = "Primary Clan : " + priclan;

    let splashElement = document.createElement("p");
    splashElement.innerText = "Splash Clan : " + splashclan;

    let buttonRow = document.createElement("div");
    buttonRow.classList.add("row");

    let updateButton = document.createElement("button");
    updateButton.type = "button";
    updateButton.classList.add("btn");
    updateButton.classList.add("btn-primary");
    updateButton.classList.add("deck-buttons");
    updateButton.innerText = "Update";
    updateButton.addEventListener("click",function(){
        handleUpdateDeck();
    });

    let copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.classList.add("btn");
    copyButton.classList.add("btn-primary");
    copyButton.classList.add("deck-buttons");
    copyButton.innerText = "Copy";
    copyButton.addEventListener("click", function(){
        handleCopyDeck();
    })

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.classList.add("deck-buttons");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function(){
        handleDeleteDeck();
    })

    buttonRow.appendChild(updateButton);
    buttonRow.appendChild(copyButton);
    buttonRow.appendChild(deleteButton);

    deckBody.appendChild(deckName);
    deckBody.appendChild(priElement);
    deckBody.appendChild(splashElement);
    deckBody.appendChild(buttonRow);

    deckChild.appendChild(deckBody);

    deck.appendChild(deckChild);

    deckSpawnLocation.append(deck);

    deckData.deckName = deckname;
    deckData.deckCopy = "";

}
