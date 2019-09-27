const deckSpawnLocation = document.getElementById("deck-render-location");

const updateDecknameValue = document.getElementById("input-deckname-text");
const oldDecknameValue = document.getElementById("old-input-deckname-text");

let deckData = {
    "deckName":"",
    "deckCopy":""
}

let idToDelete = [];
let idToUpdate = [];


let decks = [];


/*
1 Mountain's Anvil Castle (Core Set)
1 Keeper of Water (Core Set)
1 Assassination (Core Set)
2 Cloud the Mind (Core Set)
3 Daimyō's Favor (Core Set)
3 Defend Your Honor (Children of the Empire)
3 Duelist Training (Core Set)
3 Fine Katana (Core Set)
3 Finger of Jade (Tears of Amaterasu)
2 Good Omen (Core Set)
2 Hawk Tattoo (The Ebb and Flow)
3 Iaijutsu Master (Children of the Empire)
3 Let Go (Core Set)
2 Mirumoto Daishō (Children of the Empire)
3 Mirumoto's Fury (Core Set)
2 Ornate Fan (Core Set)
1 Peasant's Advice (Underhand of the Emperor)
2 Tattooed Wanderer (Core Set)
2 Togashi Kazue (Core Set)
1 Warm Welcome (Children of the Empire)
1 Agasha Sumiko (The Chrysanthemum Throne)
3 Agasha Swordsmith (Core Set)
1 Agasha Taiko (Warriors of the Wind)
3 Ascetic Visionary (Core Set)
3 Doomed Shugenja (Core Set)
3 Favorable Ground (Core Set)
3 Imperial Storehouse (Core Set)
3 Kitsuki Shomon (Underhand of the Emperor)
3 Mirumoto Dōjō (Children of the Empire)
3 Mirumoto Hitomi (Children of the Empire)
3 Mirumoto Raitsugu (Core Set)
3 Miya Mystic (2018 Season One Stronghold Kit)
3 Niten Adept (Core Set)
3 Togashi Initiate (Core Set)
2 Togashi Yokuni (Battle for the Stronghold Kit)
1 Before the Throne (The Chrysanthemum Throne)
1 Illustrious Forge (Children of the Empire)
1 Midnight Revels (Children of the Empire)
1 Shameful Display (Core Set)
1 Upholding Authority (Tainted Lands)
*/

function callDecknameUpdateModal(){
    $("#update-deck-modal").modal('toggle');
}


function handleUpdateDeck(){

    let val = document.querySelectorAll("h3");

    for(let i = 0; i < idToUpdate.length; i++){
        if(oldDecknameValue.value === val[i].innerText){
            let set = document.getElementById(idToUpdate[i]);
            set.innerText = updateDecknameValue.value;
        }
    }
    
    console.log("update");
}

function handleCopyDeck(){

    console.log("copy");
}

function handleDeleteDeck(ele){

    let objs = document.querySelectorAll(".filter");

    for(let i = 0; i < objs.length; i++){
            if(objs[i].classList.contains(ele.id)){
                objs[i].remove();
            }
    }

}

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}


function deckBuilder(deckname,priclan, splashclan, textObj){

    let randomId = randomString(16);//16 to ensure the unlikeliness of same delete

    let deck = document.createElement("div");
    deck.classList.add("col-sm-12");
    deck.classList.add("col-md-6");
    deck.classList.add("col-lg-4");
    deck.classList.add(randomId);
    deck.classList.add("filter");

    let deckChild = document.createElement("div");
    deckChild.classList.add("card");
    deckChild.classList.add("mb-4");
    deckChild.classList.add("deck");

    let deckBody = document.createElement("div");
    deckBody.classList.add("card-body");
    deckBody.classList.add("text-center");

    let deckName = document.createElement("h3");
    deckName.innerText = deckname;
    deckName.id = randomId + "-update";

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
    idToUpdate.push(randomId + "-update");
    updateButton.addEventListener("click",function(){
        callDecknameUpdateModal();
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
    deleteButton.id = randomId;
    idToDelete.push(randomId);
    deleteButton.addEventListener("click", function(){
        handleDeleteDeck(this);
    });

    let textChunk = document.createElement("div");
    let space = document.createElement("br");
    textChunk.appendChild(space);

    for(let i = 0; i < textObj.length; i++){
        let text = document.createElement("p");
        text.innerText = textObj[i];
        textChunk.append(text);
    }



    buttonRow.appendChild(updateButton);
    buttonRow.appendChild(copyButton);
    buttonRow.appendChild(deleteButton);

    deckBody.appendChild(deckName);
    deckBody.appendChild(priElement);
    deckBody.appendChild(splashElement);
    deckBody.appendChild(buttonRow);
    deckBody.appendChild(textChunk);

    deckChild.appendChild(deckBody);

    deck.appendChild(deckChild);

    deckSpawnLocation.append(deck);

    deckData.deckName = deckname;
    deckData.deckCopy = "";

}

function loadDecks(){
    decks.push(JSON.parse(localStorage.getItem("deck")));
    console.log(decks);
    debugger;

    deckBuilder(decks[0].name, decks[0].primary, decks[0].secondary, decks[0].cards);
}
