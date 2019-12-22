const cardRenderLocation = document.getElementById("card-render-location");
const deckTypeContainer = document.getElementById("deck-type-container");
const voteModalImageLocation = document.getElementById("vote-modal-image");

function Card(){

    let primary = undefined;
    let deck = undefined;
    let type = undefined;

    Object.defineProperty(this, "primary", {
        get: function(){
            return primary;
        },
        set: function(value){
            primary = value;
        }
    });

    Object.defineProperty(this, "deck", {
        get: function(){
            return deck;
        },
        set: function(value){
            deck = value;
        }
    });

    Object.defineProperty(this, "type", {
        get: function(){
            return type;
        },
        set: function(value){
            type = value;
        }
    });
}



function hoverBlurr(element, type){
    
    let parent = element.parentElement;
    switch(type){
            case "enter": 
                for(let i = 0; i < parent.children.length; i++){
                    parent.children[i].classList.add("hover-row");
                }
                return;
            case "leave":
                for(let i = 0; i < parent.children.length; i++){
                parent.children[i].classList.remove("hover-row");
                }
                return;
            default: console.alert("try refreshing the page - something went wrong");
                return;
        } 
}

function getImageOfCard(card){
    return card.firstElementChild.currentSrc;
}

function cardClick(element){

    voteModalImageLocation.attributes.src.value = getImageOfCard(element);

    $("#vote-modal").modal('toggle');

}

function clanSelect(element){
    console.log("setting visible");
    deckTypeContainer.hidden = false;
}

function deckTypeSelect(element){

}

function cardTypeSelect(element){

}

