const deckSpawnLocation = document.getElementById("deck-render-location");
const updateDecknameValue = document.getElementById("input-deckname-text");
const oldDecknameValue = document.getElementById("old-input-deckname-text");

function callDecknameUpdateModal(){
    $("#update-deck-modal").modal('toggle');
}

function displayRenameModal(element){

}

function removeDeck(element){
    
}

function copyDeck(){

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

}

function createDeckButtons(){

    let buttonRow = document.createElement("div");
    buttonRow.classList.add("row", "btn-group", "button-row");

    let rename = document.createElement("button");
    rename.classList.add("btn","btn-md", "btn-dark", "rename-button");
    rename.innerText = "Rename";
    rename.addEventListener("click", function(){
        displayRenameModal(this);
    });
    let copy = document.createElement("button");
    copy.classList.add("btn","btn-md", "btn-dark", "copy-button");
    copy.innerText = "Copy";
    copy.addEventListener("click", function(){
        copyDeck(this);
    });
    let remove = document.createElement("button");
    remove.classList.add("btn","btn-md", "btn-dark", "delete-button");
    remove.innerText = "Delete";
    remove.addEventListener("click", function(){
        removeDeck(this);
    });

    buttonRow.appendChild(rename);
    buttonRow.appendChild(copy);
    buttonRow.appendChild(remove);
    return buttonRow;

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

}

