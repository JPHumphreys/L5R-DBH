const cardRenderLocation = document.getElementById("card-render-location");
const voteModalImageLocation = document.getElementById("vote-modal-image");

function Card(){

    let primary = undefined;
    let deck = [];
    let type = [];

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
        }
    });

    Object.defineProperty(this, "type", {
        get: function(){
            return type;
        }
    });

    this.addDeckElement = function (newElement){
        let counter = 0 ;
        for(let value in deck){
            if(newElement != deck[value]){
                counter++;
            }
        }
        //* if counter does not equal length - then 1 element matched *//
        if(counter === deck.length){
            deck.push(newElement);
        }
    }

}

let card = new Card();

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

    

}

function deckTypeSelect(element){

}

function cardTypeSelect(element){

}

