const cardRenderLocation = document.getElementById("card-render-location");
const deckTypeContainer = document.getElementById("deck-type-container");

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

function cardClick(element){
    console.log("beep boop", element);
}

function clanSelect(element){
    console.log("setting visible");
    deckTypeContainer.hidden = false;
}

function deckTypeSelect(element){

}

function cardTypeSelect(element){

}

