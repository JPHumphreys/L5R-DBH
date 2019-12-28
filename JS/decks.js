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
    
}

function handleCopyDeck(){

    let getText = document.getElementById("textChunk");

    if(getText.hidden === true){
        getText.hidden = false;
    }
    else{
        getText.hidden = true;
    }
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

function createPrimaryAndRole(primary,role){

    let primaryAndRole = document.createElement("div");
    primaryAndRole.classList.add("row", "primary-role");
    
    let deckPrimary = document.createElement("div");
    deckPrimary.classList.add("col-8", "deck-primary");
    deckPrimary.setAttribute("data-tooltip","The Primary Clan of this deck is " + primary);
    let primaryText = document.createElement("h4");
    primaryText.innerText = primary;
    deckPrimary.appendChild(primaryText);
    primaryAndRole.appendChild(deckPrimary);

    let deckRole = document.createElement("div");
    deckRole.classList.add("col-3", "deck-role");
    deckRole.setAttribute("data-tooltip","Role is " + role);
    let roleImage = document.createElement("img");
    roleImage.setAttribute("src","/media/" + role + "_colour.jpg");
    roleImage.setAttribute("alt",role);
    deckRole.appendChild(roleImage);
    primaryAndRole.appendChild(deckRole)

    /*

            <div class="row primary-role">
                <div class="col-8 deck-primary" data-tooltip="The Primary Clan of this deck is Crab.">
                  <h4>Crab</h4>
                </div>
                <div class="col-3 deck-role" data-tooltip="Role is Keeper">
                  <img src="/media/keeper_colour.jpg" alt="">
                </div>
            </div>

    */

    return primaryAndRole;
}

function createSecondaryandElement(secondary, element){

    let secondaryAndElement = document.createElement("div");
    secondaryAndElement.classList.add("row", "secondary-element");

    let deckSecondary = document.createElement("div");
    deckSecondary.classList.add("col-8", "deck-secondary");
    deckSecondary.setAttribute("data-tooltip", "The Secondary Clan is " + secondary);
    let secondaryText = document.createElement("h5");
    secondaryText.innerText = secondary;
    deckSecondary.appendChild(secondaryText);
    secondaryAndElement.appendChild(deckSecondary);

    let deckElement = document.createElement("div");
    deckElement.classList.add("col-3", "deck-element");
    deckElement.setAttribute("data-tooltip", "Element is " + element);
    let elementImage = document.createElement("img");
    elementImage.setAttribute("src","/media/" + element + "_colour.jpg");
    elementImage.setAttribute("alt",element);
    deckElement.appendChild(elementImage);
    secondaryAndElement.appendChild(deckElement);

    return secondaryAndElement;

    /*
            <div class="row secondary-element">
                  <div class="col-8 deck-secondary"  data-tooltip="The Secondary Clan is Phoenix.">
                    <h5>Phoenix</h5>
                  </div>
                  <div class="col-3 deck-element" data-tooltip="Element is Fire">
                    <img src="/media/fire_colour.jpg" alt="">
                  </div>
                  
              </div>

    */
}

function createDeckButtons(){

    let buttonRow = document.createElement("div");
    buttonRow.classList.add("row", "btn-group", "button-row");

    let rename = document.createElement("button");
    rename.classList.add("btn","btn-md", "btn-outline-dark", "rename-button");
    rename.innerText = "Rename";
    let copy = document.createElement("button");
    copy.classList.add("btn","btn-md", "btn-outline-dark", "copy-button");
    copy.innerText = "Copy";
    let remove = document.createElement("button");
    remove.classList.add("btn","btn-md", "btn-outline-dark", "delete-button");
    remove.innerText = "Delete";

    buttonRow.appendChild(rename);
    buttonRow.appendChild(copy);
    buttonRow.appendChild(remove);
    return buttonRow;
    /*
            <div class="row btn-group button-row">
                <button class="btn btn-md btn-outline-dark rename-button">Rename</button>
                <button class="btn btn-md btn-outline-dark copy-button">Copy</button>
                <button class="btn btn-md btn-outline-dark delete-button">Delete</button>
            </div>
    */

}

function buildDeck(deckname, primary, secondary, role, element){

    let randomId = randomString(16);
    let deck = document.createElement("div");
    deck.id = randomId;
    deck.classList.add("col-sm-12","col-md-6", "col-lg-3", "deck");
    /*deck.id = randomId;*/
    let name = document.createElement("h3");
    name.classList.add("deckname");
    name.innerText = deckname;
    deck.appendChild(name);
    deck.appendChild(createPrimaryAndRole(primary,role));
    deck.appendChild(createSecondaryandElement(secondary, element));
    deck.appendChild(createDeckButtons());
    deckSpawnLocation.append(deck);

    /*

        <div class="col-sm-12 col-md-6 col-lg-3 deck">

              <h3 class="deckname">Deckname</h3>
  
              
  
        </div>


    */

}

function deckBuilder(deckname,priclan, splashclan, textObj){

    let randomId = randomString(16);//16 random characters - unlikeliness of same deckname

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
    updateButton.innerText = "Rename";
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
    textChunk.id = "textChunk";
    textChunk.hidden = true;
    let space = document.createElement("br");
    textChunk.appendChild(space);

    for(let i = 0; i < textObj.length; i++){
        let text = document.createElement("p");
        text.innerText = textObj[i];
        textChunk.append(text);
    }

    // create the deck

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

    if(localStorage.getItem("deck") == null){

    }else{
    decks.push(JSON.parse(localStorage.getItem("deck")));
    deckBuilder(decks[0].name, decks[0].primary, decks[0].secondary, decks[0].cards);
    }
    
}
